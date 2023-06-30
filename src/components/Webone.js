import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


// import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Webone = () => {
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
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#002e7d", minHeight: "70vh" }}>
      <Container>
       
        <CustomBox>
          <Box sx={{ flex: "1" ,marginTop:"85px"}}>
         
            <Title variant="h1">
            ScriptX.Services
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "28px",
                color: "white",
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
             Precision printing from web applications
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "white",
                fontWeight: "100",
                mt: 0,
                mb: 1,
              }}
            >
            Control & customise web app printing
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "white",
                fontWeight: "100",
                mt: 0,
                mb: 1,
              }}
            >
            Solve web app browser print issues
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "white",
                fontWeight: "100",
                mt: 0,
                mb: 1,
              }}
            >
             Consistent web app print output
            </Typography>
            
            
          </Box>

          <Box sx={{ flex: "1.25", marginTop:"85px" }}>
            <img
              src="https://assets-global.website-files.com/62e14ee46d12dc85d2ae8ec1/63d93ea89a3eb9227a79b801_spend-intel-hero.png"
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Webone;