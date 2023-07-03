import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Board() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Board of Directors" {...a11yProps(0)} />
          <Tab label="Management Team" {...a11yProps(1)} />
          <Tab label="Developers" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Stack direction="row" spacing={10}>
        <Grid container sx={{textAlign:"center"}}>
        <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
        <Avatar alt="Travis Howard" src="https://media.licdn.com/dms/image/D5603AQEjlVEel61HZA/profile-displayphoto-shrink_400_400/0/1682029761802?e=1692835200&v=beta&t=pJ9QrRJ7OBX41DsgVrk3wOb2F8pHtED3ZfWoc_HhmTE"   sx={{ width: 100, height: 100 }} />
        <p style={{fontSize:'18px',fontWeight:'700'}}>Chaitanya Tatavolu</p>
        <p style={{color:'#7a787f'}}>Founder & CEO at Actimize Software Solutions</p>
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="https://media.licdn.com/dms/image/D5603AQF_AdiK7ifjIw/profile-displayphoto-shrink_800_800/0/1675530166123?e=2147483647&v=beta&t=9-xM8xlYSEpnuPAZrNHXM8YOFvFrAZXM-hXiF-xw0KI"   sx={{ width: 100, height: 100 }} />
            <p style={{fontSize:'18px',fontWeight:'700'}}>Sameer Sri Vishnu</p>
            <p style={{color:'#7a787f'}}>Co-Founder & Ruby On Rails(ROR) Developer</p>
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="https://media.licdn.com/dms/image/C4E03AQHCFtlniLtWtA/profile-displayphoto-shrink_200_200/0/1663992243964?e=1692835200&v=beta&t=GEg4h20BJXvSI4kznKtKVb5D10ibnfP20Vmnmw8Jpc4"   sx={{ width: 100, height: 100 }} />
            <p style={{fontSize:'18px',fontWeight:'700'}}>Durgababu Kadiyala</p>
            <p style={{color:'#7a787f'}}>Co-Founder of Actimize Software Solutions</p>
            </Grid>
            {/* <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid> */}

        </Grid>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 100, height: 100 }}/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 100, height: 100 }}
 />
       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 100, height: 100 }}/> */}

    </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Stack direction="row" spacing={10}>
        <Grid container sx={{textAlign:"center"}}>
        <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
        <Avatar alt="Ramya Tatavolu" src="https://media.licdn.com/dms/image/D5603AQGa_P-GifOCKA/profile-displayphoto-shrink_200_200/0/1686723648649?e=1692835200&v=beta&t=kFC_HJx3GMdYYLPhQ89NigNWKTLglavu"   sx={{ width: 100, height: 100 }} />
        <p style={{fontSize:'18px',fontWeight:'700'}}>Ramya Tatavolu</p>
        <p style={{color:'#7a787f'}}>HR Manager at Actimize Software Solutions</p>
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Bhagya Srinivasu Aripaka" src="https://media.licdn.com/dms/image/D5603AQGa_P-GifOCKA/profile-displayphoto-shrink_200_200/0/1686723648649?e=1692835200&v=beta&t=kFC_HJx3GMdYYLPhQ89NigNWKTLglavu"   sx={{ width: 100, height: 100 }} />
            <p style={{fontSize:'18px',fontWeight:'700'}}>Bhagya Srinivasu Aripaka</p>
            <p style={{color:'#7a787f'}}>Senior React JS Developer at Actimize Software Solutions</p>
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src=""   sx={{ width: 100, height: 100 }} />
            <p style={{fontSize:'18px',fontWeight:'700'}}></p>
            <p style={{color:'#7a787f'}}></p>
            </Grid>
            {/* <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid> */}

        </Grid>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 100, height: 100 }}/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 100, height: 100 }}
 />
       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 100, height: 100 }}/> */}

    </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Stack direction="row" spacing={10}>
        <Grid container sx={{textAlign:"center"}}>
        <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
        <Avatar alt="Lakshman Chimiti" src="https://media.licdn.com/dms/image/D5603AQGa_P-GifOCKA/profile-displayphoto-shrink_200_200/0/1686723648649?e=1692835200&v=beta&t=kFC_HJx3GMdYYLPhQ89NigNWKTLglavu"   sx={{ width: 100, height: 100 }} />
        <p style={{fontSize:'18px',fontWeight:'700'}}>Lakshman Chimiti</p>
        <p style={{color:'#7a787f'}}>React JS Developer at Actimize Software Solutions</p>
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Harika Padamata" src="https://media.licdn.com/dms/image/D5603AQGa_P-GifOCKA/profile-displayphoto-shrink_200_200/0/1686723648649?e=1692835200&v=beta&t=kFC_HJx3GMdYYLPhQ89NigNWKTLglavu"   sx={{ width: 100, height: 100 }} />
            <p style={{fontSize:'18px',fontWeight:'700'}}>Harika Padamata</p>
            <p style={{color:'#7a787f'}}>React JS Developer at Actimize Software Solutions</p>
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Bharathi" src="https://media.licdn.com/dms/image/D5603AQGa_P-"   sx={{ width: 100, height: 100 }} />
            <p style={{fontSize:'18px',fontWeight:'700'}}> Bharathi </p>
            <p style={{color:'#7a787f'}}>UI/UX Designer</p>
            </Grid>
            {/* <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid xs={12} sm={4} sx={{textAlign:'-webkit-center'}}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
            </Grid> */}

        </Grid>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 100, height: 100 }}/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"   sx={{ width: 100, height: 100 }} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 100, height: 100 }}
 />
       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 100, height: 100 }}/> */}

    </Stack>
      </TabPanel>
    </Box>
  );
}
