import React from 'react'
import { Box, Card, CardContent, CardMedia, Fab, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import brands from '../database/brands.json'
import categories from '../database/categories.json'
import ItemList from '../components/ItemList'
import Footer from '../components/Footer'
import SocialNetworks from '../components/SocialNetworks'


const StyledImg = styled('img')(({ theme }) => ({
  width: '10vh'
}))


export const Home = () => {


  return (
    <>
      <Fab color='success' sx={{ margin: 2, position: 'fixed', right: 20, bottom: 20, }} >
        <WhatsAppIcon />
      </Fab>
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

      {/* mapeo de las cards de los productos */}
      <Box>
        <Typography variant='h4' mx={5}>
          Smartphones
        </Typography>
        <ItemList category='smartphones' />
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
      <Box>
        <CardMedia
          component='img'
          sx={{ width: '100%', objectFit: 'contain' }}
          src='https://res.cloudinary.com/divujqlv8/image/upload/v1718636910/banner_nf9s4r.webp'
        />
      </Box>
      <SocialNetworks />
      <Footer />

    </>
  )
}

export default Home