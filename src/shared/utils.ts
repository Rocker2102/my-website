import React from 'react';

import { SvgIconProps } from '@mui/material';

import {
    AtIcon,
    GitHubIcon,
    FacebookIcon,
    LinkedInIcon,
    TwitterIcon,
    WhatsAppIcon
} from '../components/SvgIcons';

/**
 * App route names & paths
 */
export const ROUTES: {
    name: string;
    path: string;
    /**
     * Whether the patch is to be matched exactly or not
     */
    exact: boolean;
}[] = [
    { name: 'home', path: '/home', exact: false },
    { name: 'projects', path: '/projects', exact: true },
    { name: 'about', path: '/about', exact: true },
    { name: 'contact', path: '/contact', exact: true }
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
        name: 'GitHub',
        href: 'https://github.com/Rocker2102',
        Icon: GitHubIcon,
        username: '@Rocker2102',
        showOnHome: true,
        showOnContact: true
    },
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
        name: 'Email',
        href: 'mailto:ankushyadav9302@gmail.com',
        Icon: AtIcon,
        username: 'ankushyadav9302@gmail.com',
        showOnHome: false,
        showOnContact: true
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/rocker2102',
        Icon: FacebookIcon,
        username: 'ankushyadav9302@gmail.com',
        showOnHome: true,
        activeColor: '#4267B2',
        showOnContact: true
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
