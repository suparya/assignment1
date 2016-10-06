(function() {
    'use strict';

    angular
        .module('studentInfoApp')
        .factory('studentInfoSvc', studentInfoSvc);


    /* @ngInject */
    function studentInfoSvc($q) {
        var service = {
                addStudentInfo: getStudentInfo,
                getAllStudentInfo: getAllStudentInfo,
                getStudentById: getStudentById,
                removeStudById: removeStudById
            },
            studentList = [],
            idCount = 0;

        return service;

        ////////////////

        function getStudentInfo(studentdata) {
            checkDuplicate(studentdata);
            if (studentdata.isDuplicate == true) {
                alert("You have entered a duplicate email");
                return $q.reject(studentdata);
            } else {
                idCount += 1;
                studentdata.id = idCount;
                studentList.push(studentdata);
                console.log(JSON.stringify(studentList));
                return $q.when(studentdata);
            }
        }

        function getAllStudentInfo() {
            return $q.when(studentList);
        }

        function getStudentById(id) {
            var student = studentList.filter(function(obj) {
                return obj.id == id;
            });
            console.log(student);
            return $q.when(student);
        }

        function checkDuplicate(obj) {
            angular.forEach(studentList, function(stud) {
                if (stud.email == obj.email) {
                    obj.isDuplicate = true;
                }

            });
        }

        function removeStudById(id) {

        }
    }
})();
