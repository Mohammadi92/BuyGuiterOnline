'use strict';

/**
 * @ngdoc service
 * @name guitercenterApp.sharedData
 * @description
 * # sharedData
 * Service in the guitercenterApp.
 */
angular.module('guitercenterApp')
  .service('shareddata', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.myindex = "";
  });
