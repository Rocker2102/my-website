import { FC } from 'react';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ContentBox from './ContentBox';
import { styled } from '@mui/material/styles';
import { CONTACT_POINTS } from '../shared/contactData';

const ContactRowItem: FC<typeof CONTACT_POINTS[number]> = Props => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
        color: theme.palette.text.secondary,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: Props.activeColor,
            transform: 'scale(1.02)'
        }
    }));

    return (
        <Grid item xs={12} md={6}>
            <Link href={Props.href} target="_blank" sx={{ textDecoration: 'none' }}>
                <Item elevation={7} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }} alignItems="center">
                        <Props.Icon fontSize="large" />

                        <div style={{ textAlign: 'left' }}>
                            <Typography variant="h6" fontWeight={500} fontFamily="LexendDeca">
                                {Props.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                fontWeight={400}
                                fontFamily="LexendDeca Light"
                                display={{ xs: 'none', sm: 'block' }}
                            >
                                {Props.username ?? '-'}
                            </Typography>
                        </div>
                    </Stack>
                </Item>
            </Link>
        </Grid>
    );
};

const Contact: FC = () => {
    return (
        <Grow in={true} timeout={150}>
            <ContentBox>
                <Box>
                    <Typography variant="h2" color="primary" fontWeight={500} fontFamily="Raleway">
                        Contact Info
                    </Typography>
                    <Typography variant="h4" color="text.primary" fontFamily="LexendDeca Light">
                        How would you like to get in touch? 😊
                    </Typography>
                </Box>
                <Box mt={{ xs: 4, md: 6, lg: 7 }}>
                    <Grid container spacing={{ xs: 0.5, sm: 1, md: 2, lg: 3 }} rowSpacing={2}>
                        {CONTACT_POINTS.map(contact => {
                            if (contact.showOnContact === false) return null;
                            return <ContactRowItem key={contact.name} {...contact} />;
                        })}
                    </Grid>
                </Box>
            </ContentBox>
        </Grow>
    );
};

export default Contact;
