import React from "react";

function GeneratedVideo({ url }) {
  return url ? (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Generated Video:</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        View Generated Video
      </a>
    </div>
  ) : null;
}

export default GeneratedVideo;
