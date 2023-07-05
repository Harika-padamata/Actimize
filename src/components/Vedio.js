
import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
const Vedio = () => {
  return (
    <Box sx={{}}>
        <video  style={{ width: "100%", height: "500px" , objectFit:"cover"}}src="../../images/video (2160p).mp4" autoPlay loop muted />
    </Box>
  
  )
}

export default Vedio