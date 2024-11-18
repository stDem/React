import React from "react";
import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
  return (
    <ReactPlayer
      url='https://www.youtube.com/watch?v=QVoSgRbd69c'
      playing={false}
      volume={0.5}
    />
  );
};

export default MyVideo;