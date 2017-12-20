const { Application } = require('@andrewbranch/typedoc');

module.exports = class StringProgrammaticApplication extends Application {
  constructor(options) {
    super(Object.assign({
      module: 'commonjs'
    }, options, {
      mode: 'file',
      json: true
    }));
  }

  toJson(sourcePath) {

    const project = super.convert([sourcePath]);

    if (!project) {
      return false;
    }

    return this.serializer.projectToObject(project);
  }
}