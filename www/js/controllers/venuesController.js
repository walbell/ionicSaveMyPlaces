(function (){

	var venuesController = function ($scope, venuesService, $ionicLoading, $stateParams){
//		console.log(venuesService.venues());
//		console.log("INSIDE VEN CON");
//		console.log($stateParams.position );
//		var position = $stateParams.position;
		
		

//		// Setup the loader
		  $ionicLoading.show();
  
		
		venuesService.venues().success(function(data){
			
//			console.log(data);
			
			if (data.results.length>0)
			{
			
				for (var i=0; i<data.results.length; i++)
				{
					if (data.results[i].featuredPhotos)
					{
						data.results[i].photoURL=data.results[i].featuredPhotos.items[0].prefix+"300x300"+data.results[i].featuredPhotos.items[0].suffix;
					}
				}

				$scope.venues = data.results;
			}
			$ionicLoading.hide();
   			}).
					error(function(data, status, headers, config) {
						$ionicLoading.hide();
						console.log("Error getting data from server");
						// called asynchronously if an error occurs
						// or server returns response with an error status.
					  });
	
	
	}
	
	//    injecting the scope
    venuesController.$inject=['$scope','venuesService','$ionicLoading','$stateParams'];

	//    assigning the controller to the module
    angular.module('starter').controller('venuesController',venuesController);
} ());