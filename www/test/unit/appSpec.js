'use strict';
 
describe('locationController', function(){
    var scope;//we'll use this scope in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('starter'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('locationController', {$scope: scope});
    }));
    // tests start here
	it('should have variable text = "Hello World!"', function(){
        expect(scope.text).toBeDefined();
    });
});