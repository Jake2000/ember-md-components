/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-md-components',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/velocity/velocity.js');
  }
};
