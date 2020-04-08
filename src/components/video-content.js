import React from "react";
import { exists } from "../helpers";

const VideoContent = ({ video }) => {
  return video && (
    <div className="video">
      <video controls>
        <source 
          src={ "http://api.geneticda.hccstaging.com" + video.uri.url }
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoContent;
