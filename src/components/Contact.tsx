import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

const Contact: React.FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <Box>
                <Typography variant="h2" color="primary" fontWeight={500} fontFamily="Raleway">
                    Contact Info
                </Typography>
                <Typography variant="h4" color="text.primary" fontFamily="LexendDeca Light">
                    How would you like to get in touch? 😊
                </Typography>
            </Box>
        </Grow>
    );
};

export default Contact;
