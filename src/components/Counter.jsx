import React, { useState } from 'react'
import { Stack, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove';

const Counter = ({ stock }) => {

  const [counter, setCounter] = useState(1)

  const addQuantity = () => {
    setCounter(counter + 1)
  }

  const removeQuantity = () => {
    setCounter(counter - 1)
  }



  return (
    <>
      <Stack flexDirection='row' gap={2} alignItems='center'>
        <Button variant="contained" onClick={removeQuantity} disabled={counter <= 1}> <RemoveIcon /> </Button>
        <Typography margin={2}>
          {counter}
        </Typography>
        <Button variant="contained" onClick={addQuantity} disabled={counter >= stock}> <AddIcon /> </Button>
      </Stack >
    </>
  )
}

export default Counter