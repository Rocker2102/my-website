import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';

import Title from './Title';
import Card from './ProjectCard';
import Subtitle from './Subtitle';
import ContentBox from './ContentBox';
import { PROJECT_DATA } from '../shared/projectData';

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
