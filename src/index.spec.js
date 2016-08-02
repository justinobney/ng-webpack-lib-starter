describe('Service: workflowService', () => {
    let $injector;
    let $rootScope;
    let svc;

    beforeEach(() => {
      angular.mock.module(
        'ng-webpack-lib-starter'
      );

      angular.mock.inject(
        _$injector_ => {
          $injector = _$injector_;
          $rootScope = $injector.get('$rootScope');
          svc = $injector.get('svc');
        }
      );
    });

    it('FUBAR', () => {
      expect(svc.foo).toEqual('bar');
  });
});
