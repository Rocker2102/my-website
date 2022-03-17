import WebSVG from '../icons/web.svg';
import PublicSVG from '../icons/public.svg';
import AddTaskSVG from '../icons/addTask.svg';
import WindowsSVG from '../icons/windows.svg';
import ReceiptSVG from '../icons/receipt.svg';
import LanguageSVG from '../icons/language.svg';
import TimelineSVG from '../icons/timeline.svg';
import DashboardSVG from '../icons/dashboard.svg';
import MusicNoteSVG from '../icons/musicNote.svg';
import EventAvailableSVG from '../icons/eventAvailable.svg';
import QuestionAnswerSVG from '../icons/questionAnswer.svg';

export interface PROJECT_DATA {
    title: string;
    isWIP?: boolean;
    website?: string;
    private?: boolean;
    coverImg?: string;
    coverIcon?: string;
    /**
     * Any CSS 'background' property compatible string
     */
    background?: string;
    githubUrl?: string;
    description: string[];
}

/**
 * Data store for Projects component.
 * HTML tags can be embedded inside description property.
 */
export const PROJECT_DATA: PROJECT_DATA[] = [
    {
        isWIP: false,
        title: 'My Website',
        coverIcon: LanguageSVG,
        githubUrl: 'https://github.com/Rocker2102/my-website',
        background: 'linear-gradient(to bottom right, #333, #9E9E9E)',
        description: [
            'Source code of this website.',
            'Developed using <strong>ReactJS & Material UI (Typescript)</strong>.'
        ]
    },
    {
        isWIP: true,
        title: 'Electron Player',
        private: true,
        coverIcon: MusicNoteSVG,
        githubUrl: 'https://github.com/Rocker2102/electron-music-player',
        background: 'linear-gradient(to bottom right, #9C27B0, #880E4F)',
        description: [
            `A cross-platform desktop music player built with <strong>Electron.js, React
                & Material UI (Typescript)</strong>.`
        ]
    },
    {
        title: 'Admin Dashboard',
        website: 'https://nitsikkim.ac.in/dashboard-beta',
        coverIcon: DashboardSVG,
        githubUrl: 'https://github.com/wdc-nitsikkim/dashboard',
        background: 'linear-gradient(to bottom right, #4DB6AC, #00695C)',
        description: [
            'Web app to manage certain features of a college website.',
            'Tech stack: <strong>PHP, Laravel, JavaScript</strong>'
        ]
    },
    {
        title: 'Attendance Tracker',
        coverIcon: EventAvailableSVG,
        githubUrl: 'https://github.com/Rocker2102/attendance-tracker',
        background: 'linear-gradient(to bottom right, #8BC34A, #4DD0E1)',
        description: [
            `A web app to track attendance of users. Uses <strong>REST API</strong> to
                communicate with the backend server.`,
            'Tech stack: <strong>Core PHP, JavaScript, Bootstrap 4, MaterializeCSS</strong>'
        ]
    },
    {
        title: 'App Monitor',
        coverIcon: WindowsSVG,
        githubUrl: 'https://github.com/Rocker2102/app-monitor',
        background: 'linear-gradient(to bottom right, #FFB900, #7FBA00)',
        description: [
            `A small <strong>python script</strong> which monitors a given app in Windows
                and stores the data in a <strong>JSON file</strong>. This data includes
                the app start time, stop time & the total usage of the app being monitored.`
        ]
    },
    {
        title: 'FTP Client',
        website: 'http://rocker.epizy.com/ftp-client/',
        coverIcon: PublicSVG,
        githubUrl: 'https://github.com/Rocker2102/ftp-web-client',
        background: 'linear-gradient(to bottom right, #3F51B5, #9575CD)',
        description: [
            `Web page to connect to & browse FTP sites (does not create a persistent connection
                with the FTP server).`,
            'Tech stack: <strong>Core PHP, JavaScript, MaterializeCSS</strong>'
        ]
    },
    {
        title: 'Quiz App',
        website: 'http://rocker.epizy.com/quiz/',
        coverIcon: QuestionAnswerSVG,
        githubUrl: 'https://github.com/Rocker2102/quiz',
        background: 'linear-gradient(to bottom right, #F25022, #CDDC39)',
        description: [
            `A simple web application to make simple quizzes with single-correct or
                multiple-correct answers.`
        ]
    },
    {
        title: 'COVID-19 Tracker',
        website: 'http://rocker.epizy.com/covid19-tracker/',
        coverIcon: TimelineSVG,
        githubUrl: 'https://github.com/Rocker2102/covid19-tracker',
        background: 'linear-gradient(to bottom right, #880E4F, #F44336)',
        description: ['A webpage which utilizes a REST API to fetch & display data.']
    },
    {
        title: 'Website for students',
        website: 'http://rocker.epizy.com/studentswebsite/',
        coverIcon: WebSVG,
        githubUrl: 'https://github.com/Rocker2102/students-website',
        background: 'linear-gradient(to bottom right, #016CCF, #BBDEFB)',
        description: [
            `Website to provide resources (like previous year question papers and assignments) to
                students.`
        ]
    },
    {
        title: 'Invoice Generator',
        website: 'http://rocker.epizy.com/invoice/',
        coverIcon: ReceiptSVG,
        private: true,
        githubUrl: 'https://github.com/Rocker2102/invoice-generator',
        background: 'linear-gradient(to bottom right, #AA00FF, #E91E63)',
        description: ['Website to generate invoices as downloadable PDF&rsquo;s.']
    },
    {
        title: 'To Do App',
        website: 'http://rocker.epizy.com/todo-list/',
        coverIcon: AddTaskSVG,
        githubUrl: 'https://github.com/Rocker2102/todo-laravel',
        description: [
            'A web page to manage todo&rsquo;s.',
            'Currently being redesigned using <strong>Laravel 8 & Bootstrap 5</strong>.'
        ]
    }
];
