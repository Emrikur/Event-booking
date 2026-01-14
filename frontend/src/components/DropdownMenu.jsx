import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../styles/dropdownMenuStyles.css";
import { useState, useEffect } from "react";
import { getEvents } from "../services/sanity";

export default function DropdownMenu() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      const uniqueCategories = Array.from(
        new Set(data.map((event) => event.category.title))
      );
      setCategories(uniqueCategories);
    }

    fetchEvents();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {categories.map((category) => (
          <MenuItem key={category} onClick={handleClose}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
