(function() {
    'use strict';

    angular
        .module('studentInfoApp', [])
        .component('studentComponent', {
            templateUrl: 'student-info-form/student-component.tpl.html',
            controller: StudentComponentCtrl
        });

    function StudentComponentCtrl() {
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
        vm.studentsData = [];
        // vm.submitForm = function(stud) {
        //     vm.studentsData.push(stud);
        //     console.log(vm.studentData)
        // }
    }
})();
