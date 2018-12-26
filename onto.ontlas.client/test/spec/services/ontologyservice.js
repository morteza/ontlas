'use strict';

describe('Service: OntologyService', function () {

  // load the service's module
  beforeEach(module('ontlasApp'));

  // instantiate service
  var OntologyService;
  beforeEach(inject(function (_OntologyService_) {
    OntologyService = _OntologyService_;
  }));

  it('should do something', function () {
    expect(!!OntologyService).toBe(true);
  });

});
