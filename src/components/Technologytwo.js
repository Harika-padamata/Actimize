import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
// import logoImg from "../media/logo.png";
// import starsImg from "../media/Star.png";
// import logosImg from "../media/logos.png";

const Technologytwo = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  }));

  return (
    <Box sx={{ mt: 1 , backgroundColor:'' }}>
      <CustomContainer>
        <CustomBox>
          <img 
          src="https://actimize.in/assets/img/act.png"
          alt="logo"  />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
           The rise of future
          </Typography>
        </CustomBox>

        <Box sx={{mt:"10px"}}>
          <img 
          src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/Star.png?raw=true"
          alt="stars" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 3,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img
         src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/logos.png?raw=true"
         style={{  height: 170 }}
         alt="logos" />
         
      </Container>
    </Box>
  );
};

export default Technologytwo;