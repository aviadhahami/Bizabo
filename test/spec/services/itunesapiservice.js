'use strict';

describe('Service: iTunesApiService', function () {

  // load the service's module
  beforeEach(module('bizzaboApp'));

  // instantiate service
  var iTunesApiService;
  beforeEach(inject(function (_iTunesApiService_) {
    iTunesApiService = _iTunesApiService_;
  }));

  it('should do something', function () {
    expect(!!iTunesApiService).toBe(true);
  });

});
