'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
    $scope.post = {url: '', title: ''};

    $scope.submitPost = function () {
      Post.create($scope.post).then(function (postId) {
        $scope.post = {url: 'http://', title: ''};
        // this redirects to a posts page $location.path('/posts/' + postId);
      });
    };

    $scope.logout = function () {
      Auth.logout();
    };

  });