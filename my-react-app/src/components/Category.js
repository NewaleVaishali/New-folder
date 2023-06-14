import React from "react";
import { Card } from "semantic-ui-react";

export default function Category(props) {
  

  return (
    <Card color="teal">
      <Card.Content>
        <Card.Header>{props.category.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header>{props.category.description}</Card.Header>
      </Card.Content>
    </Card>
  );
}