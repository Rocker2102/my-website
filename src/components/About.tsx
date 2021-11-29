import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Title from './Title';
import ContentBox from './ContentBox';
import { useHistory } from 'react-router-dom';
import { FONTS, USER_DATA } from '../shared/appSettings';
import { PRIMARY_INFO, PROFILE_IMG } from '../shared/aboutData';

/**
 * Dimension & units of display picture
 * (use a 1:1 ratio picture for best results)
 */
const imgSize = 30;
const imgUnit = 'vh';

const About: FC = () => {
    const history = useHistory();

    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Title>About Me</Title>

                <Box mt={4}>
                    <Grid container spacing={4}>
                        <Grid item textAlign="center" margin="auto">
                            <Avatar
                                src={PROFILE_IMG}
                                alt={USER_DATA.name}
                                sx={{
                                    width: `${imgSize}${imgUnit}`,
                                    height: `${imgSize}${imgUnit}`
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            margin={{ xs: 'auto', sm: 'initial' }}
                            maxWidth={{ xs: 'initial', sm: '50vw' }}
                            textAlign={{ xs: 'center', sm: 'left' }}
                        >
                            {PRIMARY_INFO.map((text: string, i: number) => (
                                <Typography
                                    key={i}
                                    mb={2}
                                    color="text.primary"
                                    variant="h5"
                                    fontFamily={FONTS.para}
                                >
                                    {text}.
                                </Typography>
                            ))}

                            <Typography
                                mb={2}
                                color="text.primary"
                                variant="h5"
                                fontFamily={FONTS.para}
                            >
                                Want to know more?{' '}
                                <Link
                                    underline="hover"
                                    onClick={() => history.push('/connect')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Connect now
                                </Link>
                                &nbsp;or&nbsp;
                                <Link href={USER_DATA.resume} underline="hover">
                                    download my Resume
                                </Link>
                                .
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default About;
