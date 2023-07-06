import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Icon } from '@iconify/react';

// import fbIcon from "../media/fbicon.png";
// import twitterIcon from "../media/twittericon.png";
// import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "13px",
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  }));

  return (
    <Box sx={{ py: 3,backgroundColor: "#666666" }}>
    
        <CustomContainer sx={{m:2}}>
          
          <Box >
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
            Company
            </Typography>

            <FooterLink>Navigate your next</FooterLink>
            <br />
            <FooterLink>About Us</FooterLink>
            <br />
            <FooterLink>Careers</FooterLink>
            <br />
            <FooterLink>ESG</FooterLink>
            <br />
            <FooterLink>Investors</FooterLink>
            <br />
            <FooterLink>Newsroom</FooterLink>
            <br />
            <FooterLink>Alumni</FooterLink>
            
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
           Subsidiaries
            </Typography>

            <FooterLink>EdgeVerve Systems</FooterLink>
            <br />
            <FooterLink>Actimize BPM</FooterLink>
            <br />
            <FooterLink>Actimize Consulting</FooterLink>
            <br />
            <FooterLink>Actimize Public Services</FooterLink>
            <br />
            <FooterLink>Solutions for Professional Services</FooterLink>
           
            <br />
            <FooterLink>Community Engagement </FooterLink>
            <br />
            <FooterLink>Virtual Events Platform </FooterLink>
            <br />
            <FooterLink>QR Codes for Event Check-In </FooterLink>
           
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
          Programs
            </Typography>

            <FooterLink>Actimize Foundation</FooterLink>
            <br />
            <FooterLink>Actimize Foundation India</FooterLink>
            <br />
            <FooterLink>Actimize Science Foundation</FooterLink>
            <br />
            <FooterLink>Actimize Hobby Events</FooterLink>
            <br />
            <FooterLink>Actimize Leadership Institute</FooterLink>
            
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
           Support
            </Typography>
            <FooterLink>Terms of Use</FooterLink>
            <br />
            <FooterLink> Privacy Statement  </FooterLink>
            <br />
            <FooterLink> Cookie Policy </FooterLink>
            <br />
            <FooterLink> Safe Harbour Provision</FooterLink>
            <br />
            <FooterLink>Site Map </FooterLink>
            <br />
           
            <FooterLink>Modern Slavery Statement </FooterLink>

            <br />
            <FooterLink>Payment Guide for Suppliers </FooterLink>

          
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
             Connect With Us
            </Typography>
            <IconBox >
              <Icon icon="gg:facebook" width="35" height="35" color="white" />
              <Icon icon="fe:messanger" width="35" height="35" color="white" />
              <Icon  icon="basil:linkedin-solid"width="35" height="35" color="white" />
              <Icon icon="mdi:twitter" width="35" height="35"  color="white" />
            </IconBox>   
          </Box>
        </CustomContainer>
     
    </Box>
  );
};
export default Footer;