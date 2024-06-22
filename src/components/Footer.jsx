//|import React from 'react'
import { Box, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Payments from './Payments'

const Footer = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: grey[800], alignItems: 'center', paddingY: 2 }}>

      <Typography color='white' variant='h5' sx={{ paddingX: 5 }}>
        CONTACTANOS
      </Typography>
      <Stack direction='row' padding={2} justifyContent="space-around">
        <Stack>
          <Stack direction='row' alignItems='center' spacing={0.5} margin={1}>
            <LocalPhoneIcon sx={{ fontSize: 20, color: 'white' }} />
            <Typography color='white' p={1}>(+54) 2615895065</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={0.5} margin={1}>
            <WhatsAppIcon sx={{ fontSize: 20, color: 'white' }} />
            <Typography color='white' p={1}>2615895065</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={0.5} margin={1}>
            <EmailIcon sx={{ fontSize: 20, color: 'white' }} />
            <Typography color='white' p={1}>digitalagemendoza@gmail.com</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={0.5} margin={1}>
            <LocationOnIcon sx={{ fontSize: 20, color: 'white' }} />
            <Typography color='white' p={1}>El Challao, Mendoza, Argentina</Typography>
          </Stack>
        </Stack>
        <Stack m={1}>
          <Typography color='white' my={2}>
            SUSCRIBITE A NUESTRO NEWSLETTER
          </Typography>
          <Stack direction='row'>
            <TextField
              variant="standard"
              color="warning"
              focused
              fullWidth
              defaultValue="Ingrese su Email"
            />
            <IconButton aria-label="delete" size="large">
              <ArrowForwardIcon fontSize="inherit" color='warning' />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: 'white' }} variant="middle" />
      <Payments />
      <Typography marginX='40%' color='white' width='50%' >
        ©brunogpDev. Todos los derechos 2024.
      </Typography>
    </Box>
  )
}

export default Footer   