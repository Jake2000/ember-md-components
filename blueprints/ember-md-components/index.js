/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    var _this = this;
    return this.addBowerPackageToProject('velocity').then(function() {
      return  _this.addAddonToProject('ember-autoresize');
    })
  }
};
