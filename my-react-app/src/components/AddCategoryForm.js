import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import Context from "../config/context";

export default function AddCategoryForm() {
  const context = useContext(Context);
  const { addCategory } = context;

  //const [categoryID, setCategoryID] = useState(null);
  const [categoryName, setName] = useState("");
  const [categoryDescription, setDescription] = useState("");
  

  /*const handleChange1 = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCategoryID(value);
    }
  };*/

  const handleChange2 = (e, { value }) => setName(value);
  const handleChange3 = (e, { value }) => setDescription(value);

  const handleSubmit = () => {
    const category = {
      //categoryID: categoryID,
      name: categoryName,
      description: categoryDescription
    };
    console.log("Submitting category:", category); // Debug statement
    const jsonData = JSON.stringify(category);
    console.log("Submitting category:", jsonData);
    addCategory(jsonData);
  };
  

  return (
    <Modal
      trigger={<Button primary>Add new Category</Button>}
    >
      <Modal.Header>Add new Category</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="categoryName"
            label="Name"
            placeholder="Category name"
            onChange={handleChange2}
            value={categoryName}
          />
          <Form.Input
            name="categoryDescription"
            label="Description"
            placeholder="Category Description"
            onChange={handleChange3}
            value={categoryDescription}
          />
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
