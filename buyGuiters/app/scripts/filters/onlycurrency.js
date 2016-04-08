'use strict';

/**
 * @ngdoc filter
 * @name guitercenterApp.filter:onlycurrency
 * @function
 * @description
 * # onlycurrency
 * Filter in the guitercenterApp.
 */
angular.module('guitercenterApp')
  .filter('onlycurrency', function () {
    return function (input) {
        var string = input.split('$')
      return "$"+string[1];
    };
  });
