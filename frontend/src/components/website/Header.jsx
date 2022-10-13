import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import InfoIcon from '@mui/icons-material/Info';

const pages = ['اكتشف حالة العقار', 'الأخبار', 'الموقع علي الخريطة', 'بيانات التواصل'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ background: 'none', boxShadow: 'none', mb: 4 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <InfoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} fontSize='large' />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2.5,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 800,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        الأستعلامات
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <InfoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 800,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        الأستعلامات
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="text"
                                size="small"
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 1,
                                    mx: 2,
                                    borderBottom: 1,
                                    borderColor: 'white',
                                    '&:hover': {
                                        borderColor: 'black'
                                    },
                                    color: 'white',
                                    display: 'block',
                                    fontSize: '14pt',
                                    fontWeight: 800
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <IconButton
                        color="inherit"
                        sx={{
                            flexGrow: 0,
                            transform: "scaleX(-1)"
                        }}
                    >
                        <MeetingRoomIcon fontSize='meduim' />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Header