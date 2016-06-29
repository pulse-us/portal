(function() {
    'use strict';

    angular
        .module('portal.main')
        .directive('aiAcfEntry', aiAcfEntry);

    /** @ngInject */
    function aiAcfEntry() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/main/components/acf_entry/acf_entry.html',
            scope: {},
            controller: AcfEntryController,
            controllerAs: 'vm',
            bindToController: {}
        };

        return directive;

        /** @ngInject */
        function AcfEntryController($log, commonService) {
            var vm = this;

            vm.acfSubmit = acfSubmit;
            vm.getAcfs = getAcfs;

            activate();

            ////////////////////////////////////////////////////////////////////

            function activate () {
                vm.getAcfs();
            }

            function acfSubmit () {
                if (vm.createNewAcf) {
/*                    commonService.createAcf(vm.newAcf).then(function (response) {
                        $log.debug(response);
                        commonService.setAcf(response);
                    });
                    */
                    commonService.createAcf(vm.newAcf).then(function (response) {
                        commonService.setAcf(response);
                        $log.debug('response is', response);
                    });
                } else {
                    if (vm.selectAcf) {
                        commonService.setAcf(vm.selectAcf);
                    }
                }
            }

            function getAcfs () {
                commonService.getAcfs().then(function (response) {
                    vm.acfs = response.acfs;
                    vm.createNewAcf = (!vm.acfs || !vm.acfs.length > 0);
                });
            }
        }
    }
})();