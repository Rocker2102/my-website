import { FC } from 'react';

import profileImg from '../images/profile.jpg';

/* eslint-disable */
export const PRIMARY_INFO = [
    `I'm a full-stack web developer (mostly self-taught), an average programmer,
        and a student from Lucknow, India`,
    `I'm currently building (and learning of course 😅), a cross-platform desktop
        application using Electron.js & React`
];

export const SECONDARY_INFO: {
    [key: string]: string[];
} = {
    'hobbies & interests': [
        `Fan of fantasy, action & adventure movies`,
        'Some random data just for visualization purpose '
    ],
    'technical knowledge': [
        'Some random data just for visualization purpose which is supposedly long',
        'Some random data just for visualization purpose'
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
    iconbg?: string;
    titleColor?: string;
    description?: string;
    Icon?: FC;
}[] = [
    {
        date: 'May 2021 - August 2021',
        title: 'Internship @ DS Legends Pte. Ltd.',
        place: 'Bhopal',
        description: 'PHP Developer Intern (Full-time)'
    },
    {
        date: 'December 2020 - Feb 2021',
        title: 'Internship @ FOXAISR',
        place: 'Bhopal',
        description: 'NodeJS Developer Intern'
    },
    {
        date: 'May 2020 - June 2020',
        title: 'Internship @ Think2Exam',
        place: 'Bhopal',
        description: 'Full-Stack Developer Intern'
    },
    {
        date: 'December 2019 - Jan 2020',
        title: 'Internship @ XXYY Studios',
        place: 'Sikkim',
        description: 'Backend Developer Intern'
    },
    {
        date: 'August 2018',
        title: 'Joined College',
        place: 'Sikkim',
        description: 'National Institute of Technology, Sikkim'
    },
    {
        date: 'March 2018',
        title: '12th Boards',
        place: 'Bhopal',
        description: 'Kendriya Vidyalaya No. 3, Bhopal'
    },
    {
        date: 'March 2016',
        title: '10th Boards',
        place: 'Bhopal',
        description: 'Kendriya Vidyalaya No. 3, Bhopal'
    },
    {
        date: '29 September 2000',
        title: 'Birthday',
        place: 'Mumbai'
    }
];

export const PROFILE_IMG = profileImg;

export default {
    PROFILE_IMG,
    PRIMARY_INFO,
    TIMELINE_INFO,
    SECONDARY_INFO
};
