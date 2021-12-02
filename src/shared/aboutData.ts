import { FC } from 'react';

import CakeIcon from '@mui/icons-material/CakeRounded';
import WorkIcon from '@mui/icons-material/WorkOutlineRounded';
import TodayIcon from '@mui/icons-material/TodayRounded';
import SchoolIcon from '@mui/icons-material/SchoolRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStoriesRounded';

import profileImg from '../images/profile.jpg';

/* eslint-disable */
export const PRIMARY_INFO = [
    `I'm a full-stack web developer (LAMP/MERN), an average programmer,
        and a student from Lucknow, India`,
    `I'm currently working on a cross-platform desktop application using
        Electron.js & React`
];

export const SECONDARY_INFO: {
    [key: string]: string[];
} = {
    'hobbies & interests': [
        `Fan of fantasy, action & adventure movies`,
        'Love playing online FPS games',
        '❤️ Football'
    ],
    'technical knowledge': [
        `Worked with PHP frameworks like Laravel & Codeigniter for developing REST
            API's & stuff`,
        `Also have working knowledge about responsive web design & front-end
            libraries such as Bootstrap, MaterializeCSS & MUI`,
        `Developed a few web applications & API's using popular JavaScript libraries &
            frameworks including React, ExpressJS & Electron`
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
        date: 'November 2021',
        title: 'Received my first job offer 🏢',
        place: 'Lucknow',
        titleColor: 'success',
        Icon: WorkIcon
    },
    {
        date: 'May 2021 - August 2021',
        title: 'Internship @ DS Legends Pte. Ltd. (Singapore)',
        place: 'Bhopal',
        description: 'PHP Developer Intern (Full-time)',
        Icon: TodayIcon
    },
    {
        date: 'December 2020 - Feb 2021',
        title: 'Internship @ FOXAISR',
        place: 'Bhopal',
        description: 'NodeJS Developer Intern',
        Icon: TodayIcon
    },
    {
        date: 'May 2020 - June 2020',
        title: 'Internship @ Think2Exam',
        place: 'Bhopal',
        description: 'Full-Stack Developer Intern',
        Icon: TodayIcon
    },
    {
        date: 'December 2019 - Jan 2020',
        title: 'Internship @ XXYY Studios',
        place: 'Sikkim',
        description: 'Backend Developer Intern',
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
