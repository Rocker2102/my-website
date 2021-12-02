import { cloneElement, FC } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { ROUTES } from '../shared/routeData';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const toolbarId = 'app-root-toolbar';

const ElevationScroll: FC = ({ children }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return cloneElement(children as JSX.Element, {
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

const TopNavbar: FC = () => {
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
                        <Typography variant="h6" noWrap component="div">
                            <Avatar alt="AY">
                                <LanguageIcon />
                            </Avatar>
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
                            {ROUTES.map(({ name, path }) => (
                                <CustomLink
                                    key={name}
                                    className="header-links"
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

                                    {/*
                                        Below div is used to add underline below link on hover.
                                        '.header-links', '.link-underline' css classes are
                                        defined in App.css
                                     */}
                                    <div className="link-underline"></div>
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
