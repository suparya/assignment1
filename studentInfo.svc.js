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
                indexify: indexify
            },
            indexifiedList,
            studentList = [],
            idCount = 0;

        return service;

        ////////////////

        function getStudentInfo(studentdata) {
            if (!studentdata.id) {
                checkDuplicate(studentdata);
                if (studentdata.isDuplicate == true) {
                    alert("You have entered a duplicate email");
                    return $q.reject(studentdata);
                } else {
                    idCount += 1;
                    studentdata.id = idCount;
                    studentList.push(studentdata);
                    indexifiedList = indexify(studentList);
                }
            } else {
                indexifiedList[studentdata.id] = studentdata;
            }
            return $q.when(studentdata);
        }

        function getAllStudentInfo() {
            return $q.when(indexifiedList);
        }

        function getStudentById(id) {
            return $q.when(indexifiedList[id]);
        }

        function checkDuplicate(obj) {
            angular.forEach(studentList, function(stud) {
                if (stud.email == obj.email) {
                    obj.isDuplicate = true;
                }
            });
        }

        function indexify(arr) {
            var obj = {};
            arr.forEach(function(value, key){
                obj[value.id] = value;
            });
            return obj;
        }
    }
})();
