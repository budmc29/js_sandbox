var ResultSet = new Interface('ResultSet', ['getDate', 'getResults']);

var ResultFormatter = function(resultsObject) {
  Interface.ensureImplements(resultsObject, ResultSet);
  this.resultsObject = resultsObject;
};

ResultFormatter.prototype.renderResults = function() {
};
