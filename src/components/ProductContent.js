import { Grid, Typography,Card } from '@mui/material'
import React from 'react'
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate,useParams} from 'react-router-dom'

const data = [
    {id:1,param:"FoodApp",name:"Food App",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'https://humzahalal.co.uk/wp-content/uploads/2020/07/chicken-Biryani.jpg'},
    {id:2,param:"JewelleryApp",name:"Jewellery App",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'https://www.siriusjewels.com/uploads/sliders/copy_1SILDER%20APP%20BANNER08.jpg'},
    {id:3,param:"EventsApp",name:"Events App",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg'},
    {id:4,param:"GreengroceryApp",name:"Greengrocery App",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'https://images2.minutemediacdn.com/image/upload/c_crop,w_1097,h_617,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/643188-gettyimages-153946385-ca1ccfaad9be44325afc434b305adc0d.jpg'},
    {id:5,param:"MusicApp",name:"Music App",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'https://i.insider.com/629f5f4c987cff0019bac252?width=700'},
    {id:6,param:"WeddingApp",name:"Wedding App",content:"For single restaurants and restaurant chains looking to offer food delivery online, our feature-rich online delivery application is highly customizable and easy to use.",image:'https://www.mobiindia.in/images/industries/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony.jpg'},
]  
function ProductContent() {
  const navigate = useNavigate()
  let num = 1;

  
  const goToProductsInner = (name) =>{
    console.log("data",name)
    navigate(`/products/${name}`)
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
          let cardArea ='';
          if(index == num){
            num +=3 ;
            cardArea = <Card><CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>goToProductsInner(item.param)}>
              Read More
            </Button>
          </CardActions>
          <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt="green iguana"
            />
          </Card>
          }else{
            cardArea = <Card><CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>goToProductsInner(item.param)}>
              Read More
            </Button>
          </CardActions></Card>
          }
          return(
        <Grid sx={{padding:'20px'}} xs={12} sm={4}>
            {cardArea}
          </Grid>)})}
            </Grid>
    </div>
  )
}

export default ProductContent