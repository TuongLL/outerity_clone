import React from 'react'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import { Box } from '@mui/material'
import Content from './Content'

function Layout() {
  return (
    <Box>
        <Header />
        <Breadcrumb />
        <Content /> 
    </Box>
  )
}

export default Layout