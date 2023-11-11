import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ContentBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    pt: 10,
    pb: { xs: 10, md: 4 },
    mx: { xs: 2, sm: 6, md: '6rem', lg: '8rem', xl: '10rem' }
  })
);

export default ContentBox;
