angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController','enrollCtrl'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
