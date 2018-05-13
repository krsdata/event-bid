﻿


var app = angular.module('eventBid', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

//window.fbAsyncInit = function () {
//    FB.init({
//        appId: '791838100968348',
//        xfbml: true,
//        status: true,
//        cookie: true,
//        version: 'v2.8'
//    });
//    //FB.AppEvents.logPageView();
//};

//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) { return; }
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));


app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/dashBoard.html",
            controller: "dashBoardController"
        })
        .when("/how-it-works", {
            templateUrl: "app/views/how-it-works.html",
            controller: "howItWorksCtrl"
        })
        .when("/add-category", {
            templateUrl: "app/views/request-a-category.html",
            controller: "requestCategoryCtrl"

        })
        .when("/browse-tasks", {
            templateUrl: "app/views/browseTasks.html",
            controller: "browseTaskCtrl"
        })
        .when("/browse-tasks/:categoryName?/:categoryId?", {
            templateUrl: "app/views/browseTasks.html",
            controller: "browseTaskCtrl"
        })
        .when("/EBManager", {
            templateUrl: "app/views/EBManager.html",
            controller: "EBManagerCtrl"
        })
        .when("/EBManager/:contactUs?", {
            templateUrl: "app/views/EBManager.html",
            controller: "EBManagerCtrl"
        })
        .when("/Rewards", {
            templateUrl: "app/views/Rewards.html",
            controller: "rewardsCtrl"
        })
        .when("/post-task", {
            templateUrl: "app/views/post-task.html",
            controller : "postTaskController"
        })
            .when("/payment-acknowledgement", {
                templateUrl: "app/views/paymentAcknowledgement.html",
                controller: "paymentAckController"
            })
         .when("/about-us", {
             templateUrl: "app/views/sitemap/about-us.html",
             controller: "aboutusController"
         })
         .when("/terms-and-conditions", {
             templateUrl: "app/views/sitemap/terms-and-conditions.html",
             controller: "aboutusController"
         })
         .when("/privacy-policy", {
             templateUrl: "app/views/sitemap/privacy-policy.html",
             controller: "aboutusController"
         })
         //.when("/categories", {
         //    templateUrl: "app/views/Category.html",

         //})
         .when("/settings", {
             templateUrl: "app/views/settings.html",
             controller: "settingsCtrl",
             resolve: {
                 
             }
         })
         .when("/blogs", {
             templateUrl: "app/views/blogDetail.html",
             controller: "blogDetailCtrl",
         })

        .when("/contact-us", {
            templateUrl: "app/views/contact-us.html",
            controller: "contactUsCtrl"
        })
        //.when("/FAQ's", {
        //    templateUrl: "app/views/sitemap/FAQ.html",
        //    controller : "FAQCtrl"
        //})
        .when("/profile", {
            templateUrl: "app/views/profile-page.html",
            controller : "profileController"
        })
          .when("/profile/:userId?", {
              templateUrl: "app/views/profile-page.html",
              controller: "profileController"
          })
         .when("/admin", {
             templateUrl: "app/views/admin.html",
             controller: "adminCtrl"
         })
         .when("/admin/:payments?", {
              templateUrl: "app/views/admin.html",
              controller: "adminCtrl"
         })
        .when("/my-dashboard", {
            templateUrl: "app/views/businessDashboard.html",
            controller: "buisnessDashboardCtrl"
        })
        .when("/change-password", {
            templateUrl: "app/views/changePassword.html",
            controller: "changePasswordCtrl"
        })
         .when("/message", {
             templateUrl: "app/views/messaging.html",
             controller: "messagingCtrl"
         })
         .when("/blog-detail/:blogTitle?", {
             templateUrl: "app/views/addBlogDetail2.html",
             controller: "blogDetailCtrl"
         })
         .when("/payment", {
             templateUrl: "app/views/payment.html",
             controller: "paymentCtrl"
         })
    .otherwise({
        redirect: '/'
    });
    //$locationProvider.html5Mode(true);

    //angular.element('head').append('<base href="/">');
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: true
    //});

$locationProvider.hashPrefix('');
}]);


app.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}]);

app.run(['$rootScope', '$location', function ($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if (next.templateUrl == "app/views/settings.html" || next.templateUrl == "app/views/businessDashboard.html" || next.templateUrl == "app/views/customerDashboard.html" || next.templateUrl == "app/views/post-task.html") {
            if ($rootScope.isLogin == false) {
                $('#promptLoginPopup').modal('show');
                $location.path('/');
            } 
        }         
    });
}])

app.controller("FAQCtrl",['commonService', function (commonService) {
    commonService.scrollToTop();
}]);