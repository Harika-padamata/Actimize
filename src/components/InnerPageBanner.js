import React from 'react'
import { useNavigate,useLocation, useParams } from 'react-router-dom';

const randompics = 
  {FoodApp:'https://arkasoft-buckets.s3.us-east-2.amazonaws.com/uploads/2022/03/Food-Delivery-Mobile-App-Development.jpg',
  JewelleryApp:"https://xtreemsolution.com/assets/uploads/files/jewelry_final_screen_2.jpg",
  EventsApp:"https://s3.amazonaws.com/media.the-next-tech.com/wp-content/uploads/2021/12/16171830/New-Project-4-6.jpg",
  GreengroceryApp:"https://s3b.cashify.in/gpro/uploads/2022/02/22214031/Grocery-delivery-app.jpg",
  MusicApp:"https://cdn.bollyinside.com/articles/wp-content/uploads/sites/4/2021/11/1637264236_Best-Apps-to-Add-Music-to-Insta%C2%ADgram-Videos-for-Free.jpg",
  WeddingApp:'https://cdn.pizap.com/pizapfiles/images/wedding_invitation_maker_app02.jpg',
  }

// const data = [
//     {id:1,name:"Food App",image:'https://humzahalal.co.uk/wp-content/uploads/2020/07/chicken-Biryani.jpg'},
//     {id:2,name:"Jewellery App",image:'https://www.siriusjewels.com/uploads/sliders/copy_1SILDER%20APP%20BANNER08.jpg'},
//     {id:3,name:"Events App",image:'https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg'},
//     {id:4,name:"Greengrocery App",image:'https://images2.minutemediacdn.com/image/upload/c_crop,w_1097,h_617,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/643188-gettyimages-153946385-ca1ccfaad9be44325afc434b305adc0d.jpg'},
//     {id:5,name:"Music App",image:'https://i.insider.com/629f5f4c987cff0019bac252?width=700'},
//     {id:6,name:"Wedding App",image:'https://www.mobiindia.in/images/industries/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony.jpg'},
// ]  
function InnerPageBanner() {
  const param = useParams()
  console.log("param",param)
  return (
    <div>
      <div style={{position:"relative",zIndex:'0',paddingTop:"200px",paddingBottom:"200px"}}>
            <div style={{
                position:"absolute",
                zIndex:'-1',
                inset:"0px",
                overflow:"hidden",
                backgroundSize:"cover",
                backgroundColor:"transparent",
                backgroundPosition:"0% 50%",
                backgroundImage:'none'
            }}>
              <img style ={{objectFit:"cover",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"100%",height:'100%',transform:"translate(0%, -50%)"}}  src={randompics[param.name]}></img>
        {/* <video style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"801.766px",transform:"translate(0%, -50%)"}} loop={true} autoPlay muted >
              <source src="../../images/bannervedio.mp4" type="video/mp4"></source>
          </video>  */}

          </div>
        </div>
    </div>

    // <div>
    //   <img src={randompics[param.name]}></img>
    // </div>
  )
}

export default InnerPageBanner