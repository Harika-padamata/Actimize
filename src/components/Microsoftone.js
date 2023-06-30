import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
// import { properties } from "../properties";
const properties = [
    {
      id: "1",
      img: "https://www.infosys.com/content/dam/infosys-web/en/about/client-speak/images/digital-transformation-council.jpg",
    //   price: "35000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:"https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/modernizing-lead-management-lead-mob.jpg" ,
    //   price: "38000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/key-energy-partners.jpg",
    //   price: "47000",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
    {
        id: "3",
        img: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/accelerate-business-growth-resilience.jpg",
      //   price: "47000",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
  ];

const Microsoftone = () => {
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
    <Box sx={{ mt: 1, backgroundColor: "#372261", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#ffffff", fontSize: "70px", fontWeight: "500" ,lineHeight:"70px"}}
          >
       Success Stories
          </Typography>
          <Typography sx={{ color: "#ffffff", fontSize: "40px", mt:"10px",lineHeight:"40px" }}>
          Know how Actimize help large enterprises transform across the globe
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {properties.map((property) => (
            <House
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

export default Microsoftone;