(function() {
    'use strict';

    angular
        .module('studentInfoApp', [])
        .component('studentLists', {
            bindings: {
                studList: "="
            },
            tamplateUrl: 'student-info-form/student-list.tpl.html',
            controller: StudentListCtrl
        });

    function StudentListCtrl() {
        var vm = this;
        vm.studList = studList;
    }
})();
