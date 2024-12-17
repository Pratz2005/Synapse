import React from "react";

function GeneratedImage({ url }) {
  return url ? (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Generated Image:</h3>
      <img src={url} alt="Generated" className="rounded shadow-md" />
    </div>
  ) : null;
}

export default GeneratedImage;
