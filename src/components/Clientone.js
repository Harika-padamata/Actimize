import React from "react";
import { Box, Typography } from "@mui/material";
// import HeroImage from "../../static/HeroImage.jpg";
const Clientone = () => {
  return (
    <Box>
      {/* <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Fashions<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We Make you look the better of you!
      </Typography> */}
      <Box
        sx={{
          backgroundImage: `url(https://teckgenie.in/web/images/partner1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 500,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ mt:"",
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.7" }}>
            <Typography variant={"h2"} color="tomato" align="center" pt={8}>
             our clients
            </Typography>
            <Typography variant="h4" align="center"pb={8}>
            Working with different types of clients
            </Typography>
          
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Clientone;