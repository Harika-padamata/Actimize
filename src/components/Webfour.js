import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Webfour = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    // justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      // alignItems: "center",
      // textAlign: "center",
    },
  }));
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = React.useState(true);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(true);
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(true);
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "38px",
    color: "black",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "", minHeight: "70vh",margin :"25px"}}>
      {/* <Container> */}
       
        <CustomBox>
      
          <Box sx={{ flex: "1" ,marginTop:"85px"}}>
         
            <Title variant="h1">
            Direct (RAW) Printing
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "17px",
                color: "black",
                fontWeight: "300",
                mt: 2,
                mb: 2,
              }}
            >
The RAW printing option provides printing to programmable devices such as thermal label printers            </Typography>
<Typography
              variant="body2"
              sx={{
                fontSize: "17px",
                color: "black",
                fontWeight: "300",
                mt: 2,
                mb: 2,
              }}
            >
With RAW print you can send EPL, ZPL control language or even strings of printer control codes directly to the printer.</Typography>
<Typography
              variant="body2"
              sx={{
                fontSize: "17px",
                color: "black",
                fontWeight: "300",
                mt: 2,
                mb: 2,
              }}
            >
Benefits of RAW Printing:  
      </Typography>
          
            <List
      sx={{ width: '100%', maxWidth: 960,border:"1px solid black" }}
      component="nav" aria-labelledby="nested-list-subheader" >
      <ListItemButton onClick={handleClick}>
      <Typography
              variant="body2"
              sx={{
                fontSize: "19px",
                color: "black",
                fontWeight: "bold",  
              }}
            >
                Faster printing
            </Typography>
       
        <ListItemText  > </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemText
           
             >
                Faster printing as it uses the intelligence within programmable thermal label printers to interpret the specified text sent directly to the printer 
             </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper',border:"1px solid black" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
     
      <ListItemButton onClick={handleClick1}>
      <Typography
              variant="body2"
              sx={{
                fontSize: "19px",
                color: "black",
                fontWeight: "bold",
                
              }}
            >
              Faster printing
            </Typography>
        
        <ListItemText  />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
          
            <ListItemText primary="Brings the advantages of web-based applications to these scenarios" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper',border:"1px solid black" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
     
      <ListItemButton onClick={handleClick2}>
      <Typography
              variant="body2"
              sx={{
                fontSize: "19px",
                color: "black",
                fontWeight: "bold",
                
              }}
            >
            Advantages of web-based applications
            </Typography>
        
        <ListItemText />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
           
            <ListItemText primary="Brings the advantages of web-based applications to these scenarios" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper',border:"0.1px solid black" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
     
      <ListItemButton onClick={handleClick3}>
      <Typography
              variant="body2"
              sx={{
                fontSize: "19px",
                color: "black",
                fontWeight: "bold",
                
              }}
            >
          More control and reliability
            </Typography>
        
        <ListItemText />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
          
            <ListItemText primary="Direct printing provides more control and reliability than printing of HTML via a browser" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
            
          </Box>
          <Box sx={{ flex: "1.25", marginTop:"85px" }}>
            <img
              src="https://www.meadroid.com/wp-content/uploads/2023/02/direct_printing.png"
              alt=""
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        
        </CustomBox>
      {/* </Container> */}
    </Box>
  );
};

export default Webfour;