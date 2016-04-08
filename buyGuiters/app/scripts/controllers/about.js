'use strict';

/**
 * @ngdoc function
 * @name guitercenterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guitercenterApp
 */
angular.module('guitercenterApp')
  .controller('AboutCtrl', function (shareddata,$scope,$location,summaryshare) {
    $scope.pruchase=true;
    $scope.imageforthispage=shareddata.myindex;
    $scope.buyfinally = function(){
        summaryshare.firstname= $scope.firstname;
        summaryshare.lastname= $scope.lastname;
        summaryshare.email= $scope.email;
      $location.path('/summary');
    };

    $scope.gotoreview = function(){
         $scope.showme=true;
         $scope.pruchase=false;

    };
    $scope.edit = function(){
         $scope.showme=false;
         $scope.pruchase=true;

    };

  });
