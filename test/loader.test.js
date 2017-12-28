const path = require('path');
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const compiler = require('./compiler');

test('writes a module exporting TypeDoc JSON', done => {
  compiler('test-file.ts').then(stats => {
    const output = stats.toJson().modules[0].source;
    expect(output).toMatch(/^module.exports = /);
    const json = JSON.parse(output.replace(/^module.exports = /, ''));
    expect(json.children[0].name).toBe('Animal');
    done();
  }).catch(done);
});