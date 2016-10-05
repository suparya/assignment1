(function() {
    'use strict';

    angular
        .module('studentInfoApp')
        .factory('studentInfoSvc', studentInfoSvc);


    /* @ngInject */
    function studentInfoSvc($q) {
        var service = {
            getStudentInfo: getStudentInfo
        };
        return service;

        ////////////////

        function getStudentInfo(studentdata, studentList) {
            studentList.push(studentdata);
            console.log(JSON.stringify(studentList));
            return $q.when(studentList);
        }
    }
})();
