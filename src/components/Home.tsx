import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
    return (
        <Box>
            <Typography variant="h2" color="text.primary" fontWeight={500} fontFamily="LexendDeca">
                Hiii 👋, I&apos;m Ankush Yadav
            </Typography>
            <Typography variant="h4" color="primary" mt={3} fontFamily="LexendDeca Light">
                Student &amp; Full-Stack Web Developer
            </Typography>
        </Box>
    );
};

export default Home;
