describe("Routes test", function() {
	//Mock our module in our test
	beforeEach(module('starter'));

	var location, route, rootScope;
	beforeEach(inject(
		function(_$location_, _$route_, _$rootScope_, _$state_) {
		location=_$location_;
		route= _$route_;
		rootScope=_$rootScope_;
		state=_$state_
	}));

	describe("index route", function() {
		beforeEach(inject(function($httpBackend) {
$httpBackend.when('GET', /.*/).respond('');
		}));
		
		it("should go to Location Page when going to /", function() {
		location.path("/");
		rootScope.$digest(); //call the digest loop
		debugger;
//		expect(route.current.controller).toBe('locationController');
			
		rootScope.$apply(function(){
       		state.go("location");
     	});
     	expect(state.current.name).toEqual("");
		
		});
	});

	
	
	
});