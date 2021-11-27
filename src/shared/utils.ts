import React from 'react';

import { SvgIconProps } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeRounded';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import WorkIcon from '@mui/icons-material/WorkOutlineRounded';
import ContactsIcon from '@mui/icons-material/ContactsRounded';

import {
    AtIcon,
    GitHubIcon,
    FacebookIcon,
    LinkedInIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon
} from '../components/SvgIcons';

/**
 * App route names & paths
 */
export const ROUTES: {
    name: string;
    path: string;
    Icon: React.FC<SvgIconProps>;
    /**
     * Whether the path is to be matched exactly or not
     * (not in use currently, may be removed in the future)
     */
    exact: boolean;
}[] = [
    { name: 'home', path: '/home', exact: false, Icon: HomeIcon },
    { name: 'projects', path: '/projects', exact: true, Icon: WorkIcon },
    { name: 'about', path: '/about', exact: true, Icon: InfoIcon },
    { name: 'contact', path: '/contact', exact: true, Icon: ContactsIcon }
];

/**
 * Personal contact points (social sites)
 */
export const CONTACT_POINTS: {
    name: string;
    href: string;
    Icon: React.FC<SvgIconProps>;
    username?: string;
    /**
     * Whether to show this contact point on home page
     */
    showOnHome: boolean;
    /**
     * Color of icon on when hovered or focussed
     */
    activeColor?: string;
    /**
     * Whether to show this contact point on contact page
     */
    showOnContact: boolean;
}[] = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rocker2102/',
        Icon: LinkedInIcon,
        username: '@rocker2102',
        showOnHome: true,
        activeColor: '#2867B2',
        showOnContact: true
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Rocker2102',
        Icon: GitHubIcon,
        username: '@Rocker2102',
        showOnHome: true,
        activeColor: '#FFF',
        showOnContact: true
    },
    {
        name: 'Email',
        href: 'mailto:ankushyadav9302@gmail.com',
        Icon: AtIcon,
        username: 'ankushyadav9302@gmail.com',
        activeColor: '#DF73FF',
        showOnHome: false,
        showOnContact: true
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/rocker2102',
        Icon: FacebookIcon,
        username: '@rocker2102',
        showOnHome: false,
        activeColor: '#4267B2',
        showOnContact: true
    },
    {
        name: 'Telegram',
        href: 'https://t.me/rocker2102',
        Icon: TelegramIcon,
        username: '@rocker2102',
        showOnHome: true,
        activeColor: '#0088CC',
        showOnContact: false
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/Rocker_2102',
        Icon: TwitterIcon,
        username: '@Rocker_2102',
        showOnHome: true,
        activeColor: '#1DA1F2',
        showOnContact: true
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/+919589203992',
        Icon: WhatsAppIcon,
        username: '+91 95892 03992',
        showOnHome: false,
        activeColor: '#4AC959',
        showOnContact: true
    }
];
