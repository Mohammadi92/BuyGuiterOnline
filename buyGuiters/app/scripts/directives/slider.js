'use strict';

/**
 * @ngdoc directive
 * @name guitercenterApp.directive:slider
 * @description
 * # slider
 */
angular.module('guitercenterApp')
  .directive('slider', function ($timeout) {
    return {

      restrict: 'AE',
      replace:true,
      scope:{
        images:'='
      },
      link: function postLink(scope, element, attrs) {
        $timeout(function(){
         scope.currentIndex = 0;
         // Initially the index is at the first image
        scope.next = function() {
            scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function() {
            scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };

        /*scope.image1=function(){
          scope.images.forEach(function(image){
             image.visible=false;  });
          scope.images[0].visible=true;
        };
        scope.image2=function(){
          scope.images.forEach(function(image){
             image.visible=false;  });
          scope.images[1].visible=true;
        };
        scope.image3=function(){
          scope.images.forEach(function(image){
             image.visible=false;  });
          scope.images[2].visible=true;
        };
        scope.image4=function(){
          scope.images.forEach(function(image){
             image.visible=false;  });
          scope.images[3].visible=true;
        };*/
          scope.$watch('currentIndex',function(){
          scope.images.forEach(function(image){
          image.visible=false;
            });
          //console.log(scope.currentIndex);
           //console.log(scope.images);
          scope.images[scope.currentIndex].visible=true;
          });
        /* Start: For Automatic slideshow*/

    /*var timer;

    var sliderFunc=function(){
      timer=$timeout(function(){
        scope.next();
        timer=$timeout(sliderFunc,1000);
      },5000);
    };

    sliderFunc();

    scope.$on('$destroy',function(){
      $timeout.cancel(timer);
    });
*/

   /*End : For Automatic slideshow*/
    },200);
      },   templateUrl :  'views/template/slidertemplate.html'
    };
  });
