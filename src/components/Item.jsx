import React, { useState } from 'react'
import { Box, Button, Stack, Rating, Card, CardMedia, IconButton, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { red } from '@mui/material/colors'


export const Item = ({ productItem }) => {

  const [favorite, setFavorite] = useState(false)

  const rating = Math.round(productItem.rating)

  const onClickFavorite = () => {
    setFavorite(!favorite)
  }

  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, Height: 450, marginX: 2, marginY: 5 }}>
      <CardMedia
        component='img'
        sx={{ height: 250, objectFit: 'contain' }}
        image={productItem.images[0]}
        title={productItem.title}
      />
      <Stack>
        <Typography variant="h8" component="div" margin={2} justifySelf='center'>
          {productItem.title}
        </Typography>
        <Typography variant="h6" component="div" margin={2}>
          $ {productItem.price}
        </Typography>
        <Typography variant="h6" component="div" marginX={2}>
          <Rating name="read-only" value={rating} readOnly />
        </Typography>
        <Typography variant="h8" component="div" marginX={2} color='primary'>
          3 x ${parseInt(productItem.price / 3)} sin interés
        </Typography>
      </Stack>
      <Stack justifyContent='space-between' direction='row'>
        <Button size="small" sx={{ margin: 2 }}>Details</Button>
        <Box sx={{ margin: 2 }}>
          <IconButton aria-label="Add to favorites" onClick={onClickFavorite}  >
            {favorite ? <FavoriteIcon sx={{ color: red[500] }} /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton aria-label="Add to cart" >
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </Stack>
    </Card>

  )
}

export default Item