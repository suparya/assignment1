'use strict';
(function() {

    angular
        .module('studentInfoApp')
        .controller('AppCtrl', AppCtrl);

    // Controller.$inject = ['dependencies'];

    /* @ngInject */
    function AppCtrl(studentInfoSvc) {
        var vm = this;
        vm.title = 'Controller';
        var vm = this;
        vm.ui = {};
        vm.departments = [{
            id: 1,
            name: "Physics"
        }, {
            id: 2,
            name: "Chemistry"
        }, {
            id: 3,
            name: "Mathematics"
        }, {
            id: 4,
            name: "english"
        }];
        vm.sections = [{
            id: 1,
            name: "A"
        }, {
            id: 2,
            name: "B"
        }, {
            id: 3,
            name: "C"
        }];
        vm.submitForm = submitForm;
        vm.studentsData = [];
        activate();

        ////////////////

        function activate() {}

        function submitForm(stud) {
            console.log(stud);
            studentInfoSvc.getStudentInfo(stud, vm.studentsData).then(function(studentList) {
                console.log(studentList);
                reset();
            });

        }

        function reset() {
            vm.ui = {};
        }

    }
})();
