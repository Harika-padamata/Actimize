import { Grid, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';


function ContactForm() {
  return (
    <div>
        <Typography sx={{fontSize:"32px",fontWeight:"400",fontFamily:"Poppins, sans-serif",textAlign:"center",paddingBottom:"30px",color:"#5777ba", marginBottom:"20px"}}>Contact</Typography>
        <Grid container columns={12}>
        <Grid xs={12} sm={12} md={6}>
          <div>
          <TextField
              id="standard-basic"
              label="Your Name"
              variant="standard"
              required
            // helperText={!errorObj.name.valid&&errorObj.name.helperText}
              // error={!errorObj.name.valid}   name="name"
              type="text"
              sx={{ mt: 1,width:"100%" }}
              // onChange={handleChange}
              // value={name}
            />
            <TextField
              id="standard-basic"
              label="Your Email"
              variant="standard"
              required
            // helperText={!errorObj.name.valid&&errorObj.name.helperText}
              // error={!errorObj.name.valid}   name="name"
              type="text"
              sx={{ mt: 1,width:"100%" }}
              // onChange={handleChange}
              // value={name}
            />
            <TextField
              id="standard-basic"
              label="Your Phone Number"
              variant="standard"
              required
            // helperText={!errorObj.name.valid&&errorObj.name.helperText}
              // error={!errorObj.name.valid}   name="name"
              type="text"
              sx={{ mt: 1,width:"100%" }}
              // onChange={handleChange}
              // value={name}
            />
            <TextField
              id="standard-basic"
              label="Subject"
              variant="standard"
              required
            // helperText={!errorObj.name.valid&&errorObj.name.helperText}
              // error={!errorObj.name.valid}   name="name"
              type="text"
              sx={{ mt: 1,width:"100%" }}
              // onChange={handleChange}
              // value={name}
            />
            <TextField
          id="outlined-multiline-static"
          multiline
           placeholder="Message"
          rows={4}
        />
          </div>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
              <Grid container sx={{display:'flex',flexWrap:"wrap",marginTop:'calc(-1 * var(--bs-gutter-y))',marginRight:"calc(-.5 * var(--bs-gutter-x))",marginLeft:"calc(-.5 * var(--bs-gutter-x))"}}>
                <Grid xs={12} sm={12} md={6}>
                  <Grid sx={{padding:"20px 40px",
                  backgroundColor:"#f1f3f6",
                  color:"#47536e",
                  textAlign:"center",
                  border:"1px solid #fff"
                }}>
                  <i style={{color:"#9fb2d8",marginBottom:"15px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg"height={48} width={48} viewBox="0 0 1024 1024"><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320z"/></svg>
                  </i>
                  <Typography sx={{padding:"0",margin:"0 0 10px 0",fontSize:'16px',
                fontWeight:"600",textTransform:"uppercase",fontFamily:"Poppins, sans-serif"
                }}>ADDRESS</Typography>
                <Typography sx={{fontSize:"15px",marginTop:"0",marginBottom:'1rem'}}>Mandapeta,<br></br>East Godavari</Typography>
                {/* <br></br> */}
                {/* <br></br> */}
                  </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                <Grid sx={{padding:"20px 40px",
                  backgroundColor:"#f1f3f6",
                  color:"#47536e",
                  textAlign:"center",
                  border:"1px solid #fff"
                }}>
                  <i style={{color:"#9fb2d8",marginBottom:"15px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M8.172 15.829c3.845 3.845 7.408 4.266 8.454 4.305c1.264.046 2.554-.986 3.112-2.043c-.89-1.044-2.049-1.854-3.319-2.732c-.748.748-1.67 2.138-2.9 1.64c-.699-.281-2.425-1.076-3.933-2.585C8.077 12.906 7.283 11.18 7 10.482c-.498-1.231.896-2.156 1.645-2.905c-.878-1.29-1.674-2.479-2.716-3.324c-1.072.56-2.11 1.84-2.063 3.121c.039 1.046.46 4.609 4.306 8.455Zm8.38 6.303c-1.44-.053-5.521-.616-9.795-4.89c-4.273-4.273-4.836-8.353-4.89-9.794c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.608 1.173 2.717 2.95 3.67 4.342A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.357C9.309 10.752 9.95 11.95 11 13c1.05 1.05 2.248 1.691 2.944 2.006l1.355-1.356a1.503 1.503 0 0 1 1.918-.171c1.42.984 3.088 2.077 4.304 3.634a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535Z"/></g></svg>                  </i>
                  <Typography sx={{padding:"0",margin:"0 0 10px 0",fontSize:'16px',
                fontWeight:"600",textTransform:"uppercase",fontFamily:"Poppins, sans-serif"
                }}>CALL US</Typography>
                <Typography sx={{fontSize:"15px",marginTop:"0",marginBottom:'1rem'}}>9876543210<br></br>8976543210</Typography>
                {/* <br></br> */}
                  </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                <Grid sx={{padding:"20px 40px",
                  backgroundColor:"#f1f3f6",
                  color:"#47536e",
                  textAlign:"center",
                  border:"1px solid #fff"
                }}>
                  <i style={{color:"#9fb2d8",marginBottom:"15px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>                  </i>
                  <Typography sx={{padding:"0",margin:"0 0 10px 0",fontSize:'16px',
                fontWeight:"600",textTransform:"uppercase",fontFamily:"Poppins, sans-serif"
                }}>EMAIL US</Typography>
                <Typography sx={{fontSize:"15px",marginTop:"0",marginBottom:'1rem'}}>hr@gmail.in<br></br>actimize@gmail.in</Typography>
                {/* <br></br> */}
                  </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                <Grid sx={{padding:"20px 40px",
                  backgroundColor:"#f1f3f6",
                  color:"#47536e",
                  textAlign:"center",
                  border:"1px solid #fff"
                }}>
                  <i style={{color:"#9fb2d8",marginBottom:"15px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/><path d="M12 7v5l3 3"/></g></svg>                  </i>
                  <Typography sx={{padding:"0",margin:"0 0 10px 0",fontSize:'16px',
                fontWeight:"600",textTransform:"uppercase",fontFamily:"Poppins, sans-serif"
                }}>
                WORKING HOURS</Typography>
                <Typography sx={{fontSize:"15px",marginTop:"0",marginBottom:'1rem'}}>Mon - sat: 9AM to 5PM<br></br>sun:9AM to 12pm</Typography>
                {/* <br></br> */}
                  </Grid>                </Grid>
              </Grid>
          </Grid>
          

        </Grid>
    </div>
  )
}

export default ContactForm