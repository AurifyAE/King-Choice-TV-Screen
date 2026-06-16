import React from "react";

// noo
const VideoPlayer = () => {
  return (
    <div className="w-full h-full mt-5 rounded-md">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/xBcugR2fM84?si=tE3LxaB3lCPtlU74"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ minHeight: "440px" }}
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
