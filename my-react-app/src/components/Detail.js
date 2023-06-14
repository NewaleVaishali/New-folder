import React, { useContext, useEffect } from "react";

import Context from "../config/context";

import {
  Form,
  Modal,
  Button,
  Header,
  Dropdown,
  Image,
  Grid
} from "semantic-ui-react";

export default function Detail(props) {
  const context = useContext(Context);
  

 


  return (
    <Modal trigger={<Button fluid>Show item</Button>}>
      <Modal.Content>
        <br />
        <Form>
          <Form.Input name="itemName" label="Name" value={props.item.name} />
          <Button primary fluid>
            Comprar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}