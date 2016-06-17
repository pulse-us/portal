(function() {
    'use strict';

    angular
        .module('portal')
        .directive('aiNavbar', aiNavbar);

    /** @ngInject */
    function aiNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {},
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: {
                active: '@'
            }
        };

        return directive;

        /** @ngInject */
        function NavbarController($log, commonService, AuthAPI) {
            var vm = this;

            vm.isAuthenticated = isAuthenticated;
            vm.getLoginEndpoint = getLoginEndpoint;
            vm.getUsername = getUsername;
            vm.login = login;
            vm.logout = logout;

            activate();

            ////////////////////////////////////////////////////////////////////

            function activate () {
                vm.login()
            }

            function isAuthenticated () {
                return commonService.isAuthenticated();
            }

            function getUsername () {
                return commonService.getUsername();
            }

            function getLoginEndpoint () {
                return AuthAPI;
            }

            function login () {
                commonService.login();
            }

            function logout () {
                commonService.logout();
            }
        }
    }
})();
