import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Title from './Title';
import Subtitle from './Subtitle';
import ContentBox from './ContentBox';
import { GitHubIcon } from './SvgIcons';
import DefaultCodeIcon from '../icons/code.svg';
import { PROJECT_DATA } from '../shared/projectData';

interface CardProps {
    data?: PROJECT_DATA;
    muiProps?: MuiCardProps;
    animationTimeout: number;
}

const Card: FC<CardProps> = props => {
    return (
        <Zoom in={true} style={{ transitionDelay: `${props.animationTimeout}ms` }}>
            <MuiCard elevation={6} {...props.muiProps}>
                <CardMedia
                    component="img"
                    height="140"
                    image={DefaultCodeIcon}
                    alt="DefaultIcon"
                    sx={{ objectFit: 'contain', backgroundColor: '#FAEBD7' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A small description should be enough
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="warning" sx={{ px: 1.5 }} startIcon={<GitHubIcon />}>
                        Repository
                    </Button>
                </CardActions>
            </MuiCard>
        </Zoom>
    );
};

const Projects: FC = () => {
    /* Base delay in appearance of each card (multiplied by card number) */
    const baseTimeout = 50;

    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <div>
                    <Title>Projects</Title>
                    <Subtitle>My projects &amp; contributions on GitHub</Subtitle>
                </div>

                <Box mt={{ xs: 4, md: 6, lg: 7 }}>
                    <Grid container spacing={{ xs: 0.5, sm: 1, md: 2, lg: 3 }} rowSpacing={4}>
                        {PROJECT_DATA.map((project: PROJECT_DATA, i) => (
                            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                                <Card data={project} animationTimeout={baseTimeout * (i + 1)} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default Projects;
