import React, { useContext, useState } from "react";

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Context from "../config/context";

export default function Navbar() {
  const context = useContext(Context);


  const path = "home";
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleItemClick1 = (e, { name }) => setActiveItem(name);
  const handleItemClick2 = (e, { name }) => setActiveItem(name);
  const menuBar = (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="categories"
        active={activeItem === "categories"}
        onClick={handleItemClick}
        as={Link}
        to="/categories"
      />
      <Menu.Item
        name="items"
        active={activeItem === "items"}
        onClick={handleItemClick1}
        as={Link}
        to="/items"
      />
      <Menu.Item
        name="stores"
        active={activeItem === "stores"}
        onClick={handleItemClick2}
        as={Link}
        to="/stores"
      />
    </Menu>
    
  );
  return menuBar;
}