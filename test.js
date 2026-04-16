require('ts-node').register();
const { projects } = require('./src/data/projects.ts');
console.log(projects.map(p => p.id));
