import React, { useContext } from "react";

import { Container, Header, Image, Label } from "semantic-ui-react";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  
 
  return (
    <Container textAlign="center">
      
      <Header as="h1" color="teal">
        Item Management
      </Header>
      <Header as="h3">
       Lowes Usecase-1 Item Management
      </Header>
    </Container>
  );
}