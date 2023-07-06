import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Stack from '@mui/material/Stack';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import {  Link } from "react-router-dom";

const Microsoftfive = () => {
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
    color: "Black",
    fontWeight: "700",
    cursor: "pointer",
    "&:hover": {
      color: "Black",
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <Box sx={{ py: 3,backgroundColor: "#372261" ,py:"20px"}}>
    
    <CustomBox>
      <CustomContainer >
      <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 16 }}>
      
      <Grid item xs={5} sm={8} md={5} >
             
         
         <Stack direction="row"textDecoration= 'none' spacing={0}>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "White", fontWeight: "700" }}
          >
       Frequently asked questions about Microsoft
          </Typography>
        

        
        </Box>
     
    
   </Stack>

        
       
       </Grid>
       <Grid item xs={5} sm={8} md={5} >
             
         
             <Stack direction="coloum"textDecoration= 'none' spacing={5}>
            <Box>
              <Typography
                sx={{ fontSize: "15px", color: "White", fontWeight: "700" }}
              >
          REFORM Industry
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "500", my: 1}}
              >
              PRESS RELEASE
Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "White", fontWeight: "700", marginTop:"60px" }}
              >
       REF-OR-M Solution – Modern CX for Utilities to

              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "500" , marginTop:"20px"}}
              >
               MBCC brings in value to customers through industry perspectives, maturity modeling, persona-based solutions and innovative accelerators
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "White", fontWeight: "700", marginTop:"80px" }}
              >
     Service Management for Electricity Distributors@!

              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "500" , marginTop:"20px"}}
              >
              Most organizers pass fees to their attendees, and pay nothing out of pocket to use Eventbrite! By default, when using Eventbrite Payment Processing, your attendees will automatically pay fees but you have the option to "absorb"
               your fees and pay them out of your ticketing revenue, if you'd rather.
              </Typography>
            </Box>
         
        
       </Stack>
    
            
           
           </Grid>
           <Grid item xs={5} sm={8} md={5} >
             
         
             <Stack direction="row"textDecoration= 'none' spacing={0}>
            <Box>
              <Typography
                sx={{ fontSize: "15px", color: "White", fontWeight: "700" }}
              >
         REF-OR-M Solution for Smart Living ....!
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "500", my: 3 }}
              >
                Digitize end-to-end workflow of communications between Backoffice & Store Associates
Infosys Powerhouse – CoE Governance 
              </Typography>

              <Typography
                sx={{ fontSize: "15px", color: "White", fontWeight: "700" }}
              >
     SmartMove – Dynamics AX Upgrade Solution/!!!!!
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "500", marginTop:"20px" }}
              >
                Helping customers with technology and business transformations - Application Rationalization, Digital initiatives, LCAP adoption.
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "700" }}
              >
      * Additional payment processing fees or tax may be applicable
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "White", fontWeight: "700", marginTop:"20px" }}
              >
         Reference frameworks
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "White", fontWeight: "500" ,marginTop:"10px"}}
              >
     Guidance frameworks to facilitate advisory engagements and project execution - ACE, Governance Models.
     Guidance frameworks to facilitate advisory engagements and project execution - ACE, Governance Models.
     Guidance frameworks to facilitate advisory engagements and project execution - ACE, Governance Models.

              </Typography>
            </Box>
         
        
       </Stack>
    
            
           
           </Grid>
         
       
      
   </Grid>
        
        {/* <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
         Hosting a large or complex event?
          </Typography>
          <Typography
            sx={{ fontSize: "13px", color: "black", fontWeight: "500", my: 3 }}
          >
           We offer tailored packages for event pros withkejrfhk rjfhkerjfhk unique needs. Get customized fee schedule, personalized support, and more individualized features by partnering with our sales team.
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="black"
            border="1px solid"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box> */}
        

        {/* <img
        src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/Contact+Sales_Pricing.svg"
        //   src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        /> */}
      </CustomContainer>
    </CustomBox>
     
    </Box>
  );
};

export default Microsoftfive;