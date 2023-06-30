
import { Box, Link, Stack, styled, Typography , Paper} from "@mui/material";
import Avatar from '@mui/material/Avatar';

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
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    }, {
      id: "2",
      img:"https://dynamicmedia.accenture.com/is/image/accenture/Homepage_insights_Evolution-then-Revolution_top-marque_447x447?qlt=85&wid=320&ts=1686781293639&$auto-jpg$&fit=constrain&dpr=off" ,
      price: "john roysaim",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   space: 2300,
    },
  
    {
      id: "3",
      img: "https://dynamicmedia.accenture.com/is/image/accenture/Emilia-Hull?qlt=85&wid=480&ts=1682582900839&fit=constrain&dpr=off",
      price: "Emilia Hulleni",
    address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
    //   bedrooms: 4,
    //   bathrooms: 3,
    //   space: 3000,
    },
    {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Michael-Hughes-420x420?qlt=85&wid=480&ts=1682582937822&fit=constrain&dpr=off",
        price: "Michael D. Hughes",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
      {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Mark-Curtis-420x420?qlt=85&wid=320&ts=1682562888527&fit=constrain&dpr=off",
        price: "Mark Curtis",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
      {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-david-treat-420x420:1x1?ts=1682562884815&fit=constrain&dpr=on,1.25&wid=320",
        price: "David Treat",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
      {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-katie-burke?qlt=85&wid=320&ts=1682562883538&fit=constrain&dpr=off",
        price: "Katie Burke",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
      //   bedrooms: 4,
      //   bathrooms: 3,
      //   space: 3000,
      },
      {
        id: "3",
        img: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-Raghav-Narsalay-headshot-115x115?qlt=85&wid=320&ts=1682562884742&fit=constrain&dpr=off",
        price: "Raghav Narsalay",
      address: "Actimize and Microsoft Modernise Spark New Zealand’s Corporate Functions to Accelerate Business Growth and Resilience",
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
const Clientthree = () => {


  
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    overflow: "hidden",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
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
    color: "black",
    fontSize: 20,
  });
  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
   
         <Paper
      sx={{
        // display: 'flex',
        flexWrap: 'wrap',
        variant:"outlined",
        p: 2,
       
        marginTop:3,
        backgroundColor:"#eeedf2"
      }}
      
    >
      {properties.map((properties) => (
        // <Link href={`category/${category.id}`} sx={{ textDecoration: "none" }}>
          <CardBox>
            {/* <StyledCard sx={{ backgroundImage: `url(${properties.img})` }} /> */}
            <Avatar
  alt="Remy Sharp"
  src={properties.img}
  sx={{ width: 100, height: 100 }}
/>
            <StyledTypography>{properties.price}</StyledTypography>
          </CardBox>
        // </Link>
      ))}
      </Paper>

  );
};

export default Clientthree;