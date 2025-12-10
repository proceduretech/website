#!/usr/bin/env python3
"""
Remove green screen background (#00FF00) from an image.

Usage:
    python scripts/remove_background.py --input image.png --output output.png
    python scripts/remove_background.py --input image.png --output output.png --tolerance 30
"""

import argparse
from PIL import Image


def remove_green_background(input_path: str, output_path: str, tolerance: int = 50, aggressive: bool = False) -> None:
    """
    Remove bright green (#00FF00) background from an image and make it transparent.

    Args:
        input_path: Path to input image
        output_path: Path to save output image (PNG with transparency)
        tolerance: Color matching tolerance (0-255). Higher = more green shades removed.
        aggressive: If True, removes any pixel where green dominates significantly
    """
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()

    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]

            should_remove = False

            if aggressive:
                # Aggressive mode: remove if green is dominant and high
                # Good for removing varied green backgrounds
                green_dominance = g - max(r, b)
                if g > 150 and green_dominance > tolerance:
                    should_remove = True
            else:
                # Standard mode: check if pixel is close to bright green (#00FF00)
                # Green should be high, red and blue should be low
                if (
                    g > (255 - tolerance) and  # Green channel high
                    r < tolerance and           # Red channel low
                    b < tolerance               # Blue channel low
                ):
                    should_remove = True

            if should_remove:
                pixels[x, y] = (0, 0, 0, 0)

    img.save(output_path, "PNG")
    print(f"Background removed: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Remove green screen background from image")
    parser.add_argument("--input", "-i", required=True, help="Input image path")
    parser.add_argument("--output", "-o", required=True, help="Output image path")
    parser.add_argument(
        "--tolerance", "-t",
        type=int,
        default=50,
        help="Color tolerance (0-255). Default: 50"
    )
    parser.add_argument(
        "--aggressive", "-a",
        action="store_true",
        help="Aggressive mode: remove any pixel where green dominates"
    )

    args = parser.parse_args()
    remove_green_background(args.input, args.output, args.tolerance, args.aggressive)


if __name__ == "__main__":
    main()
