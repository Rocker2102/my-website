import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import {
    AtIcon,
    GitHubIcon,
    FacebookIcon,
    LinkedInIcon,
    TwitterIcon,
    WhatsAppIcon
} from './SvgIcons';

interface SocialLink {
    name: string;
    href: string;
    icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        href: 'https://github.com/Rocker2102',
        icon: <GitHubIcon fontSize="large" />
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rocker2102/',
        icon: <LinkedInIcon fontSize="large" />
    },
    {
        name: 'Email',
        href: 'mailto:ankushyadav9302@gmail.com',
        icon: <AtIcon fontSize="large" />
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/rocker2102',
        icon: <FacebookIcon fontSize="large" />
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/Rocker_2102',
        icon: <TwitterIcon fontSize="large" />
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/+919589203992',
        icon: <WhatsAppIcon fontSize="large" />
    }
];

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const CustomLink = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
        color: '#fff',
        transform: 'scale(1.3)'
    },
    '&:focus': {
        color: '#fff'
    }
}));

const Home: React.FC = () => {
    return (
        <Box>
            <Typography variant="h2" color="text.primary" fontWeight={500} fontFamily="LexendDeca">
                Hiii 👋, I&apos;m Ankush Yadav
            </Typography>
            <Typography variant="h4" color="primary" mt={3} pb={4} fontFamily="LexendDeca Light">
                Student &amp; Full-Stack Web Developer
            </Typography>

            <Stack direction="row" spacing={4} mt={5} justifyContent="center" alignItems="center">
                {socialLinks.map((social: SocialLink) => (
                    <CustomLink key={social.name} href={social.href} target="_blank">
                        {social.icon}
                    </CustomLink>
                ))}
            </Stack>
        </Box>
    );
};

export default Home;
