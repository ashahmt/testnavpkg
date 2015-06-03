(function () {
    'use strict';
    angular
        .module('mtapp.directives')
        .directive('mtNavigation', navigationMenu)
        .directive('onRenderLast', ['$timeout', bindPushMenu])

    function navigationMenu() {
        return {
            restrict: 'E',
            templateUrl: "/Content/MasterLayout/js/directives/mt-NavMenu/mt-navigation.html",
            scope: {
                menujson: "="
            },
            controller: function ($scope) {
                $scope.sideMenu = false;
                $scope.getTemplate = function (list) {
                    switch (list.type) {
                        case 'section':
                            return 'navigationsection';
                        case 'menu':
                            return 'navigationmenu';
                        case 'submenu':
                            return 'navigationsubmenu';
                    }
                }
            }
        }
    }
    function bindPushMenu($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (scope.$last) {
                    $timeout(function () {
                        angular.element(element.parents("div.navigationmenu")).multilevelpushmenu({
                            direction: 'ltr',
                            fullCollapse: true,
                            collapsed: true,
                            menuWidth: 300,
                            preventItemClick: false,
                            // Just for fun also changing the look of the menu
                            wrapperClass: 'mlpm_w',
                            menuInactiveClass: 'mlpm_inactive'
                        });
                    });
                }
            }
        }
    }

})();

