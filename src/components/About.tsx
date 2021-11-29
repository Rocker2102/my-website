import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import ContentBox from './ContentBox';
import profileImg from '../shared/profile.jpg';

/**
 * Display picture dimension & units
 * (use a 1:1 ratio picture for best results)
 */
const imgSize = 30,
    imgUnit = 'vh';

/* eslint-disable */
const MainInfo = [
    `I'm a full-stack web developer (mostly self-taught) and a student from Lucknow, India`,
    `I'm currently building (and learning of course 😅), a cross-platform desktop application
        using Electron.js & React`
];
/* eslint-enable */

const About: FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Typography variant="h2" color="primary" fontWeight={500} fontFamily="Raleway">
                    About Me
                </Typography>

                <Box mt={4}>
                    <Grid container spacing={3}>
                        <Grid item textAlign="center" margin="auto">
                            <Avatar
                                src={profileImg}
                                alt="Ankush Yadav"
                                sx={{
                                    width: `${imgSize}${imgUnit}`,
                                    height: `${imgSize}${imgUnit}`
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            margin={{ xs: 'auto', md: 'initial' }}
                            maxWidth={{ xs: 'initial', sm: '50vw' }}
                            textAlign={{ xs: 'center', md: 'left' }}
                        >
                            {MainInfo.map((text, i) => (
                                <Typography
                                    key={i}
                                    mb={2}
                                    variant="h5"
                                    color="text.primary"
                                    fontFamily="LexendDeca Light"
                                >
                                    {text}.
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default About;
