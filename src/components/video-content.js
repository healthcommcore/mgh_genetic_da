import React from "react";
import Card from "react-bootstrap/Card";
import LeftMarginContainer from "./left-margin-container";
import { exists } from "../helpers";

const VideoContent = ({ video, caption, placeholder }) => {
  const SITE_URL = "http://api.geneticda.hccstaging.com";
  return video && (
    <LeftMarginContainer>
      <video controls poster={ SITE_URL + placeholder.uri.url }>
        <source 
          src={ SITE_URL + video.uri.url }
          type="video/mp4"
        />
      </video>
      <Card bsPrefix="card video-caption">
        <Card.Body>
          <Card.Text>
            { caption }
          </Card.Text>
        </Card.Body>
      </Card>
    </LeftMarginContainer>
  );
}

export default VideoContent;
