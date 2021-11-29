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

export const PROFILE_IMG = profileImg;

export default {
    PROFILE_IMG,
    PRIMARY_INFO,
    SECONDARY_INFO
};
