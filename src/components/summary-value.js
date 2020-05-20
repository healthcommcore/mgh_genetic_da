import React from "react";
import Card from "react-bootstrap/Card";

const SummaryValue = ({ num, heading, leftLabel, rightLabel, value }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{ num + ". " + heading }</Card.Title>
        <Card.Text>
          <div className="d-flex">
            <div className="p-2 flex-fill">
              <p>On a scale of 1 ({ leftLabel }) to 7 ({ rightLabel }) you chose:</p>
            </div>
            <div className="p-2 flex-fill">
              <p>{ value }</p>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SummaryValue;
