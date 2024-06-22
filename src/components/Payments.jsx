import React from 'react'
import { CardMedia, Stack, Typography } from '@mui/material'
import paymentImg from '../../public/paymentMethods.png'
import shipImg1 from '/logoCorreoArgentino.webp'
import shipImg2 from '/logoCorreoAndreani.webp'
import shipImg3 from '/logoCorreoOca.webp'


const Payments = () => {
  return (
    <>
      <Stack direction='row'>

        <Stack sx={{ width: '50%' }}>
          <Typography color='white' margin={2}>
            Medios de pago
          </Typography>
          <CardMedia
            component='img'
            sx={{ height: '20%', margin: 2, objectFit: 'contain' }}
            image={paymentImg}
            alt='imagenes de visa mastercard y american express'
          />
        </Stack>

        <Stack>
          <Typography color='white' margin={2}>
            Medios de envío
          </Typography>
          <Stack direction='row' >
            <CardMedia
              component='img'
              sx={{ height: '40%', objectFit: 'contain', padding: 2 }}
              image={shipImg1}
              alt='logo de Correo Argentino'
            />
            <CardMedia
              component='img'
              sx={{ height: '40%', objectFit: 'contain', padding: 2 }}
              image={shipImg2}
              alt='logo de Correo Andreani'
            />
            <CardMedia
              component='img'
              sx={{ height: '40%', objectFit: 'contain', padding: 2 }}
              image={shipImg3}
              alt='logo de Correo Oca'
            />
          </Stack>
        </Stack>

      </Stack>
    </>
  )
}

export default Payments