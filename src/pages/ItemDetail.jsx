import React from 'react'
import { Box, CardMedia, Stack, Typography } from '@mui/material'
import backgroundImage from '../../public/graph.png'
import Counter from '../components/Counter'

export const ItemDetail = () => {

  const productItem = {
    "brand": "Apple",
    "category": "smartphones",
    "description": "An apple mobile which is nothing like apple",
    "discountPercentage": 12.96,
    "id": 1,
    "images": [
      "https://imgs.search.brave.com/aZ6C0oHMMWXH1Kos822_ahmv_33PlX0l7rsGwTtb9YQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL0lQaG9u/ZS1QTkctUGljdHVy/ZS5wbmc",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ],
    "price": 549,
    "rating": 4.69,
    "stock": 9,
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "title": "iPhone 9"
  }

  return (

    <>
      <Box sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat:'no-repeat'}}>
        <Stack direction='row' sx={{ width: '100%', height: '100%' }} >
          <Stack >
            <Typography sx={{ margin: 'auto', marginY: 3 }} variant='h3'>
              {productItem.title}
            </Typography>
            <CardMedia
              component='img'
              sx={{ height: '100%', objectFit: 'contain', paddingY: 2 }}
              image={productItem.images[0]}
              alt={`Imagen de ${productItem.title}`}
            />
          </Stack>
          <Stack>
            <Typography sx={{ marginTop: 20 }} gutterBottom variant='h4'>
              Marca: {productItem.brand}
            </Typography>
            <Typography sx={{}} gutterBottom variant='subtitle1'>
              {productItem.description}
            </Typography>
            <Typography sx={{}} gutterBottom variant='h6'>
              Precio: ${productItem.price}
            </Typography>
            <Typography sx={{}} gutterBottom variant='body2'>
              Stock: {productItem.stock}
            </Typography>
            <Counter stock={productItem.stock} />
          </Stack>
        </ Stack>
      </Box>
    </>

  )
}

export default ItemDetail