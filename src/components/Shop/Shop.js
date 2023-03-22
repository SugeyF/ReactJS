import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Shop = () => {
  return (
    <div>
        <ShoppingCartIcon sx={{ color: "white" }}/>
        <span style={{ color: "white" }}>0</span>
    </div>
  )
}

export default Shop