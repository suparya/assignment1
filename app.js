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
        vm.edit = edit;
        vm.reset = reset;
        vm.isSubmit = false;
        vm.length = 0;
        activate();

        ////////////////

        function activate() {}

        function submitForm(stud) {
            if (!angular.isDefined(stud)) {
                return;
            } else {
                studentInfoSvc.addStudentInfo(stud).then(function(response) {
                    console.log(response);
                    reset();
                }).then(function(data) {
                    getAllStud();
                });
            }
        }

        function getAllStud() {
            studentInfoSvc.getAllStudentInfo().then(function(studentList) {
                vm.studentsData = studentList;
                vm.length = Object.keys(studentList).length;
            });
        }

        function reset() {
            vm.ui = {};
        }

        function edit(id, index) {
            studentInfoSvc.getStudentById(id).then(function(response) {
                vm.ui = angular.copy(response);
            });
        }

    }
})();
