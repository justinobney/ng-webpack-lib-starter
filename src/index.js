import 'angular';

const deps = [

];

function svc(){
  const svc = this;

  svc.foo = 'bar';
}

export default angular.module('ng-webpack-lib-starter', deps)
  .service('svc', svc);
