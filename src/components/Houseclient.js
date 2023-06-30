import { Box, styled, Typography } from "@mui/material";
import React from "react";
import {  Link } from "react-router-dom";

const Houseclient = ({ img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 600,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "80%",
  }));

  return (
    <HouseBox>
                  <Link  to="/client/acceldata"style={{ textDecoration: 'none' }}   >

      <ImgContainer>
        <img
         src={img} 
          alt="housePhoto" style={{ maxWidth: "100%" }}/>
      </ImgContainer>
      </Link>
    
    </HouseBox>
  );
};

export default Houseclient;