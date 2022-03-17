import { FC } from 'react';

import CakeIcon from '@mui/icons-material/CakeRounded';
import TodayIcon from '@mui/icons-material/TodayRounded';
import SchoolIcon from '@mui/icons-material/SchoolRounded';
import WorkIcon from '@mui/icons-material/WorkOutlineRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStoriesRounded';

import profileImg from '../images/profile.jpg';

/* eslint-disable */
export const PRIMARY_INFO = [
    `I am an enthusiastic full-stack LAMP/MERN web developer who enjoys experimenting
        with new programming concepts & technologies`,
    `I'm currently working as an SWE intern at Dassault Systèmes.`
];

export const SECONDARY_INFO: {
    [key: string]: string[];
} = {
    'hobbies & interests': [
        'Fan of fantasy, action & adventure movies',
        '❤️ playing online FPS games & football',
        'I like meeting new people.... over texting 😅'
    ],
    'technical knowledge': [
        `Worked with PHP frameworks like Laravel & Codeigniter for developing REST
            API's & stuff`,
        `Also have working knowledge about responsive web design & front-end
            libraries such as Bootstrap, MaterializeCSS & MUI`,
        `Developed a few web applications & API's using popular JavaScript libraries &
            frameworks including jQuery, React, ExpressJS & Electron`
    ]
};
/* eslint-enable */

/**
 * Order is important, rendered from: Latest (top) -> Oldest (bottom)
 */
export const TIMELINE_INFO: {
    date: string;
    title: string;
    place?: string;
    titleColor?: 'error' | 'warning' | 'info' | 'success' | 'primary' | 'secondary';
    description?: string;
    Icon?: FC;
}[] = [
    {
        date: 'January 2022 - Present',
        title: 'Software Engineer Intern',
        place: 'Lucknow',
        titleColor: 'success',
        description: 'Internship @ Dassault Systèmes',
        Icon: WorkIcon
    },
    {
        date: 'May 2021 - August 2021',
        title: 'PHP Developer',
        place: 'Bhopal',
        description: 'Freelancer @ DS Legends Pte. Ltd. (Singapore)',
        Icon: TodayIcon
    },
    {
        date: 'December 2020 - Feb 2021',
        title: 'NodeJS Developer Intern',
        place: 'Bhopal',
        description: 'Internship @ FOXAISR',
        Icon: TodayIcon
    },
    {
        date: 'May 2020 - June 2020',
        title: 'Full-Stack Developer Intern',
        place: 'Bhopal',
        description: 'Internship @ Think2Exam',
        Icon: TodayIcon
    },
    {
        date: 'December 2019 - Jan 2020',
        title: 'Backend Developer Intern',
        place: 'Sikkim',
        description: 'Internship @ XXYY Studios',
        Icon: TodayIcon
    },
    {
        date: 'August 2018',
        title: 'Joined College 👷‍♂️',
        place: 'Sikkim',
        titleColor: 'success',
        description: 'National Institute of Technology, Sikkim',
        Icon: SchoolIcon
    },
    {
        date: 'March 2018',
        title: '12th Boards',
        place: 'Bhopal',
        description: 'Kendriya Vidyalaya No. 3, Bhopal',
        Icon: AutoStoriesIcon
    },
    {
        date: 'March 2016',
        title: '10th Boards',
        place: 'Bhopal',
        description: 'Kendriya Vidyalaya No. 3, Bhopal',
        Icon: AutoStoriesIcon
    },
    {
        date: '29 September 2000',
        title: 'Birthday 🎉',
        place: 'Mumbai',
        titleColor: 'success',
        Icon: CakeIcon
    }
];

export const PROFILE_IMG = profileImg;

export default {
    PROFILE_IMG,
    PRIMARY_INFO,
    TIMELINE_INFO,
    SECONDARY_INFO
};
