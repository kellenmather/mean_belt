"use strict";

app.controller('userController', ['$cookies', '$scope', '$routeParams', 'userFactory', '$location', function($cookies, $scope, $routeParams, userFactory, $location){
    var self = this;
    this.user = $cookies.getObject('user')

    this.login = function(){
        console.log('at controller going to factory');
        userFactory.login(self.user, function(res){
            if(res.err){
                self.errMsg = res.err;
            }
            else{
                $cookies.putObject('user', {'name': res.name, '_id': res._id})
                self.user = $cookies.getObject('user')
                console.log('returned from db with', self.user);
                $location.url('/dashboard');
            };
        });
    };

    this.logout = function() {
        $cookies.remove('user')
        $location.url('/');
    };

    if(!this.user){
        $location.url('/')
        console.log('not logged in');
        return;
    };
}]);
