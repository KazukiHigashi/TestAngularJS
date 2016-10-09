/// <reference path="../../../typings/index.d.ts"/>

class HelloController
{
    disabled: boolean = false;

    static $inject = [
        "$rootScope",
        "processNumber",
        "$scope"
    ];

    constructor(
        public $rootScope: ng.IRootScopeService,
        public num : processNumber,
        $scope: ng.IScope
    )
    {
        $scope.$on("ComponentDisabled", () => { this.disabled = true; });
        $scope.$on("ComponentEnabled", () => { this.disabled = false; });
    }

    get(): number
    {
        return this.num.get();
    }
}
