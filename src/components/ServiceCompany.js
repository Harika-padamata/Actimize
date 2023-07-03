import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Icon } from '@iconify/react';

function ServiceCompany() {
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
        color: "#033e8c",
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
    <div style={{marginBottom:'5%'}}>
         {/* <Box sx={{ py: 4 ,backgroundColor: "#033e8c"}}> */}
      <Container>
       

        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="solar:list-check-bold" color="#033e8c" width="55" height="55" />
            <LargeText>20+</LargeText>
            <Typography sx={{color:'#033e8c'}}>Completed Projects</Typography>
            {/* <SmallText>Ensure resources are used efficiently and with guardrails to align cost to value</SmallText> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="fa:smile-o" color="#033e8c" width="55" height="55" />
            <LargeText>100%</LargeText>
            <Typography sx={{color:'#033e8c'}}>Happy Clients</Typography>
            {/* <SmallText>Ensure resources are used efficiently and with guardrails to align cost to value</SmallText> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="carbon:grid" color="#033e8c" width="55" height="55" />
            <LargeText>10+</LargeText>
            <Typography sx={{color:'#033e8c'}}>Ongoing Projects</Typography>
            {/* <SmallText>Deliver high quality data, on time, every time</SmallText> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="gg:awards" color="#033e8c" width="55" height="55" />
            <LargeText>15+</LargeText>
            <Typography sx={{color:'#033e8c'}}>Winning Awards</Typography>
            {/* <SmallText>Monitor and analyze performance & configuration to get the most from Snowflake</SmallText> */}
          </Box>
        </TextFlexbox>
      </Container>
    {/* </Box> */}
    </div>
  )
}

export default ServiceCompany