import React from "react";
import video from "./assets/background.mp4";
export default function Home() {
  return (
    <div className="annimation home w-100">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        style={{ width: "100%" }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
