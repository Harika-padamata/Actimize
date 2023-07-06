import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
// import Salessix from './Salessix';
// import Salesseven from './Salesseven';
// import videoBg from '../assets/videoBg.mp4'



import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Webtwo = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "48%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  const CustomBox1 = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      marginTop:"-05px",
        backgroundColor: "white",
      }}
    >
          
     
<CustomBox1>
      <Typography
        variant="h3"
        sx={{ fontSize: "55px", fontWeight: "bold",textAlign: "center", color: "black", my: 3 }}
      >
  Does your web application need to print?
      </Typography>
      </CustomBox1>
      <Typography
          variant="body2"
          sx={{
            fontSize: "3rem",
            fontWeight: "200",
            color: "black",
            textAlign: "center",
          }}
        >
            Scriptx ensures print output matches your desired layout
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "black",
            // textAlign: "center",
            margin:"30px",
            marginTop:"30px"
          }}
        > 
        In the digital age, web applications have become an integral part of our daily lives, aiding in our various tasks and interactions. one area that continues to pose challenges for developers and users alike is accurate printing from web apps. Ensuring that your web app’s content is faithfully reproduced physically can be a daunting task.

This is where ScriptX from Meadroid comes into play, offering a solution designed to enhance the printing capabilities of your web application.

In many industries and professions, the need for accurate and reliable information and web application printing is crucial. Whether it’s generating invoices, producing shipping labels, or generating legal documents, the output should perfectly reflect the content displayed on the web app.

Without reliable printing capabilities, businesses may encounter financial losses, legal complications,  customer dissatisfaction. To address these concerns, Meadroid developed ScriptX as a comprehensive solution.
        </Typography>

     
    
    </Box>
  );
};

export default Webtwo;