import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  styled
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { Link, Navigate } from "react-router-dom";
const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
  //   display: "none",
  },
}));
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#666666" }}>
        <Toolbar>
        <NavbarLogo  style={{ width: 100, height: 50 }}
               src="	https://actimize.in/assets/img/act.png" 

          alt="logo" />
        
          {isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
               
                <Link  to="/"  style={{ textDecoration: 'none', color:"White" }}><Tab label="Home" /></Link>
                <Link  style={{ textDecoration: 'none', color:"White" }}><Tab label="About" /></Link>
                <Link style={{ textDecoration: 'none', color:"White" }}><Tab label="Services" /></Link>

                <Link  style={{ textDecoration: 'none', color:"White" }}><Tab label="Product" /></Link>

                <Link to="/technology" style={{ textDecoration: 'none', color:"White" }}><Tab label="Technology" /></Link>
              
                <Link to="/client" style={{ textDecoration: 'none', color:"White" }} ><Tab label="client" /></Link>

              </Tabs>
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;