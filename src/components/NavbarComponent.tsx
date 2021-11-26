import * as React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import logo from '../logo.svg';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const links = ['home', 'projects', 'about', 'contact'];

const ElevationScroll: React.FC = ({ children }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return React.cloneElement(children as JSX.Element, {
        elevation: trigger ? 4 : 0
    });
};

const NavbarComponent: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    return (
        <ElevationScroll>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            mx: 5,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                <Avatar alt="AY" src={logo} />
                            </Typography>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                <Avatar alt="AY" src={logo} />
                            </Typography>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {links.map(link => (
                                <Button
                                    key={link}
                                    sx={{
                                        mx: 2,
                                        my: 2,
                                        fontSize: 18,
                                        color: 'white',
                                        display: 'block',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {link}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default NavbarComponent;
