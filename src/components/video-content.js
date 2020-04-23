import React from "react";
import Card from "react-bootstrap/Card";
import { exists } from "../helpers";

const VideoContent = ({ video, caption, placeholder }) => {
  const SITE_URL = "http://api.geneticda.hccstaging.com";
  return video && (
    <div className="video">
      <video controls poster={ SITE_URL + placeholder.uri.url }>
        <source 
          src={ SITE_URL + video.uri.url }
          type="video/mp4"
        />
      </video>
      <Card>
        <Card.Body>
          <Card.Text>
            { caption }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VideoContent;
