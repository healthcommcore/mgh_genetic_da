import React from "react";
import Card from "react-bootstrap/Card";
import LeftMarginContainer from "./left-margin-container";
import { exists } from "../helpers";

const VideoContent = ({ video, caption, placeholder }) => {
  const SITE_URL = "https://api.mghcancergeneticsda.com";
  if (placeholder && !video) {
    return (
      <LeftMarginContainer>
        <img className="img-fluid" src={ SITE_URL + placeholder.uri.url } />
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
