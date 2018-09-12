angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController','enrollCtrl','dashboardCtrl'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
