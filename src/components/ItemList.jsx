import React from 'react'
import { Grid } from '@mui/material'
import Item from './Item'
import products from '../database/products.json'

export const ItemList = ({ category }) => {

  const productsFiltered = products.filter(product => product.category == category)

  return (
    <Grid container sx={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
      {productsFiltered.map((product) => <Item key={product.id} productItem={product} />)}
    </Grid>
  )
}

export default ItemList