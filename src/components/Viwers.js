import React from 'react'
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Viwers = () => {
  

    return (
    <>
            <div style={{marginTop:"70px",display:"flex", alignItems:"center",justifyContent:"center"}}>
{/*           
<Chip
  label="Clickable Link"
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  elevation={12}
 style={{padding:"50px" ,margin:"30px",border:"3px solid White",backgroundColor:"white"}}
>
  <img src="images/viewers-disney.png" alt="" height="200px" width="200px"  />
</Chip>

<Chip
  label="Clickable Link"
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  elevation={12}
  style={{padding:"50px" ,margin:"30px",border:"3px solid White"}}
/>

<Chip
  label="Clickable Link"
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  elevation={12}
  style={{padding:"50px" ,margin:"30px",border:"3px solid White"}}
/>

<Chip
  label="Clickable Link"
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  elevation={12}
  style={{padding:"50px" ,margin:"30px",border:"3px solid White"}}
/>

<Chip
  label="Clickable Link"
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
  elevation={12}
  style={{padding:"50px" ,margin:"30px",border:"3px solid White"}}
/> */}

<Card elevation={12} sx={{ maxWidth: 345 }} style={{backgroundColor:"transparent",border:"3px solid White",borderRadius:"15px",margin:"20px", width:"260px" ,height:"130px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/viewers-disney.png"
          alt="green iguana"
        />     
      </CardActionArea>
    </Card>
    <Card elevation={12} sx={{ maxWidth: 345 }} style={{backgroundColor:"transparent",border:"3px solid White",borderRadius:"15px",margin:"20px",width:"260px" ,height:"130px"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/viewers-pixar.png"
          alt="green iguana"
        />     
      </CardActionArea>
    </Card>
    <Card elevation={12} sx={{ maxWidth: 345 }} style={{backgroundColor:"transparent",border:"3px solid White",borderRadius:"15px",margin:"20px", width:"260px" ,height:"130px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/viewers-marvel.png"
          alt="green iguana"
        />     
      </CardActionArea>
    </Card>
    <Card elevation={12} sx={{ maxWidth: 345 }} style={{backgroundColor:"transparent",border:"3px solid White",borderRadius:"15px",margin:"20px", width:"260px" ,height:"130px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/viewers-starwars.png"
          alt="green iguana"
        />     
      </CardActionArea>
    </Card>
   

    <Card elevation={12} sx={{ maxWidth: 345 }} style={{backgroundColor:"transparent",border:"3px solid White",borderRadius:"15px" ,margin:"20px", width:"260px" ,height:"130px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/viewers-national.png"
          alt="green iguana"
        />     
      </CardActionArea>
    </Card>

            </div>
    </>

    
  )
}

export default Viwers