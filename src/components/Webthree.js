import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


// import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Webthree = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

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
        <Box sx={{ flex: "1.25", marginTop:"85px" }}>
            <img
              src="https://www.meadroid.com/wp-content/uploads/2023/02/PDF_working.png"
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
          <Box sx={{ flex: "1" ,marginTop:"85px"}}>
         
            <Title variant="h1">
            Streamlining print formatting for web app e-commerce platform
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
         Challenge: A popular e-commerce platform, faced consistent print formatting issues when customers attempted to print order confirmations and invoices. The web application’s default printing functionality resulted in distorted layouts and inconsistent formatting across different browsers.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "17px",
                color: "black",
                fontWeight: "100",
                mt: 0,
                mb: 1,
              }}
            >
         Solution: By implementing ScriptX from Meadroid, they successfully addressed these print formatting challenges. ScriptX provided granular control over the print output, enabling the customisation of page headers, footers, margins, and other elements. Additionally, ScriptX ensured consistent print results across various browsers, eliminating the need for manual adjustments.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "17px",
                color: "black",
                fontWeight: "100",
                mt: 0,
                mb: 1,
              }}
            >
          Results: With ScriptX, they achieved a significant improvement in print formatting accuracy. Customers could now print order confirmations and invoices without any distortion or missing content. This enhanced the professional image of the online store and improved customer satisfaction.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "17px",
                color: "black",
                fontWeight: "100",
                mt: 0,
                mb: 1,
              }}
            >
          Results: With ScriptX, they achieved a significant improvement in print formatting accuracy. Customers could now print order confirmations and invoices without any distortion or missing content. This enhanced the professional image of the online store and improved customer satisfaction.
            </Typography>
            
            
          </Box>

        
        </CustomBox>
      {/* </Container> */}
    </Box>
  );
};

export default Webthree;