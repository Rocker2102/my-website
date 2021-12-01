import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Title from './Title';
import ContentBox from './ContentBox';
import MyTimeline from './MyTimeline';
import { useHistory } from 'react-router-dom';
import { FONTS, USER_DATA } from '../shared/appSettings';
import { PRIMARY_INFO, PROFILE_IMG, SECONDARY_INFO } from '../shared/aboutData';

/**
 * Dimension & units of display picture
 * (use a 1:1 ratio picture for best results)
 */
const imgSize = 30;
const imgUnit = 'vh';

const dpSxProp = {
    xs: `${imgSize - 6}${imgUnit}`,
    sm: `${imgSize - 2}${imgUnit}`,
    md: `${imgSize}${imgUnit}`
};

const About: FC = () => {
    const history = useHistory();

    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Title>About Me</Title>

                <Box mt={{ xs: 4, md: 6, lg: 7 }}>
                    <Grid container spacing={4}>
                        <Grid item textAlign="center" margin="auto">
                            <Avatar
                                src={PROFILE_IMG}
                                alt={USER_DATA.name}
                                sx={{
                                    width: dpSxProp,
                                    height: dpSxProp
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
                                    {text};
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
                                    rel="noopener"
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
                                ;
                            </Typography>
                        </Grid>
                    </Grid>

                    <Stack
                        mt={4}
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        justifyContent="space-between"
                        alignItems="start"
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        {Object.keys(SECONDARY_INFO).map(
                            (title: keyof typeof SECONDARY_INFO, i: number) => (
                                <Grid
                                    item
                                    key={title}
                                    sm={6}
                                    textAlign={{ xs: 'center', sm: i % 2 === 0 ? 'left' : 'right' }}
                                    margin="auto"
                                >
                                    <Typography
                                        mb={1}
                                        color="secondary"
                                        variant="h5"
                                        fontFamily={FONTS.general}
                                        sx={{ textTransform: 'capitalize' }}
                                    >
                                        {title};
                                    </Typography>
                                    {SECONDARY_INFO[title].map((listItem, i) => (
                                        <Typography
                                            key={i}
                                            mb={2}
                                            color="text.secondary"
                                            variant="h6"
                                            fontFamily={FONTS.para}
                                        >
                                            - {listItem};
                                        </Typography>
                                    ))}
                                </Grid>
                            )
                        )}
                    </Stack>

                    <Box mt={4}>
                        <Typography
                            mb={2}
                            color="secondary"
                            variant="h5"
                            fontFamily={FONTS.general}
                        >
                            Brief Timeline;
                        </Typography>

                        <MyTimeline />
                    </Box>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default About;
