import React from 'react'
import { Typography } from '@mui/material'

export const ItemDetail = ({ productItem }) => {



  return (

    <>
      <Typography>
        {productItem.title}
      </Typography>
    </>

  )
}

export default ItemDetail