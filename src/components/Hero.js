import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh",marginTop:'10' }}>
      <Container>
      
        <CustomBox>
          <Box sx={{ flex: "1" ,    mt:10 }}>
           
            <Title variant="h1">
            We bring you powerful  navigate your digital transformation
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              {/* Be the first to get the best real estate deals before they hit the
              mass market! Hot foreclosure deals with one simple search! */}
            </Typography>
            {/* <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            /> */}
          </Box>

          <Box sx={{ flex: "1.25", mt:10 }}>
            <img
              src="https://www.infosys.com/content/dam/infosys-web/en/home/images/experience.jpg"
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;