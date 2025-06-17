import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <Box sx={{py:"20px",backgroundColor:"#040842"}}>
        <Typography color='white'  textAlign={"center"}>كل الحقوق محفوظة - 2025</Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
            <IconButton>
                <GitHubIcon sx={{color:"white"}}/>
            </IconButton>
            <IconButton>
                <LinkedInIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton>
                <TwitterIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton>
                <FacebookIcon sx={{color:"white"}} />
            </IconButton>
        </Stack>

    </Box>
  )
}

export default Footer