### New with Gemini 3 Pro Image

Gemini 3 Pro Image (gemini-3-pro-image-preview) is a state-of-the-art image generation and editing model optimized for professional asset production. Designed to tackle the most challenging workflows through advanced reasoning, it excels at complex, multi-turn creation and modification tasks.

- High-resolution output: Built-in generation capabilities for 1K, 2K, and 4K visuals.
- Advanced text rendering: Capable of generating legible, stylized text for infographics, menus, diagrams, and marketing assets.
- Grounding with Google Search: The model can use Google Search as a tool to verify facts and generate imagery based on real-time data (e.g., current weather maps, stock charts, recent events).
- Thinking mode: The model utilizes a "thinking" process to reason through complex prompts. It generates interim "thought images" (visible in the backend but not charged) to refine the composition before producing the final high-quality output.
- Up to 14 reference images: You can now mix up to 14 reference images to produce the final image.
- Use up to 14 reference images
  Gemini 3 Pro Preview lets you to mix up to 14 reference images. These 14 images can include the following:

- Up to 6 images of objects with high-fidelity to include in the final image
- Up to 5 images of humans to maintain character consistency

<code>
    from google import genai
    from google.genai import types
    from PIL import Image
    
    prompt = "An office group photo of these people, they are making funny faces."
    aspect_ratio = "5:4" # "1:1","2:3","3:2","3:4","4:3","4:5","5:4","9:16","16:9","21:9"
    resolution = "2K" # "1K", "2K", "4K"
    
    client = genai.Client()
    
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=[
            prompt,
            Image.open('person1.png'),
            Image.open('person2.png'),
            Image.open('person3.png'),
            Image.open('person4.png'),
            Image.open('person5.png'),
        ],
        config=types.GenerateContentConfig(
            response_modalities=['TEXT', 'IMAGE'],
            image_config=types.ImageConfig(
                aspect_ratio=aspect_ratio,
                image_size=resolution
            ),
        )
    )
    
    for part in response.parts:
        if part.text is not None:
            print(part.text)
        elif image:= part.as_image():
            image.save("office.png")
</code>

### Grounding with Google Search

Use the Google Search tool to generate images based on real-time information, such as weather forecasts, stock charts, or recent events.

Note that when using Grounding with Google Search with image generation, image-based search results are not passed to the generation model and are excluded from the response.

<code>
from google import genai
prompt = "Visualize the current weather forecast for the next 5 days in San Francisco as a clean, modern weather chart. Add a visual on what I should wear each day"
aspect_ratio = "16:9" # "1:1","2:3","3:2","3:4","4:3","4:5","5:4","9:16","16:9","21:9"

client = genai.Client()

response = client.models.generate_content(
model="gemini-3-pro-image-preview",
contents=prompt,
config=types.GenerateContentConfig(
response_modalities=['Text', 'Image'],
image_config=types.ImageConfig(
aspect_ratio=aspect_ratio,
),
tools=[{"google_search": {}}]
)
)

for part in response.parts:
if part.text is not None:
print(part.text)
elif image:= part.as_image():
image.save("weather.png")
</code>
