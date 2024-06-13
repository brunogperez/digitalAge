import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import brands from '../../public/brands.json'
import categories from '../../public/categories.json'
import products from '../../public/products.json'



const StyledImg = styled('img')(({ theme }) => ({
  width: '10vh',
}))


export const Home = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey', paddingY: 3 }}>
        <Card sx={{ minWidth: 275, maxHeight: '200vh', padding: 1, marginX: 'auto', maxWidth: '60%' }}>
          <CardContent>
            <CardMedia
              component='img'
              height='100%'
              image='carousel-1.webp'
              alt='Productos destacados'
            />
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Grid container spacing={15} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingY: 3 }} >
          {brands.map((item) => (
            <Grid item md={1} key={item.id} >
              <StyledImg
                src={item.image}
                alt={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ width: '100%', margin: '10vh' }}>
        {products.map((item) => {
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        })}
      </Box>

      <Box sx={{ backgroundColor: 'lightgrey' }} >
        <Grid container spacing={1} justifyContent='center' alignContent='center' >
          <ImageList variant="masonry" cols={2} gap={17} sx={{ alignContent: 'center', justifyContent: 'center', padding: '4vh', width: '50%' }}>
            {categories.map((item) => (
              <ImageListItem key={item.id} >
                <img
                  srcSet={`${item.image}?w=100&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.image}?w=100fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Box >



    </>
  )
}

export default Home