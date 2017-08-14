﻿app.factory('httpService', ['$http', 'CONSTANTS', function ($http, CONSTANTS) {

    var serviceBase = CONSTANTS.ENVIORNMENT.WEBUAT + '/';
    //var serviceBase = CONSTANTS.ENVIORNMENT.LOCAL + '/';
    var httpService = {
        createAccount: createAccount,
        login: login,
        resetPassword: resetPassword,
        forgetPassword: forgetPassword,
        addCategory: addCategory,
        getCategory: getCategory,
        postTask: postTask,
        contactus: contactus,
        newEBCategory: newEBCategory,
        deleteCategory: deleteCategory,
        browseAllTask: browseAllTask
    };

    function createAccount(user) {
        return $http.post(serviceBase + 'api/v1/user/signup', user, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
                return response;
            });
       
    }

    function contactus(user) {
        return $http.post(serviceBase + 'api/v1/user/contactus', user, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }

    function newEBCategory(user) {
        return $http.post(serviceBase + 'api/v1/newEBCategory/create', user, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }

    function postTask(task) {
        return $http.post(serviceBase + 'api/v1/post-task/create' , task, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });

    }

    function login(user) {
        return $http.post(serviceBase + 'api/v1/user/login' , user, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });

    }

    function resetPassword(user)
    {
        return $http.post(serviceBase + 'api/login/resetPassword/', user, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }

    function forgetPassword(emailID)
    {
        console.log(serviceBase + 'api/v1/user/forget-password?email=' + emailID );
        return $http.post(serviceBase + 'api/v1/user/forget-password?email=' + emailID  , { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }
    // category section 

    function addCategory(category)
    {
        return $http.post(serviceBase + 'api/v1/post-task/category',   category , { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }

    function getCategory() {
        return $http.get(serviceBase + 'api/v1/post-task/getcategory', { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }

    function deleteCategory(categoryid) {
        return $http.get(serviceBase + 'api/v1/category/delete/' + categoryid, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }
    
    //task section 
    function browseAllTask() {
        return $http.get(serviceBase + 'api/v1/post-task/getPostTask?task_status=open', { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            return response;
        });
    }

    return httpService;


}]);