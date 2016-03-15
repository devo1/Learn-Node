var app = angular
    .module('flicks', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'

                    .when('/add-video', {
                        templateUrl: 'partials/video-form.html',
                        controller: 'AddVideoCtrl'
                    })

                    .when('/video/:id', {
                        templateUrl: 'partials/video-form.html'
                    })
                    .when('/video/:id', {
                        templateUrl: 'partials/video-form.html',
                        controller: 'EditVideoCtrl'
                    })
                    .when('/video/delete/:id', {
                        templateUrl: 'partials/video-delete.html',
                        controller: 'DeleteVideoCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    })
            });

// Controller: list all videos
        app.controller('HomeCtrl', ['$resource', function ($resource) {
            var vm = this;
            var Videos = $resource('/api/videos');
            Videos.query(function (videos) {
                vm.videos = videos;
            })
        }]);

// Controller: add a video
        app.controller('AddVideoCtrl', ['$resource', '$location', function ($resource, $location) {
            vm.save = function () {
            var Videos = $resource('api/videos');
                Videos.save(vm.video, function () {
                    $location.pat('/');
                });
            };
        }]);

// Controller: edit a video
        app.controller('EditVideoCtrl', ['$resource', '$location', '$routeParams',
            function ($resource, $location, $routeParams) {
                var Videos = $resource('/api/videos/:id', {id: '@_id'}, {
                    update: {method: 'PUT'}
                });

                Videos.get({id: $routeParams.id}, function (video) {
                    vm.video = video;
                });

                vm.save = function () {
                    Videos.update(vm.video, function () {
                        $location.path('/');
                    });
                }
            }]);

// Controller: delete a video
app.controller('DeleteVideoCtrl', ['$scope', '$resource', '$location', '$routeParams',
    function($scope, $resource, $location, $routeParams) {
        var Videos = $resource('/api/videos/:id');

        Videos.get({id: $routeParams.id}, function (video) {
            $scope.video = video;
        });

        $scope.delete = function () {
            Videos.delete({id: $routeParams.id}, function (video) {
                $location.path('/');
            });
        }
    }
    }]);