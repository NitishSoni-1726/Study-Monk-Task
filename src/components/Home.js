import React from "react";
import video from "./assets/background.mp4";
export default function Home() {
  return (
    <div className="annimation home w-100">
      <video
        id="background-video"
        playsInline
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "89vh" }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
