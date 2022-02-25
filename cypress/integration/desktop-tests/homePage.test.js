/// <reference types="cypress" />

describe('Homepage Tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);

        cy.visit('home');
        console.log(Cypress.config('baseUrl'));
    });

    it('Top navbar menu items exists', () => {
        const topNav = cy.get('[data-testid=app__top-nav]');
        topNav.should('exist');

        topNav
            .find('a')
            .should('contain', 'home')
            .and('contain', 'projects')
            .and('contain', 'about')
            .and('contain', 'connect');

        cy.get('[data-testid=app__bottom-nav]').should('not.exist');
    });

    it('Main text exists', () => {
        const primaryText = /^Ankush Yadav$/;
        const secondaryText = /^Student & Full-Stack Web Developer$/;

        cy.get('[data-testid=app__home-main]').should('exist');
        cy.contains('[data-testid=app__home-main-primary-text]', primaryText).should('exist');
        cy.contains('[data-testid=app__home-main-secondary-text]', secondaryText).should('exist');
    });

    it('Social link exists', () => {
        /**
         * External file needs to be imported for data
         */
    });
});
