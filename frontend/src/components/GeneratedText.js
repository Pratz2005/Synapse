import React from "react";

function GeneratedText({ text }) {
  return text ? (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-2">Generated Text:</h3>
      <p className="bg-gray-100 p-4 rounded">{text}</p>
    </div>
  ) : null;
}

export default GeneratedText;
