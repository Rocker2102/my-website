/// <reference types="cypress" />

module.exports = (on, config) => {
    config.baseUrl =
        config.env.APP_ENV === 'production'
            ? 'https://website-rocker2102.vercel.app/'
            : 'http://localhost:3000/';

    return config;
};
