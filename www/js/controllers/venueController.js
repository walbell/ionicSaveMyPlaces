(function (){

	var venueController = function ($scope, venuesService, venue, $ionicPopup){		
		$scope.venue = venue;
		
		// An alert dialog
		 $scope.showAlert = function() {
		   var alertPopup = $ionicPopup.alert({
			 title: 'Added to favorites!'			   });
		   alertPopup.then(function(res) {
			 console.log('Thank you for not eating my delicious ice cream cone');
		   });
		 };
		
		$scope.savePlace=function(ven){
			console.log("Saving from controller");
			venuesService.savePlace(ven);
			var v = venuesService.getPlaces();
			console.log(v);
			$scope.showAlert();
		};
	}
	
	//    injecting the scope
    venueController.$inject=['$scope','venuesService','venue','$ionicPopup'];

	//    assigning the controller to the module
    angular.module('starter').controller('venueController',venueController);
} ());