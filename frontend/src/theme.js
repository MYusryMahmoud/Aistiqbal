import { createTheme } from '@mui/material'

const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            light: '#33ab9f',
            main: '#009688',
            dark: '#00695f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4aedc4',
            main: '#1de9b6',
            dark: '#14a37f',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: "Lateef"
    }
})

export default theme