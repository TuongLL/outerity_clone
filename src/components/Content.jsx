import React from 'react'
import SideBar from './SideBar'
import { Box } from '@mui/material'
import ProductList from './ProductList'

function Content({products}) {
  return (
    <Box sx={{
        display:'flex',
        padding: '20px 40px',
        gap: '50px'
    }}>
        {/* <SideBar /> */}
        <ProductList products={products}/>
    </Box>
  )
}

export default Content