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
                getStudentById: getStudentById
            },
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
                    console.log(JSON.stringify(studentList));
                }
            } else {
                // let result1 = studentList.map(function(val, key,result) {
                //     return result[val.id] = val;
                // });
                // alert(JSON.stringify(result1));

                // var obj = studentList.find(function(obj) {
                //     return obj.id == studentdata.id;
                // });
                // console.log(JSON.stringify(obj));

                // angular.forEach(studentList, function(obj) {
                //     if (obj.id == studentdata.id) {
                //         obj = studentdata;
                //     }
                // });
            }
            return $q.when(studentdata);
        }

        function getAllStudentInfo() {
            return $q.when(studentList.slice());
        }

        function getStudentById(id) {
            return $q.when(indexify(studentList)[id]);
        }

        function checkDuplicate(obj) {
            angular.forEach(studentList, function(stud) {
                if (stud.email == obj.email) {
                    obj.isDuplicate = true;
                }
            });
        }

        function indexify(arr) {
            let obj = {};
            arr.forEach((value, key) => {
                obj[value.id] = value;
            });
            return obj;
        }
    }
})();
