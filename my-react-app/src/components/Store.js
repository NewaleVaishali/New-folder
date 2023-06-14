import React from "react";
import { Card } from "semantic-ui-react";

export default function Store(props) {
  

  return (
    <Card color="teal">
      <Card.Content>
        <Card.Header>{props.store.location}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header>{props.store.quantity}</Card.Header>
      </Card.Content>
    </Card>
  );
}