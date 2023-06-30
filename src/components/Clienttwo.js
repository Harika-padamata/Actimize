import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import Houseclient from "./Houseclient";
// import { properties } from "../properties";
const properties = [
    {
      id: "1",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/acceldata.png",
    //   price: "35000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/images/Adobe-400x276.jpg" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    }, {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/images/aws-400x276.jpg" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/anaplan-400x276.png",
    //   price: "47000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
   
  ];
  const propertiesone = [
    {
      id: "1",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/appdynamics-400x276.jpg",
    //   price: "35000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/images/apple-logos-1-400X276.jpg" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    }, {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/images/aprimo-400x276.jpg" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/aprimo-400x276.jpg",
    //   price: "47000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
   
  ];
  const propertiesthree = [
    {
      id: "1",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/aruba-logo.png",
    //   price: "35000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/images/at-and-t-logo.png" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    }, {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/images/bentley-logo.png" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/blackline-logo.png",
    //   price: "47000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
   
  ];
  const propertiesfour = [
    {
      id: "1",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/blueyonder-400x276.jpg",
    //   price: "35000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/banner-images/boomi.jpg" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    }, {
      id: "2",
      img:"https://www.wipro.com/content/dam/nexus/en/alliances/images/broadcom-400x276.png" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://www.wipro.com/content/dam/nexus/en/alliances/images/bt-logo.png",
    //   price: "47000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
   
  ];
const Clienttwo = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 0, backgroundColor: "#CCCCCC", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#034EA2", fontSize: "70px", fontWeight: "500" ,lineHeight:"70px"}}
          >
 Wining together
          </Typography>
          
        </PropertiesTextBox>
        
        <PropertiesBox>
          {properties.map((property) => (
            <Houseclient
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
            //   bedrooms={property.bedrooms}
            //   bathrooms={property.bathrooms}
            //   space={property.space}
            />
           
          ))}
        </PropertiesBox>
       
        <PropertiesBox>
          {propertiesone.map((property) => (
            <Houseclient
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
            //   bedrooms={property.bedrooms}
            //   bathrooms={property.bathrooms}
            //   space={property.space}
            />
          ))}
        </PropertiesBox>
        <PropertiesBox>
          {propertiesthree.map((property) => (
            <Houseclient
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
            //   bedrooms={property.bedrooms}
            //   bathrooms={property.bathrooms}
            //   space={property.space}
            />
          ))}
        </PropertiesBox>
        <PropertiesBox>
          {propertiesfour.map((property) => (
            <Houseclient
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
            //   bedrooms={property.bedrooms}
            //   bathrooms={property.bathrooms}
            //   space={property.space}
            />
          ))}
        </PropertiesBox>
       
      </Container>
    </Box>
  );
};

export default Clienttwo;