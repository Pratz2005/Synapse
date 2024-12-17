import React, { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import VisualPanel from "./components/VisualPanel";

function App() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerateText = async () => {
    const response = await fetch("http://127.0.0.1:8000/generate_text/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setGeneratedText(data.generated_text);
  };

  const handleGenerateImage = async () => {
    const response = await fetch("http://127.0.0.1:8000/generate_image/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setImageUrl(data.image_url);
  };

  const handleGenerateVideo = async () => {
    const response = await fetch("http://127.0.0.1:8000/generate_video/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setVideoUrl(data.video_url);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-6 space-x-4">
      <ChatPanel
        prompt={prompt}
        setPrompt={setPrompt}
        onGenerateText={handleGenerateText}
        onGenerateImage={handleGenerateImage}
        onGenerateVideo={handleGenerateVideo}
      />
      <VisualPanel
        generatedText={generatedText}
        imageUrl={imageUrl}
        videoUrl={videoUrl}
      />
    </div>
  );
}

export default App;
