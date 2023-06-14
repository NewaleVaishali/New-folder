import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import Context from "../config/context";

export default function DelStoreForm() {
  const context = useContext(Context);
  const { DeleteStore } = context;
  const [StoreID, setStoreID] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange1 = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setStoreID(value);
    }
  };

  const handleSubmit = () => {
    const id = StoreID;
    console.log("Submitting Store:", id);
    DeleteStore(id);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Modal
      trigger={<Button primary onClick={handleOpen}>Delete Store</Button>}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Delete Store</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            type="number"
            name="StoreID"
            label="Number"
            placeholder="Store ID"
            onChange={handleChange1}
            value={StoreID}
          />
          <Button type="submit">Delete</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
