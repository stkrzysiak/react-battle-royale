/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const componentGenerator = require('./component/index');
const containerGenerator = require('./container/index');
const routeGenerator = require('./route/index');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(`app/containers/${comp}`, fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
