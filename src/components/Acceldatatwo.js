
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
// import houseCard from "../media/houseCard.png";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';

const Acceldatatwo = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
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
    fontSize: "64px",
    color: "#000",
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
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "100%",
    height: "2px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 5 ,m:10}}>
      <Container>
        <CustomBox>
          <ImgContainer sx={{paddingLeft:"20px"}}>
            <img 
            src="https://assets-global.website-files.com/62e14ee46d12dc85d2ae8ec1/642703d36306fdb95c32005d_data-observability-platform-4c.svg"
            alt="house" style={{ maxWidth: "100%" }} />
          </ImgContainer>

          <Box>
           
            <Typography
              sx={{
                fontSize: "40px",
                color: "#002e7d",
                fontWeight: "700",
                lineHeight: "47px",
             marginTop:"65px"
              }}
            >
            Comprehensive
data observability for the enterprise
            </Typography>

            <Typography
              sx={{
                fontSize: "19px",
                color: "#5A6473",
                lineHeight: "32px",
                py: 1
              }}
            >
              Gain comprehensive visibility, identify and prevent issues, and make your data stack reliable.
            </Typography>
            <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           */}
           <Icon icon="icon-park:correct" width="55" height="55" />
        </ListItemAvatar>
        <ListItemText
        
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h5"
                color="#002e7d"
              >
              Compute & Infrastructure -
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
            Optimize compute, capacity, resources, costs, and performance of your data infrastructure
              </Typography>
              {/* {" — Optimize compute, capacity, resources, costs, and performance of your data infrastructure"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Icon icon="icon-park:correct" width="55" height="55" />

        </ListItemAvatar>
        <ListItemText
       
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h5"
                color="#002e7d"
              >
              Reliability
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                 -  Improve data quality, reconciliation, and determine schema drift, data drift
              </Typography>
              {/* {" — Wish I could come, but I'm out of town this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Icon icon="icon-park:correct" width="55" height="55" />

        </ListItemAvatar>
        <ListItemText
        
          secondary={
            <React.Fragment>
             <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h5"
                color="#002e7d "
              >
           Pipelines
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
          - Identify issues with transformation, events, applications, alerts, and provide insights
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Box>
        </CustomBox>

        {/* <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Homes For Sale</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Properties Rented</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3500+</LargeText>
            <SmallText>Homes Sold</SmallText>
          </Box>
        </TextFlexbox> */}
      </Container>
    </Box>
  );
};

export default Acceldatatwo;