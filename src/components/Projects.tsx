import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

const Projects: React.FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <Box>
                <Typography variant="h2" color="primary" fontWeight={500} fontFamily="Raleway">
                    My Projects
                </Typography>
            </Box>
        </Grow>
    );
};

export default Projects;
