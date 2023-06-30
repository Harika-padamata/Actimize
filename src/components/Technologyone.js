
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Technologyone = () => {
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
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ minHeight: "70vh",backgroundColor:"" }}>
      <Container>
       
        <CustomBox>
        

          <Box sx={{ flex: "1.25" }}>
            <img
              src="https://www.infosys.com/content/dam/infosys-web/en/home/images/experience.jpg"
              alt="heroImg"
              style={{ width: 500, height: 500 }}
            />
          </Box>
          <Box sx={{ flex: "1" }}>
           
           <Title variant="h1">
           We bring you powerful  navigate your digital transformation
           </Title>
          
           {/* <CustomButton
             backgroundColor="#0F1B4C"
             color="#fff"
             buttonText="More About Us"
             heroBtn={true}
           /> */}
         </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Technologyone;