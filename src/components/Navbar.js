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
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Product " />
                <Tab label="Services" />
                <Tab label="Technology" />
                <Tab label="Clients" />
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