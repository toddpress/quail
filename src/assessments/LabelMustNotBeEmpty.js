/**
 * A wrapper for assessments that call a component to determine
 * the test outcome.
 */
var PlaceholderComponent = require('PlaceholderComponent');

var LabelMustNotBeEmpty = function (test, options) {
  options = options || {
    selector: 'label',
    content: 'true',
    empty: 'true'
  };
  PlaceholderComponent(test, options);
};
module.exports = LabelMustNotBeEmpty;
