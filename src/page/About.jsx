import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <div>
        <Navbar />
        <Box height={40}/>
        <Box component="main" sx={{ pl: 3}}>
        <h1 style={{color: '#541743'}}>About Ecommerce</h1>
        <p>One of the world's largest e-commerce platforms offers a vast array of products, 
          ranging from electronics and clothing to groceries and entertainment. 
          Known for its user-friendly interface and convenient delivery options, 
          this platform has revolutionized online shopping. 
          With a robust marketplace that includes both major brands and independent sellers, 
          customers can find virtually anything they need with just a few clicks. Additionally, 
          features like customer reviews and personalized recommendations enhance the shopping experience, 
          making it easier for users to discover new products tailored to their preferences.
           This e-commerce giant has become an indispensable part of many people's lives, 
          providing unparalleled convenience and access to a wide selection of goods.</p>
        </Box>
        </div>
  )
}

export default About