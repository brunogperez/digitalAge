import React from 'react'
import { Box, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { orange } from '@mui/material/colors'

const SocialNetworks = () => {
  return (
    <Box sx={{ paddingY: 2, backgroundColor: orange[800], paddingX: '50%' }}>
      <Link href="https://www.instagram.com/digital_age_mendoza" >
        <InstagramIcon sx={{ fontSize: 60, color: 'black' }} />
      </Link>
    </Box >
  )
}

export default SocialNetworks