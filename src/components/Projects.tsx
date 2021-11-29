import { FC } from 'react';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

import Title from './Title';
import Subtitle from './Subtitle';
import ContentBox from './ContentBox';

const Projects: FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Title>My Projects</Title>

                <Box>
                    <Subtitle>Under development</Subtitle>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default Projects;
