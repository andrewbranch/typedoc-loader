const { getOptions } = require('loader-utils');
const StringProgrammaticApplication = require('./string-programmatic-application');

module.exports = function() {
  const options = getOptions(this);
  const app = new StringProgrammaticApplication(options);
  return JSON.stringify(app.toJson(this.resourcePath));
}
