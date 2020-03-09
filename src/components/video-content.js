import React from "react";
import { exists } from "../helpers";

const VideoContent = ({ video }) => {
  return (
    <>
      { exists(video.field_video) ?
        <div className="video">
          <video controls>
            <source 
              src={ "http://api.geneticda.hccstaging.com" + video.field_video.uri.url }
              type="video/mp4"
            />
          </video>
        </div>
        : ""
      }
    </>
  );
}

export default VideoContent;
