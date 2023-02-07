import React from 'react'
import  {data} from '../../mock'
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
const MebelFasad = () => {
  return  <Grid container spacing={2}>

    {
      data.map(({id,title,summa, url})=>(
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{
            display:{
              xs:'flex',
              sm:'block',
            },
            flexDirection:'column',
            alignItems:{
              xs:'center'
            }
          }}>
              <Card sx={{ maxWidth: 345, width:'100%', padding:'10px', boxShadow:'0 5px 15px 0 rgba(0,0,0,0.2)'}}>
                <Typography sx={{
                  textTransform:'capitalize'
                }}>
                  {title}
                </Typography>
                <Typography fontWeight={'600'}>
                  {summa} so'm
                </Typography>
                <CardMedia
                    component="img"
                    height="170px"
                    image={url}
                    sx={{
                      objectFit:'contain',
                    }}
                    alt="green iguana"
                />
                <Box sx={{
                  paddingTop:'10px'

                }}>

                  <Box sx={{
                    textAlign:'end'
                  }}>
                    <button className={'primary__btn'}>buyurtma berish</button>
                  </Box>
                </Box>
              </Card>
          </Grid>
          )
      )

    }


  </Grid>
}

export default MebelFasad
