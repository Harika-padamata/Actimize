import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from '@mui/material/Avatar';
import { Box,Paper, Link, Stack, styled, Typography,Container } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CustomButton from "./CustomButton";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
const properties = [
    {
      id: "1",
      img:"https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Lan-Guan-344x270:1x1?ts=1682584837131&fit=constrain&dpr=on,1.25&wid=320",
      price: "Lan Guanah",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:'',
      price: "Karthik Narain",
      address: "Acceldata prove the data observe to ability tools and expert to improve our data pipeline reliability. They helped us optimize HDFS performance, consolidate Kafka clusters, and reduce cost per ad impression, which is one of the most critical performance metrics.",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    }, {
      id: "2",
      img:"https://dynamicmedia.accenture.com/is/image/accenture/Homepage_insights_Evolution-then-Revolution_top-marque_447x447?qlt=85&wid=320&ts=1686781293639&$auto-jpg$&fit=constrain&dpr=off" ,
      price: "john roysaim",
      address: "Acceldata provided the data observability tools and expertise to improve our data pipeline reliability. They helped us optimize HDFS performance, consolidate Kafka clusters, and reduce cost per ad impression, which is one of the most critical performance metrics.",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://dynamicmedia.accenture.com/is/image/accenture/Emilia-Hull?qlt=85&wid=480&ts=1682582900839&fit=constrain&dpr=off",
      price: "Emilia Hulleni",
      address: "Acceldata provided the data observability tools and expertise to improve our data pipeline reliability. They helped us optimize HDFS performance, consolidate Kafka clusters, and reduce cost per ad impression, which is one of the most critical performance metrics.",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
    {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Michael-Hughes-420x420?qlt=85&wid=480&ts=1682582937822&fit=constrain&dpr=off",
        price: "Michael D. Hughes",
      address: "Acceldata provided the data observability tools and expertise to improve our data pipeline reliability. They helped us optimize HDFS performance, consolidate Kafka clusters, and reduce cost per ad impression, which is one of the most critical performance metrics.",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
      {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Mark-Curtis-420x420?qlt=85&wid=320&ts=1682562888527&fit=constrain&dpr=off",
        price: "Mark Curtis",
        address: "Acceldata provided the data observability tools and expertise to improve our data pipeline reliability. They helped us optimize HDFS performance, consolidate Kafka clusters, and reduce cost per ad impression, which is one of the most critical performance metrics.",
        //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
      
      {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Peter-Lacy-420x420?qlt=85&wid=480&ts=1682582905875&fit=constrain&dpr=off",
        price: "Peter Lacyer",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      }, 
   
  ];

function Acceldatathree() {
    const StyledTypography = styled(Typography)({
        textAlign: "center",
        color: "black",
        fontSize: 20,
      });
      const CustomBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(2, 0, 3, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
          padding: "44",
        },
      }));
      const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "#17275F",
        // height: "216px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          height: "auto",
        //   flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(1, 1, 0, 1),
          width: "90%",
        },
      }));
    const CardBox = styled(Box)({
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      });
  return (
    <>
    <Container>
     <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        variant:"outlined",
        p: 5,
       
        marginTop:0,
        backgroundColor:"#17275F",
        borderRadius: 8, 
      }}
      
    >
      <Swiper 
        slidesPerView={2}
        // centeredSlides={true}
        spaceBetween={5}
        // pagination={{
        //   clickable: true,
        // }}
      
        modules={[Pagination]}
        className="mySwiper"
        freeMode={true}
							grabCursor={true}
						
							
							breakpoints={{
								0: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								480: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 1,
									spaceBetween: 1,
								},
								1024: {
									slidesPerView: 1,
									spaceBetween: 15,
								},
								1280: {
									slidesPerView: 1,
									spaceBetween: 10,
								}

							}}
      >
             {properties.map((properties) => (
        <SwiperSlide >  
  
           
            {/* <CustomBox> */}
    
        <Box>
          <Typography
            sx={{ fontSize: "25px", color: "white", fontWeight: "600" }}
          >
             {properties.address}
          </Typography>
         

          <CustomButton 
            backgroundColor="#e97533"
            color="#fff"
            buttonText="Read the case study"
            getStartedBtn={true}
            marginTop="25px"
          />
        </Box>

    
    {/* </CustomBox> */}
          
      
      </SwiperSlide>
      ))}
        
        
      </Swiper>
      </Paper>
      </Container>
    </>
  );
}
export default Acceldatathree