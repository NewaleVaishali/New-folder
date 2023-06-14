import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import Context from "../config/context";

export default function AddStoreForm() {
  const context = useContext(Context);
  const { addStore } = context;

  //const [categoryID, setCategoryID] = useState(null);
  const [storeLocation, setLocation] = useState("");
  const [storeQuantity, setQuantity] = useState(null);
  const [open, setOpen] = useState(false);

  /*const handleChange1 = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCategoryID(value);
    }
  };*/

  const handleChange2 = (e, { value }) => setLocation(value);
  const handleChange3 = (e, { value }) => setQuantity(value);

  const handleSubmit = () => {
    const store = {
      //categoryID: categoryID,
      location: storeLocation,
      quantity: storeQuantity
    };
    console.log("Submitting category:", store); // Debug statement
    const jsonData = JSON.stringify(store);
    console.log("Submitting category:", jsonData);
    addStore(jsonData);
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Modal
      trigger={<Button primary onClick={handleOpen}>Add new Store</Button>}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Add new Store</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="storeLocation"
            label="Location"
            placeholder="Store location"
            onChange={handleChange2}
            value={storeLocation}
          />
          <Form.Input
            name="storeQuantity"
            label="Quantity"
            placeholder="Store Quantity"
            onChange={handleChange3}
            value={storeQuantity}
          />
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
