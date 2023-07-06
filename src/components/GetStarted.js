import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
// import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",

    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
    //  padding:"5px"
    },
    paddingBottom:"15px"
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Featured Technology
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Everything you will be control!
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Go with this"
            getStartedBtn={true}
          />
        </Box>

        <img
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/future-work2023-thumb.jpg"
          // {homeIllustration}
          alt="illustration"
          style={{ width: 240, height: 416 }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;