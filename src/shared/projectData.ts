/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PROJECT_DATA {
    title: string;
    website?: string;
    private?: boolean;
    githubUrl?: string;
    description: string[];
}

/**
 * Data store for Projects component.
 * HTML tags can be embedded inside description property.
 */
export const PROJECT_DATA: PROJECT_DATA[] = [
    {
        title: 'My Website',
        githubUrl: 'https://github.com/Rocker2102/my-website',
        description: [
            'Source code of this website.',
            'Developed using <strong>ReactJS & Material UI (Typescript)</strong>.'
        ]
    },
    {
        title: 'Electron Player',
        private: true,
        githubUrl: 'https://github.com/Rocker2102/electron-music-player',
        description: [
            `A cross-platform desktop music player built with <strong>Electron.js, React
                & Material UI (Typescript)</strong>.`
        ]
    },
    {
        title: 'Admin Dashboard',
        website: 'https://nitsikkim.ac.in/dashboard-beta',
        githubUrl: 'https://github.com/wdc-nitsikkim/dashboard',
        description: [
            'Web app to manage certain features of a college website.',
            'Tech stack: <strong>PHP, Laravel, JavaScript</strong>'
        ]
    },
    {
        title: 'Attendance Tracker',
        githubUrl: 'https://github.com/Rocker2102/attendance-tracker',
        description: [
            `A web app to track attendance of users. Uses <strong>REST API</strong> to
                communicate with the backend server.`,
            'Tech stack: <strong>Core PHP, JavaScript, Bootstrap 4, MaterializeCSS</strong>'
        ]
    },
    {
        title: 'App Monitor',
        githubUrl: 'https://github.com/Rocker2102/app-monitor',
        description: [
            `A small <strong>python script</strong> which monitors a given app in Windows
                and stores the data in a <strong>JSON file</strong>. This data includes
                the app start time, stop time & the total usage of the app being monitored.`
        ]
    },
    {
        title: 'FTP Client',
        website: 'http://rocker.epizy.com/ftp-client/',
        githubUrl: 'https://github.com/Rocker2102/ftp-web-client',
        description: [
            `Web page to connect to & browse FTP sites (does not create a persistent connection
                with the FTP server).`,
            'Tech stack: <strong>Core PHP, JavaScript, MaterializeCSS</strong>'
        ]
    },
    {
        title: 'Quiz App',
        website: 'http://rocker.epizy.com/quiz/',
        githubUrl: 'https://github.com/Rocker2102/quiz',
        description: [
            `A simple web application to make simple quizzes with single-correct or
                multiple-correct answers.`
        ]
    },
    {
        title: 'COVID-19 Tracker',
        website: 'http://rocker.epizy.com/covid19-tracker/',
        githubUrl: 'https://github.com/Rocker2102/covid19-tracker',
        description: ['A webpage which utilizes a REST API to fetch & display data.']
    },
    {
        title: 'Website for students',
        website: 'http://rocker.epizy.com/studentswebsite/',
        githubUrl: 'https://github.com/Rocker2102/students-website',
        description: [
            `Website to provide resources (like previous year question papers and assignments) to
                students.`
        ]
    },
    {
        title: 'Invoice Generator',
        website: 'http://rocker.epizy.com/invoice/',
        private: true,
        githubUrl: 'https://github.com/Rocker2102/invoice-generator',
        description: ['Website to generate invoices as downloadable PDF&rsquo;s.']
    },
    {
        title: 'To Do App',
        website: 'http://rocker.epizy.com/todo-list/',
        githubUrl: 'https://github.com/Rocker2102/todo-laravel',
        description: [
            'A web page to manage todo&rsquo;s.',
            'Currently being redesigned using <strong>Laravel 8 & Bootstrap 5</strong>.'
        ]
    }
];
