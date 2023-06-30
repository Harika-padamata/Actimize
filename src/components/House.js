import { Box, styled, Typography } from "@mui/material";
import React from "react";


const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
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
    width: "100%",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <img
         src={img} 
          alt="housePhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {/* ${30022} */}
          {/* $3000 */}
        </Typography>
        <Typography variant="body2" sx={{ my: 1,fontSize:"25px",fontWeight:"800" }}>
          {address}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            {/* <img 
            // src={bedroomsIcon} 
            alt="bedroomsIcon" /> */}
            <Typography variant="body2" sx={{ mt: 1 }}>
              {bedrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            {/* <img 
            // src={bathroomsIcon}
             alt="bathroomssIcon" /> */}
            <Typography variant="h4" sx={{ mt: 0 }}>
              {bathrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            {/* <img
            //  src={spaceIcon} 
             alt="spaceIcon" /> */}
            <Typography variant="body2" sx={{ mt: 1 }}>
              {space}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  );
};

export default House;