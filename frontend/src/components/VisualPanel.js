import React from "react";
import GeneratedImage from "./GeneratedImage";
import GeneratedText from "./GeneratedText";
import GeneratedVideo from "./GeneratedVideo";

function VisualPanel({ generatedText, imageUrl, videoUrl }) {
  return (
    <div className="w-1/2 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Generated Outputs</h2>

      <GeneratedText text={generatedText} />
      <GeneratedImage url={imageUrl} />
      <GeneratedVideo url={videoUrl} />
    </div>
  );
}

export default VisualPanel;
