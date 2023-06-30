import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


// import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Accledatafive = () => {
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
    fontSize: "64px",
    color: "white",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#002e7d", minHeight: "70vh" }}>
      <Container>
       
        <CustomBox>
          <Box sx={{ flex: "1" ,marginTop:"75px"}}>
         
            <Title variant="h1">
            Join our growing partner ecosystem
            </Title>
            
            <CustomButton
              backgroundColor="#e97533"
              color="#fff"
              buttonText="JOIN OUR PARTNER PROGRAM"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src="https://assets-global.website-files.com/62e14ee46d12dc85d2ae8ec1/63e3505e4cd39c80bfa5dd8f_partner-logos-v2.png"
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Accledatafive;