import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {   Grid } from "@mui/material";
// import houseCard from "../media/houseCard.png";
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
     
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://dynamicmedia.accenture.com/is/image/accenture/accenture-arjun-bedi-575x444?qlt=85&wid=1024&ts=1686340472596&fit=constrain&dpr=off',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
   
  
   
  ];
const Clientfour = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(0),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  



  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingTop: "70%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "50%",
    },
    width: "80%",
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
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 333,
    },
    [theme.breakpoints.down("md")]: {
      height: 220,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    background: "",
    fontSize: "28px",
    lineHeight:"32px",
    fontWeight:"700"
  });

//   const Divider = styled("div")(({ theme }) => ({
//     width: "13%",
//     height: "5px",
//     backgroundColor: "#000339",
//     [theme.breakpoints.down("md")]: {
//       marginLeft: "auto",
//       marginRight: "auto",
//     },
//   }));

  return (
    <Box sx={{ py: 10 ,
    backgroundColor:"#372261"
    }}>
      <Container>
        <CustomBox>
       

        <List sx={{ width: '100%', maxWidth: 820,bgcolor: "#f5ad42" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://dynamicmedia.accenture.com/is/image/accenture/Homepage_insights_Evolution-then-Revolution_top-marque_447x447?qlt=85&wid=320&ts=1686781293639&$auto-jpg$&fit=constrain&dpr=off" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing with the regration errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Lan-Guan-344x270:1x1?ts=1682584837131&fit=constrain&dpr=on,1.25&wid=320" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands going tomarties of loyal  end of the point this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://dynamicmedia.accenture.com/is/image/accenture/Emilia-Hull?qlt=85&wid=480&ts=1682582900839&fit=constrain&dpr=off" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood to reaction of whole doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Michael-Hughes-420x420?qlt=85&wid=480&ts=1682582937822&fit=constrain&dpr=off" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Mark-Curtis-420x420?qlt=85&wid=320&ts=1682562888527&fit=constrain&dpr=off" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://dynamicmedia.accenture.com/is/image/accenture/accenture-david-treat-420x420:1x1?ts=1682562884815&fit=constrain&dpr=on,1.25&wid=320" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://dynamicmedia.accenture.com/is/image/accenture/accenture-katie-burke?qlt=85&wid=320&ts=1682562883538&fit=constrain&dpr=off" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
              {' — Do you have Paris recommendations? Have '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          {/* <ImgContainer>
            <img 
            src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/enterprise-sales/images/make_it_compelling.png"
            // src={houseCard}
             alt="house" style={{ maxWidth: "100%" }} />
          </ImgContainer> */}
          <Grid container direction={"row"} columnSpacing={0} rowSpacing={0}>
        <Grid item md={6} xs={6}>
          <StyledCard 
          sx={{ backgroundImage: `url(https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/future-work2023-thumb.jpg)` }}
          >
            <StyledWrapper>
              <StyledTypography>The Future of Work  </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={6} xs={6}>
          <StyledCard 
          sx={{ backgroundImage: `url(https://www.infosys.com/content/dam/infosys-web/en/about/esg-radar-report/esg-thumb.jpg)` }}
          >
            <StyledWrapper>
            <StyledTypography>Actimize Q4 FY23  </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={6} xs={6}>
          <StyledCard 
          sx={{ backgroundImage: `url(https://www.infosys.com/content/dam/infosys-web/en/global-resource/banner-images/quarter-results-q4fy23-thumb.jpg)` }}
          >
            <StyledWrapper>
            <StyledTypography>Actimize Q4 FY23  </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={6} xs={6}>
          <StyledCard 
          sx={{ backgroundImage: `url(https://dynamicmedia.accenture.com/is/image/accenture/accenture-arjun-bedi-575x444?qlt=85&wid=1024&ts=1686340472596&fit=constrain&dpr=off)` }}
          >
            <StyledWrapper>
            <StyledTypography>Arjun Bedi</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
  
       
     
        
      </Grid>
        </CustomBox>

      </Container>
    </Box>
  );
};

export default Clientfour;