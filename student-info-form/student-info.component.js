(function() {
    'use strict';

    angular
        .module('studentInfoApp', [])
        .component('studentInfo', {
            templateUrl: 'student-info-form/student-info.tpl.html',
            controller: StudentInfoCtrl
        });

    function StudentInfoCtrl() {
        var vm = this;
        // vm.submitForm = function(stud) {
        //     vm.onSubmit({ stud: stud });
        // }
    }
})();

   // bindings: {
   //              dept: "=",
   //              section: "=",
   //              onSubmit: "&"
   //          },