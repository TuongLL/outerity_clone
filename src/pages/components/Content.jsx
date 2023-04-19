import React from 'react'
import SideBar from './SideBar'
import { Box } from '@mui/material'

function Content() {
  return (
    <Box sx={{
        display:'flex',
        padding: '20px 40px'
    }}>
        <SideBar />
    </Box>
  )
}

export default Content