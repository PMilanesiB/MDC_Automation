// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('forceVisit', url => {
    cy.log('prueba 1bis')
    cy.window().then(win => {
        return win.open('http://172.16.17.244:4500/authentication/login', '_self');
    });
    /*cy.get('body').then(body$ => {
        cy.log('prueba 2')
      const appWindow = body$[0].ownerDocument.defaultView;
      cy.log('prueba 3')
      const appIframe = appWindow.parent.document.querySelector('iframe');
  
      // We return a promise here because we don't want to
      // continue from this command until the new page is
      // loaded.
      cy.log('prueba 4')
      return new Promise(resolve => {
        cy.log('prueba 5')
        appIframe.onload = () => resolve();
        cy.log('prueba 6')
        appWindow.location = url;
        cy.log('prueba 7')
      });
    });*/
  });



//import "cypress-plugin-snapshots/commands";

Cypress.Commands.add('login', (userName, password) => {
  cy.request({
      method:'POST', 
      url:'http://172.16.17.244:2010/Auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {       
        "Username": "admin",
        "Password": "admin"
      }
    })
    .as('loginResponse')
    .then((response) => {
      Cypress.env('token', response.body.token); // either this or some global var but remember that this will only work in one test case
      return response;
    })
    .its('status')
    .should('eq', 200);
})


const compareSnapshotCommand = require('cypress-visual-regression/dist/command')

compareSnapshotCommand()