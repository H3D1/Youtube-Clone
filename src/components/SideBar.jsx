import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const SideBar = ({Selectedcat,setSelectedCategory}) => {
  return (
    <Stack
        direction="row"
        sx={{ overflowY: "auto", height: {sx: 'auto', md: '95%'}, flexDirection: { md: 'column' }, }}
    >
        {categories.map((category) => (
            <button className="category-btn" onClick={() => setSelectedCategory(category.name)} style={{
                background: category.name === Selectedcat && '#FC1503', color: 'white'
            }}
            key={category.name}
            >
                <span style={{ color: category.name === Selectedcat ? 'white' : '#FC1503', marginRight: '15PX' }}>{category.icon}</span>
                <span style={{ opacity: category.name === Selectedcat ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar