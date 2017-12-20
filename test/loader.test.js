const path = require('path');
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const compiler = require('./compiler');

test('anything', done => {
  compiler('test-file.ts').then(stats => {
    const output = stats.toJson().modules[0].source;
    expect(output).toMatch(/^export default /);
    done();
  }).catch(done);
});