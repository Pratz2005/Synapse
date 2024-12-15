from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
import subprocess
import uuid

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Allow CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for simplicity
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Request schema
class RequestData(BaseModel):
    prompt: str

# Temporary storage for generated media (in-memory)
generated_content = {
    "text": "",
    "image_url": "",
    "video_url": "",
}

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Content Generator API"}

@app.post("/generate_text/")
def generate_text(request: RequestData):
    try:
        response = openai.Completion.create(
            model="gpt-3.5-turbo",  # Compatible with OpenAI 0.27.6
            prompt=request.prompt,
            max_tokens=100
        )
        generated_text = response["choices"][0]["text"].strip()
        generated_content["text"] = generated_text
        return {"generated_text": generated_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



@app.post("/generate_image/")
def generate_image(request: RequestData):
    try:
        # Placeholder: Simulate image generation with a static URL
        # For actual implementation, integrate CLIP or DALL-E API here
        image_url = f"https://via.placeholder.com/512?text={uuid.uuid4().hex[:6]}"
        generated_content["image_url"] = image_url
        return {"image_url": image_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate_video/")
def generate_video(request: RequestData):
    try:
        # Placeholder: Simulate video generation using FFmpeg
        # Generate a blank video (as an example)
        video_filename = f"video_{uuid.uuid4().hex[:6]}.mp4"
        output_path = f"./{video_filename}"

        # Command to generate a 5-second silent video with FFmpeg
        command = [
            "ffmpeg",
            "-f", "lavfi",
            "-i", "color=c=blue:s=1280x720:d=5",
            "-vf", f"drawtext=text='{request.prompt}':fontcolor=white:fontsize=24:x=(w-text_w)/2:y=(h-text_h)/2",
            "-y",
            output_path
        ]

        subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        generated_content["video_url"] = f"http://localhost:8000/{video_filename}"
        return {"video_url": f"http://localhost:8000/{video_filename}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
