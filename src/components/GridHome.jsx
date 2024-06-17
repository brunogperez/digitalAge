import React from 'react'
import { Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import categories from '../database/categories.json'

const GridHome = () => {
  return (
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
  )
}

export default GridHome