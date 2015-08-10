var app = angular.module('MasterBlaster', []);

app.controller('BlastList', ['$scope', '$http', function($scope, $http) {
  $http.get('https://raw.githubusercontent.com/segfly/ReferenceRepo/datafeeds/blastfeed.json').success(function(data) {
    $scope.blasts = data.records;
  });
}]);

app.directive('userBlast', function() {
  return {
    restrict: 'E',
    scope: {
      blast: '='
    },
    templateUrl: 'blast.html'
  };
});