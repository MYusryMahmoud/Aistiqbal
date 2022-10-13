import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography
} from '@mui/material'

// const useStyles = makeStyles((theme) => ({}))

const Navbar = () => {
    // const classes = useStyles()
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>
                    Aistiqbal
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar