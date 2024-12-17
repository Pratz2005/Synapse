import React from "react";

function ChatPanel({ prompt, setPrompt, onGenerateText, onGenerateImage, onGenerateVideo }) {
  return (
    <div className="w-1/2 bg-gray-50 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enter Your Prompt</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
        rows="5"
        className="w-full p-2 border rounded-md mb-4"
      ></textarea>

      <div className="flex flex-col gap-4">
        <button
          onClick={onGenerateText}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Generate Text
        </button>
        <button
          onClick={onGenerateImage}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Generate Image
        </button>
        <button
          onClick={onGenerateVideo}
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Generate Video
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;
