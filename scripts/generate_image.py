#!/usr/bin/env python3
"""
Generate images using Google's Nano Banana Pro (Gemini) model.

This script is designed to be used by a sub-agent for creative and illustration tasks.

Usage:
    uv run scripts/generate_image.py --prompt "Your prompt" --output "output.png"
    uv run scripts/generate_image.py --prompt "Your prompt" --input "reference.png" --output "output.png"

Environment:
    GOOGLE_API_KEY: Your Google AI API key
"""

import argparse
import base64
import sys
from pathlib import Path

from dotenv import load_dotenv
from google import genai

load_dotenv()  # Loads .env from current directory or parents
from google.genai import types


def generate_image(
    prompt: str,
    output_path: str,
    input_image_path: str | None = None,
    aspect_ratio: str = "16:9",
    resolution: str = "2K",
) -> str:
    """
    Generate an image using Nano Banana Pro.

    Args:
        prompt: The text prompt describing what to generate or modify
        output_path: Path where the generated image will be saved
        input_image_path: Optional path to a reference/input image for editing
        aspect_ratio: Aspect ratio for the output (1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9)
        resolution: Output resolution (1K, 2K, 4K)

    Returns:
        Path to the saved image, or error message
    """
    client = genai.Client()

    # Use the image generation model
    model = "gemini-3-pro-image-preview"

    contents: list[types.Part | str] = []

    # If input image provided, include it in the request
    if input_image_path:
        input_path = Path(input_image_path)
        if not input_path.exists():
            return f"Error: Input image not found: {input_image_path}"

        # Read and encode the input image
        image_bytes = input_path.read_bytes()
        mime_type = _get_mime_type(input_path.suffix)

        contents.append(
            types.Part.from_bytes(
                data=image_bytes,
                mime_type=mime_type,
            )
        )

    contents.append(prompt)

    # Generate the image
    response = client.models.generate_content(
        model=model,
        contents=contents,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
            image_config=types.ImageConfig(
                aspect_ratio=aspect_ratio,
                image_size=resolution,
            ),
        ),
    )

    # Process the response
    text_response = None
    image_saved = False

    for part in response.candidates[0].content.parts:
        if part.text is not None:
            text_response = part.text
        elif part.inline_data is not None:
            # Save the generated image
            output = Path(output_path)
            output.parent.mkdir(parents=True, exist_ok=True)

            image_data = base64.b64decode(part.inline_data.data)
            output.write_bytes(image_data)
            image_saved = True

    if image_saved:
        result = f"Image saved to: {output_path}"
        if text_response:
            result += f"\nModel response: {text_response}"
        return result
    elif text_response:
        return f"No image generated. Model response: {text_response}"
    else:
        return "Error: No image or text in response"


def _get_mime_type(suffix: str) -> str:
    """Get MIME type from file extension."""
    mime_types = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
    }
    return mime_types.get(suffix.lower(), "image/png")


def main():
    parser = argparse.ArgumentParser(
        description="Generate images using Nano Banana Pro (Gemini)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    # Generate a new image
    uv run scripts/generate_image.py --prompt "A futuristic city at sunset" --output "city.png"

    # Edit an existing image
    uv run scripts/generate_image.py --prompt "Add flying cars to this scene" --input "city.png" --output "city_with_cars.png"

    # Generate with specific aspect ratio
    uv run scripts/generate_image.py --prompt "Logo design" --output "logo.png" --aspect-ratio "1:1" --resolution "4K"
        """,
    )

    parser.add_argument(
        "--prompt",
        "-p",
        required=True,
        help="The prompt describing what to generate or modify",
    )
    parser.add_argument(
        "--output",
        "-o",
        required=True,
        help="Output path for the generated image",
    )
    parser.add_argument(
        "--input",
        "-i",
        help="Optional input image path for editing/reference",
    )
    parser.add_argument(
        "--aspect-ratio",
        "-a",
        default="16:9",
        choices=[
            "1:1",
            "2:3",
            "3:2",
            "3:4",
            "4:3",
            "4:5",
            "5:4",
            "9:16",
            "16:9",
            "21:9",
        ],
        help="Aspect ratio for the output image (default: 16:9)",
    )
    parser.add_argument(
        "--resolution",
        "-r",
        default="2K",
        choices=["1K", "2K", "4K"],
        help="Output resolution (default: 2K)",
    )

    args = parser.parse_args()

    result = generate_image(
        prompt=args.prompt,
        output_path=args.output,
        input_image_path=args.input,
        aspect_ratio=args.aspect_ratio,
        resolution=args.resolution,
    )

    print(result)

    # Exit with error code if generation failed
    if result.startswith("Error:"):
        sys.exit(1)


if __name__ == "__main__":
    main()
