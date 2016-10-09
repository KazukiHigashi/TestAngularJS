/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="./controller.ts" />

class HelloDirective
{
    static getDDO()
    {
        return {
            restrict: "E",
            controller: HelloController,
            controllerAs: "$ctrl",
            scope: {},
            templateUrl: "./angularjs/components/Hello/view.html",
            replace: true
        };
    }
}

angular.module(APP_NAME).directive("hello",
    [
        HelloDirective.getDDO
    ]
);
