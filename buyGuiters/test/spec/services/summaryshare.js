'use strict';

describe('Service: summaryshare', function () {

  // load the service's module
  beforeEach(module('guitercenterApp'));

  // instantiate service
  var summaryshare;
  beforeEach(inject(function (_summaryshare_) {
    summaryshare = _summaryshare_;
  }));

  it('should do something', function () {
    expect(!!summaryshare).toBe(true);
  });

});
