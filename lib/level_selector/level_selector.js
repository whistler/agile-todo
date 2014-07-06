'use strict';
angular.module('levelSelector', []).directive('levelSelector', function() {
  
  function getTemplatePath() {
    var scriptTag = document.querySelector("script[src$='level_selector.js']");
    var scriptPath = scriptTag.src;
    var templatePath = scriptPath.replace('level_selector.js', 'level_selector.html')
    return templatePath;
  }
  
  function range(x) {
    return Array.apply(null, Array(x)).map(function (_, i) {return i+1;});
  }
  
  var templatePath = getTemplatePath();
  
  return {
    templateUrl: templatePath,
    restrict: 'E',
    scope: {
      level: '='
    },
    link: function(scope, element, attrs) {
      
      if (scope.level === undefined) {
        scope.level = 2;
      }
      if (attrs.max === undefined) {
        attrs.max = 3;
      }
      scope.levels = range(parseInt(attrs.max));
      var current_level = scope.level;
      
      scope.selected = function(level) {
        if (level <= current_level) {
          return 'active';
        }
      }
      
      scope.select = function(level) {
        current_level = level;
        scope.level = level;
      }
      
    }
  };
});