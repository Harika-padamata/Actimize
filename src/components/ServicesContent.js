import { Grid, Typography,Card } from '@mui/material'
import React from 'react'
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate,useParams} from 'react-router-dom'
import { Icon } from '@iconify/react';
const data = [
    {id:1,param:"Web Development",name:"webDevelopment",content:"Our developers design professional websites that allow businesses to present their offerings to their customers in a comprehensive way.",image:'fluent:document-chevron-double-20-regular'},
    {id:2,param:"Mobile App",name:"mobileApp",content:"If you are looking for a mobile application for android and ios, connect with us. we design and develop creative applications.",image:'fluent-emoji-high-contrast:mobile-phone'},
    {id:3,param:"UI & UX",name:"UI&UX",content:"To give our customers a great user experience, our UI and UX developers interact with them to understand their needs and develop beautiful designs.",image:'tabler:ux-circle'},
    {id:4,param:"Digital Marketing",name:"digitalMarketing",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'system-uicons:target'},
    {id:5,param:"Testing",name:"testing",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'ei:like'},
    {id:6,param:"WhatsApp Marketing",name:"whatsAppMarketing",content:"For single restaurants and restaurant chains looking to offer food delivery online,Application is easy to use.",image:'bi:whatsapp'},
]  
function ServicesContent() {
  const navigate = useNavigate()
  const goToServicesInner = (name) =>{
    console.log("data",name)
    navigate(`/services/${name}`)
  }
  return (
    <div>
    <Grid container sx={{marginTop:"10px",textAlign:'center'}}>
    {/* {()=>{let num= 1;
for(let i= 0; i<10; i++) {
  if(i== num){
console.log("eqal",num); num += 3
} else { 
console.log(i)
}
  }}} */}
    {data.map((item,index) =>{
      console.log("id",item.id)
      return(
    <Grid sx={{padding:'20px'}} xs={12} sm={4} md={4}>
        <Card sx={{height:'100%'}}><CardActionArea>
          <div className='avatarcontent'>
          <Icon className='avatarimg' icon={item.image} />

          </div>
        {/* <CardMedia
          component="img"
          height="200"
          width="50"
        //   image={item.image}
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.param}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>goToServicesInner(item.name)}>
          Read More
        </Button>
      </CardActions></Card>
      </Grid>)})}
        </Grid>
</div>
  )
}

export default ServicesContent