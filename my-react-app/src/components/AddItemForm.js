import React, { useContext, useState, useEffect } from "react";

import { Form, Modal, Button, Header, Dropdown } from "semantic-ui-react";

import Context from "../config/context";

export default function AddItemForm() {
  const context = useContext(Context);
  const { categories, getCategories,stores,getStores,addItem } = context;

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getStores();
  }, []);

  const listStores = stores.map(store => ({
    key: store.id,
    text: store.location,
    value: store.id
  }));

  const listCategories = categories.map(category => ({
    key: category.id,
    text: category.name,
    value: category.id
  }));

  
 
  const [itemName, setName] = useState("");
  const [itemStatus, setStatus] = useState("");
  const [itemPrice, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [store, setStore] = useState("");
  const [open, setOpen] = useState(false);


  
const handleChange2 = (e, { value }) => setName(value);
const handleChange3 = (e, { value }) => setStatus(value);
const handleChange5 = (e, { value }) => setStore(value);
const handleChange4 = (e, { value }) => setCategory(value);
const handleChange6 = (e, { value }) => setPrice(value);


const handleSubmit = () => {
  const item = {
    name: itemName,
    status: itemStatus,
    price:itemPrice,
    store_id:parseInt(store),
    category_id: parseInt(category),
  };
  console.log("Submitting category:", item); 
  const jsonData = JSON.stringify(item);
  console.log("Submitting category:", jsonData);
  addItem(jsonData,item.store_id,item.category_id);
  setOpen(false);
};
const handleOpen = () => {
  setOpen(true);
};
  return (
    <Modal
    trigger={<Button primary onClick={handleOpen}>Add new Item</Button>}
    open={open}
    onClose={() => setOpen(false)}
    >
      <Modal.Header>Add new Item</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          
          <Form.Input
            name="itemName"
            label="Name"
            placeholder=" name"
            onChange={handleChange2}
            value={itemName}
          />
           <Form.Input
            name="itemStatus"
            label="Status"
            placeholder=" status"
            onChange={handleChange3}
            value={itemStatus}
          />
           <Form.Input
            name="itemPrice"
            label="Price"
            placeholder="price"
            onChange={handleChange6}
            value={itemPrice}
          />
          <Form.Field>
            <Header as="h5">Category</Header>
            <Dropdown
              name="category"
              placeholder="Category"
              fluid
              selection
              options={listCategories}
              onChange={handleChange4}
              value={category}
            />
          </Form.Field>
          <Form.Field>
            <Header as="h5">Store</Header>
            <Dropdown
              name="store"
              placeholder="Store"
              fluid
              selection
              options={listStores}
              onChange={handleChange5}
              value={store}
            />
          </Form.Field>
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}