"use strict";

app.factory('userFactory', ['$http', function($http) {
    function UserFactory() {
        var self = this;

        this.login = function(user, callback) {
            console.log('arrived at factory with user:', user);
            $http.post('/login', user).then(function(returned_data) {
                if(typeof(callback) == 'function') {
                    if(returned_data.data) {
                        console.log('at factory here is the data', returned_data.data);
                        callback(returned_data.data);
                    }
                    else {
                        callback(returned_data.data);
                    };
                };
            });
        };
    };
    return new UserFactory();
}]);
