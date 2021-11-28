import { FC } from 'react';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

import ContentBox from './ContentBox';

const Projects: FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Typography variant="h2" color="primary" fontWeight={500} fontFamily="Raleway">
                    My Projects
                </Typography>

                <Box>
                    <Typography variant="h4" color="text.primary" fontFamily="LexendDeca Light">
                        Under development
                    </Typography>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default Projects;
