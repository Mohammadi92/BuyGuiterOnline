'use strict';

describe('Filter: onlycurrency', function () {

  // load the filter's module
  beforeEach(module('guitercenterApp'));

  // initialize a new instance of the filter before each test
  var onlycurrency;
  beforeEach(inject(function ($filter) {
    onlycurrency = $filter('onlycurrency');
  }));

  it('should return the input prefixed with "onlycurrency filter:"', function () {
    var text = 'angularjs';
    expect(onlycurrency(text)).toBe('onlycurrency filter: ' + text);
  });

});
