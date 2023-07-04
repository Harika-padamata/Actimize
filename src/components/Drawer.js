import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Navigate } from "react-router-dom";
const pages = ["Home", "About", "Products", "Services","Technology","Client"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {/* {pages.map((page, index) => ( */}
            <ListItemButton >
              <ListItemIcon>
              <Link  to="/"  style={{ textDecoration: 'none', color:"black" }}> <ListItemText>Home</ListItemText></Link>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton >
              <ListItemIcon>
              <Link  to="/aboutus"  style={{ textDecoration: 'none', color:"black" }}> <ListItemText>About</ListItemText></Link>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton >
              <ListItemIcon>
              <Link  to="/products"  style={{ textDecoration: 'none', color:"black" }}><ListItemText>Products</ListItemText></Link>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton >
              <ListItemIcon>
       <Link  to="/services"  style={{ textDecoration: 'none', color:"black" }}> <ListItemText>Services</ListItemText></Link>
              </ListItemIcon>
              
            </ListItemButton>
            <ListItemButton >
              <ListItemIcon> 
            <Link to="/technology" style={{ textDecoration: 'none', color:"black" }}>  <ListItemText>Technology</ListItemText></Link>
              </ListItemIcon>
              
            </ListItemButton>
            <ListItemButton >
              <ListItemIcon>
              <Link to="/client" style={{ textDecoration: 'none', color:"black" }}>  <ListItemText>Client</ListItemText></Link>
              </ListItemIcon>    
            </ListItemButton>
          {/* ))} */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;