import { Grid, Typography,styled,Box } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react';


function Footer() {
    const FooterLink = styled("span")(({ theme }) => ({
        fontSize: "13px",
        color: "white",
        fontWeight: "700",
        cursor: "pointer",
        "&:hover": {
          color: "white",
        },
      }));
      const IconBox = styled(Box)(({ theme }) => ({
        gap: "1rem",
      }));
  return (
    <div>
        <Grid container columns={20} sx={{backgroundColor:'#666666',justifyContent: "space-around",textAlign:'center'}}>
            <Grid xs={12} sm={10} md={4} lg={4}>
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
            </Grid>
            <Grid xs={12} sm={10} md={4} lg={4}>
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
            </Grid>
            <Grid xs={12} sm={10} md={4} lg={4}>
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

            </Grid>
            <Grid xs={12} sm={10} md={4} lg={4}>
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

            </Grid>
            <Grid xs={12} sm={10} md={4} lg={4}>
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
            </Grid>

        </Grid>
    </div>
  )
}

export default Footer