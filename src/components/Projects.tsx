import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';

import Title from './Title';
import Subtitle from './Subtitle';
import ContentBox from './ContentBox';
import { GitHubIcon } from './SvgIcons';
import { FONTS } from '../shared/appSettings';
import DefaultCodeIcon from '../icons/code.svg';
import { PROJECT_DATA } from '../shared/projectData';

interface CardProps {
    data: PROJECT_DATA;
    muiProps?: MuiCardProps;
    animationDelay: number;
}

const Card: FC<CardProps> = props => {
    /* Limit animationDelay to 5000 ms */
    props.animationDelay > 5000 ? (props.animationDelay = 5000) : false;

    return (
        <Zoom in={true} style={{ transitionDelay: `${props.animationDelay}ms` }}>
            <MuiCard
                elevation={6}
                {...props.muiProps}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}
            >
                <Box>
                    <CardMedia
                        component="img"
                        height="180"
                        image={DefaultCodeIcon}
                        alt="DefaultIcon"
                        sx={{ objectFit: 'contain', backgroundColor: '#FAEBD7' }}
                    />
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Typography gutterBottom variant="h5" fontFamily={FONTS.general}>
                            {props.data.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" fontFamily={FONTS.para}>
                            {props.data.description.map((text, i) => {
                                return (
                                    <>
                                        <span>{text}</span>
                                        {i + 1 < props.data.description.length ? <br /> : ''}
                                    </>
                                );
                            })}
                        </Typography>
                    </CardContent>
                </Box>
                <CardActions>
                    {props.data.githubUrl ? (
                        <Button
                            href={props.data.githubUrl}
                            target="_blank"
                            size="large"
                            color="warning"
                            sx={{ px: 1.5 }}
                            startIcon={<GitHubIcon />}
                        >
                            Repository
                        </Button>
                    ) : null}
                    {props.data.website ? (
                        <Button
                            size="large"
                            color="warning"
                            href={props.data.website}
                            target="_blank"
                            sx={{ px: 1.5 }}
                            startIcon={<LanguageIcon />}
                        >
                            Website
                        </Button>
                    ) : null}
                </CardActions>
            </MuiCard>
        </Zoom>
    );
};

const Projects: FC = () => {
    /* Base delay in appearance of each card (later multiplied by card number) */
    const baseTimeout = 50;

    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <div>
                    <Title>Projects</Title>
                    <Subtitle>My projects &amp; contributions on GitHub</Subtitle>
                </div>

                <Box mt={{ xs: 4, md: 6, lg: 7 }}>
                    <Grid
                        container
                        spacing={{ xs: 0.5, sm: 2, lg: 3 }}
                        rowSpacing={4}
                        justifyContent={PROJECT_DATA.length < 3 ? 'center' : 'left'}
                    >
                        {PROJECT_DATA.map((project: PROJECT_DATA, i) => (
                            <Grid
                                key={i}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                /* FIXME: Try to fix with CSS only. Below is a dirty fix */
                                minWidth={PROJECT_DATA.length === 1 ? '300px' : 'initial'}
                            >
                                <Card data={project} animationDelay={baseTimeout * (i + 1)} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default Projects;
