angular.module('appointer.services', [])
  .factory('CalendarService', ['$http',
    function ($http) {
      var model = {};

      model.getCalendar = function (id, callback) {
        $http.get('calendar/'+id).success(callback);
      };

      model.createAppointment = function (appointment, callback) {
        $http.post('create-appointment', appointment).success(callback);
      };

      model.rescheduleAppointment = function (appointment, callback) {
        $http.post('reschedule-appointment', appointment).success(callback);
      };

      return model;
    }]);