"use strict";
/// <reference path="../typings/index.d.ts"/>﻿
// The application module's namespace definition.
var APP_NAME = "TestProject";
angular.module(APP_NAME, []);
/// <reference path="../../../typings/index.d.ts"/>
var HelloController = (function () {
    function HelloController($rootScope, num, $scope) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.num = num;
        this.disabled = false;
        $scope.$on("ComponentDisabled", function () { _this.disabled = true; });
        $scope.$on("ComponentEnabled", function () { _this.disabled = false; });
    }
    HelloController.prototype.get = function () {
        return this.num.get();
    };
    HelloController.$inject = [
        "$rootScope",
        "processNumber",
        "$scope"
    ];
    return HelloController;
}());
/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="./controller.ts" />
var HelloDirective = (function () {
    function HelloDirective() {
    }
    HelloDirective.getDDO = function () {
        return {
            restrict: "E",
            controller: HelloController,
            controllerAs: "$ctrl",
            scope: {},
            templateUrl: "./angularjs/components/Hello/view.html",
            replace: true
        };
    };
    return HelloDirective;
}());
angular.module(APP_NAME).directive("hello", [
    HelloDirective.getDDO
]);
var processNumber = (function () {
    function processNumber() {
        this.count = 0;
    }
    processNumber.prototype.get = function () {
        return this.count++;
    };
    return processNumber;
}());
angular.module(APP_NAME).service("processNumber", processNumber);
