import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Icon } from '@iconify/react';
// import buyIcon from "../media/buy_icon.png";
// import sellIcon from "../media/sell_icon.png";
// import rentIcon from "../media/rent_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import CustomButton from "./CustomButton";

const Microsoftthree = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
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
      }}
    >
      {/* <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div> */}

      <Typography
        variant="h3"
        sx={{ fontSize: "55px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
       Insights
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "40px",
            fontWeight: "300",
            color: "#7E7E7E",
            textAlign: "center",
            lineHeight:"40px",
          }}
        >
        Explore endless possibilities on the Microsoft Dynamics ecosystem with Actimize
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
        <Icon icon="streamline:money-bank-institution-money-saving-bank-payment-finance" color="black" width="45" height="45" />
       
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
        Financial Services
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
         Know more
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
        <Icon icon="mdi:energy-from-grid" color="black" width="45" height="45" />
         
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
         Energy & Utilities
          </Typography>
          
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
          Know more
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
        <Icon icon="fluent:building-retail-toolbox-24-regular" color="black" width="45" height="45" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Selling Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
            Know more
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      {/* <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      /> */}
    </Box>
  );
};

export default Microsoftthree;