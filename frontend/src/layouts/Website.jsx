import React from 'react'
import { Box } from '@mui/system'
import Header from '../components/website/Header'
import { Container } from '@mui/material'

const Website = (props) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundImage: 'linear-gradient(to bottom, #e1b12c, #fbc531, #ffda79, #fbc531, #e1b12c)'
        }}
        >
            <Header />
            <Container maxWidth='xl'>
                {props.children}
            </Container>
            {/* footer */}
        </Box>
    )
}

export default Website
