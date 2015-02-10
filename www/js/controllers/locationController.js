(function(){
	var locationController=function($scope,$ionicLoading,$state, venuesService)
	{
		$scope.text="HELLO WORLD";
		$scope.loading=true;
		$ionicLoading.hide();
		
		$scope.showLoadingProperTimes = function() {
			$ionicLoading.show();
			$scope.loading=false;

		  };

		$scope.hideLoadingProperTimes = function() {
			//$ionicLoading.hide();
		  };
				
		$scope.getLocation=function(query)
		{
			
		

		$scope.showLoadingProperTimes();
			
//		console.log("QUery is"+query);
			

        navigator.geolocation.getCurrentPosition(function(pos) {
//			console.log(pos.coords.latitude+" "+pos.coords.longitude);
			
			var cur_pos={};
			cur_pos.latitude=pos.coords.latitude;
			cur_pos.longitude=pos.coords.longitude;
			
			venuesService.savePosition(cur_pos);
			venuesService.saveQuery(query);
			
			console.log(cur_pos);
			$state.go('app.explore.index',{position: "HELLO"});
//          	$state.go('app.explore.index');
			$ionicLoading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
		}
	}
	
	//    injecting the scope
    locationController.$inject=['$scope','$ionicLoading','$state','venuesService'];

	//    assigning the controller to the module
    angular.module('starter').controller('locationController',locationController);
}());