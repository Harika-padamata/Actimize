import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Acceldataone = () => {
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
    fontSize: "32",
    color: "#002e7d",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 1, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "", minHeight: "60vh",m:6}}>
      <Container>
   
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            
          <Title variant="h6">
             spend Intelligence
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#222;",
                fontWeight: "500",
                mt: 1,
                mb: 1,
              }}
            >
            Proactively manage cost and usage to maximize business value
            </Typography>
            <Title variant="h6">
            Data Reliability
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#222;",
                fontWeight: "500",
                mt: 1,
                mb: 4,
              }}
            >
            Maximize data quality and eliminate data outages
            </Typography>
            <Title variant="h6">
            Operational Intelligence
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#222;",
                fontWeight: "500",
                mt: 1,
                mb: 4,
              }}
            >
           Utilize real-time insights to optimize your data platforms
            </Typography>
            <Title variant="h6">
            Operational Intelligence
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#222;",
                fontWeight: "500",
                mt: 1,
                mb: 4,
              }}
            >
           Utilize real-time insights to optimize your data platforms
            </Typography>
           
          
            {/* <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            /> */}
          </Box>
          <CustomBox 
         sx={{
            backgroundColor: "#E6F0FF",
          minHeight: "40vh",
          backdropFilter:"blur(20px)",
          backgroundSize: "cover",
          display:"flex",
        //   filter:"blur(50px) brightness(1.9)",
         borderRadius: 6, }} 
         >
          
          <Box sx={{ flex: "1.25" , minHeight: "50vh",borderRadius:"8"}}>
            <Typography
              variant="body2"
              sx={{ fontSize: "24px", color: "#5A6473",fontWeight: "800", my: 4 }}
            >
             Spend Intelligence | Reduce data platform costs by 50%
            </Typography>
            <img
              src="https://assets-global.website-files.com/62e14ee46d12dc85d2ae8ec1/647da20a3bff2bfca62ac9d2_image%203-p-800.png"
              alt="heroImg"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          </CustomBox>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Acceldataone;