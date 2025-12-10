#!/usr/bin/env python3
"""
Stitch two images together side by side horizontally.

Usage:
    python scripts/stitch_images.py --left left.png --right right.png --output stitched.png
    python scripts/stitch_images.py --left image.png --right image.png --output tiled.png  # Tile same image
"""

import argparse
from PIL import Image


def stitch_images(left_path: str, right_path: str, output_path: str, gap: int = 0) -> None:
    """
    Stitch two images together side by side (horizontally).

    Args:
        left_path: Path to left image
        right_path: Path to right image
        output_path: Path to save stitched output
        gap: Gap between images in pixels. Negative values = overlap.
    """
    left_img = Image.open(left_path).convert("RGBA")
    right_img = Image.open(right_path).convert("RGBA")

    left_width, left_height = left_img.size
    right_width, right_height = right_img.size

    # Use the max height of both images
    max_height = max(left_height, right_height)
    total_width = left_width + right_width + gap  # gap can be negative for overlap

    # Ensure minimum width
    if total_width < 1:
        total_width = 1

    # Create new image with combined dimensions
    stitched = Image.new("RGBA", (total_width, max_height), (0, 0, 0, 0))

    # Paste left image (vertically centered if heights differ)
    left_y = (max_height - left_height) // 2
    stitched.paste(left_img, (0, left_y), left_img)

    # Paste right image (vertically centered if heights differ)
    # For negative gap (overlap), right image overlaps left
    right_x = left_width + gap
    right_y = (max_height - right_height) // 2
    stitched.paste(right_img, (right_x, right_y), right_img)

    stitched.save(output_path, "PNG")
    print(f"Stitched image saved: {output_path}")
    print(f"Dimensions: {total_width} x {max_height}")


def main():
    parser = argparse.ArgumentParser(description="Stitch two images side by side")
    parser.add_argument("--left", "-l", required=True, help="Left image path")
    parser.add_argument("--right", "-r", required=True, help="Right image path")
    parser.add_argument("--output", "-o", required=True, help="Output image path")
    parser.add_argument("--gap", "-g", type=int, default=0, help="Gap between images in pixels")

    args = parser.parse_args()
    stitch_images(args.left, args.right, args.output, args.gap)


if __name__ == "__main__":
    main()
