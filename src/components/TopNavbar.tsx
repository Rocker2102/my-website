import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import logo from '../logo.svg';
import { ROUTES } from '../shared/utils';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const toolbarId = 'app-root-toolbar';

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

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const CustomLink = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 450,
    transition: 'color 0.3s ease',
    '&:hover': {
        color: '#0056b3'
    },
    '&:focus': {
        color: '#0056b3'
    }
}));

const TopNavbar: React.FC = () => {
    const history = useHistory();

    return (
        <ElevationScroll>
            <AppBar position="fixed" sx={{ transition: 'all 0.3s ease' }}>
                <Container maxWidth="xl">
                    <Toolbar
                        id={toolbarId}
                        disableGutters
                        sx={{
                            mx: {
                                xs: 2,
                                md: 4,
                                lg: 5
                            },
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.3s'
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
                            {ROUTES.map(({ name, path }) => (
                                <CustomLink
                                    key={name}
                                    onClick={() => history.push(path)}
                                    sx={{
                                        mx: 3,
                                        my: 2,
                                        fontSize: 18,
                                        display: 'block',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {name}
                                </CustomLink>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default TopNavbar;
