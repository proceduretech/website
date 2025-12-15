---
name: image-generation
description: Generate images, illustrations using the Gemini 3 Pro model for various purposes such as design, illustration, and more.
---

# Image Generation

## Instructions

Take the given prompt and use the helper script to generate an image using the Gemini 3 Pro model. The prompt may include details such as style, color, and subject matter. It can also include references to existing images or text to incorporate into the generated image.

Generate an image using the Gemini 3 Pro model. For advanced usage, see [reference.md](reference.md).

You can find additional examples in the [examples.md](examples.md).

Run the helper script:

```bash
uv run scripts/generate_image.py --prompt "Your prompt" --input "reference.png" --output "output.png"
```
