import React from 'react';
import {Container,Typography,Grid,Button,Stack} from '@mui/material';
import { styled } from '@mui/material/styles';
// import Eventcontentbox from './Eventcontentbox';
import Paper from '@mui/material/Paper';


// import { red } from '@mui/material/colors';
// import List from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(4),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Microsoftfour = () => {
  const theme = useTheme();

  return (
    <div>
      <Container>
 


        <Grid container alignItems="center" sx={{marginTop:"20px"}}>
    
              <Grid item xs={12} md={12}sx={{marginTop:"25px", marginBottom:"20px", alignItems:"center"}}>
              <Typography  variant="h2" component="div" sx={{fontSize: '25px',
                fontWeight:'800',
                color:'#1e0a3c',
                marginBottom:"20px"
                 }}>
        Our Offerings
            </Typography>
                <Paper  elevation={20} sx={{alignItems:"center", py:"10px"}}>
                    
                  <Container 
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             
            <Typography  
            sx={{color:"#1e0a3c", fontWeight:" bold",marginTop:'25px',marginBottom:'5px'}}variant="h6">
            Organized by Actimize</Typography>
 <Typography 
  sx={{color:"#1e0a3c",
   fontWeight:" bold",
//    paddingLeft:"30px",
   marginTop:'10px',
   lineHeight:"40px",
   marginBottom:'5px',
   fontsize:"60px"
}}variant="h5"
    >
 Next-Generation Services Engaged Customer Experience 
</Typography>
<Stack direction="row" spacing={2}
 >
<Button variant="contained" sx={{marginTop:"20px",marginBottom:"20px",marginRight:"10px"}}>Follow</Button>
    </Stack>
            </Container>
                </Paper>
      </Grid>
        </Grid>
    </Container>
    
    </div>
  )
}

export default Microsoftfour