import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import {  Link } from "react-router-dom";
// import { properties } from "../properties";
const properties = [
    {
      id: "1",
      img: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/future-work2023-thumb.jpg",
    //   price: "35000",
      address: "Microsoft Technology",
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   space: 2000,
    },
  
    {
      id: "2",
      img:"https://www.infosys.com/content/dam/infosys-web/en/about/esg-radar-report/esg-thumb.jpg" ,
    //   price: "38000",
      address: "Transformations ",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/responsive/newdesign/cloud-applications-research.jpg",
    //   price: "47000",
      address: "Accelerate",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
  ];

const Technologythree = () => {
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
    <Box sx={{ mt: 1, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Featured Technology
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Embrace the talent revolution to remain relevant in the future.
          </Typography>
        </PropertiesTextBox>
        <Link  to="/technology/microsoft" style={{ textDecoration: 'none' }}   >
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
        </Link>
      </Container>
    </Box>
  );
};

export default Technologythree;