var app = angular.module("appMod");

app.factory("appfactory", function($scope, $http) {
  console.log("factory load");

  $http({
    method: "GET",
    url: 'http://www.reddit.com/r/tsunderesharks.json'
  }).then(function callSuccess(response) {
    $scope.posts=response.data.data.children;
  }, function(error) {
    console.log(error);
  })
})
