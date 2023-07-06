import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Icon } from '@iconify/react';
// import houseCard from "../media/houseCard.png";

const Webfive = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    color: "white",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(8),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 4 ,backgroundColor: "#002e7d"}}>
      <Container>
       

        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="bx:bar-chart-alt-2" color="white" width="55" height="55" />
            <LargeText>Gain </LargeText>
            {/* <SmallText>Ensure resources are used efficiently and with guardrails to align cost to value</SmallText> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="fluent:building-retail-toolbox-24-regular" color="white" width="55" height="55" />
            <LargeText>Build Data Trust</LargeText>
            {/* <SmallText>Deliver high quality data, on time, every time</SmallText> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="streamline:computer-database-raid-storage-code-disk-programming-database-array-hard-disc" color="white" width="55" height="55" />
            <LargeText>Get Best Practic</LargeText>
            {/* <SmallText>Monitor and analyze performance & configuration to get the most from Snowflake</SmallText> */}
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Webfive;