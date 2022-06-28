/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default;
const sqlServer = require('cypress-sql-server');
const dbConfig = require('../../cypress.json');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()); //for cypress cucumber preprocessor

  tasks = sqlServer.loadDBPlugin(dbConfig.db);
  on('task', tasks);

  getCompareSnapshotsPlugin(on, config);
 
  //Implementación de instantáneas del complemento Cypress https://www.lambdatest.com/blog/cypress-visual-regression-testing/
  initPlugin(on, config);
  return config;
}
