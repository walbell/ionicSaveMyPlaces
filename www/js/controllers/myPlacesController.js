(function(){
	var myPlacesController = function ($scope, $window, venuesService, $window)
	{
		console.log("logging: "+$window.localStorage['myPlaces']);
		$scope.$watch(function () { return $window.localStorage['myPlaces']}, function (newVal, oldVal) {
			if (typeof newVal !== 'undefined') {
				$scope.myvenues = venuesService.getPlaces();
			}
		});
		
		$scope.deleteFavVenue=function(ven){
			console.log("Start deleting..");
			venuesService.deletePlace(ven);
		};

	};
	
	myPlacesController.$inject=['$scope','$window','venuesService','$window'];
	angular.module('starter').controller('myPlacesController',myPlacesController);

}());