'use strict';
(function(){
    var venuesService= function ($http,$window) {
		
		var venues={};
		var position={};
		var query={};
		
		var places = [];
		var v={"name":"CIao ciAO","photoURL":"https://irs2.4sqi.net/img/general/300x300/24394884_JplxTxtXpVlLZUq4lwiBrdNcC0hix4u7b54wAvBtPH8.jpg","rating":7}
				
		places.push(v)
		
		return{
			venues : function() {
					console.log(position);
				
					
				
					var latitude = position.latitude;
					var longitude = position.longitude;
					var url='http://ec2-54-189-67-148.us-west-2.compute.amazonaws.com:9900/venues?q_text=%23'+query+'&lon='+position.longitude+'&lat='+position.latitude+'&callback=JSON_CALLBACK;'
					
					return $http.jsonp(url).success(function(data){
//        			console.log(data);
					if (data.length>0)
					{
						for (var i=0; i<data.results.length; i++)
						{
							if (data.results[i].featuredPhotos)
							{
								data.results[i].photoURL=data.results[i].featuredPhotos.items[0].prefix+"300x300"+data.results[i].featuredPhotos.items[0].suffix;
								data.results[i].bigPhotoURL=data.results[i].featuredPhotos.items[0].prefix+"400x400"+data.results[i].featuredPhotos.items[0].suffix;
							}
						}		
						venues=data.results;
					}
						venues={};
    				});
					},
			getVenue: function(index) {
				
				  return venues[index];
				},
			savePosition: function (pos){
				console.log("Saving position");
				position=pos;
			},
			checkPosition: function(){
				console.log("Checking position");
				if (position.latitude)
					return true;
				else
					return false;
			},
			saveQuery: function (q){
			    console.log("Saving query");
				query=q;
			},
			savePlace: function (ven){
				console.log("Saving place");
				console.log(ven);
				
				function containsObject(obj, list) {
					var i;
					for (i = 0; i < list.length; i++) {
						if (list[i].id === obj.id) {
							return true;
						}
					}

					return false;
				}
				
				var myPlaces= JSON.parse($window.localStorage['myPlaces'] || '[]');
				
				if (!(containsObject(ven, myPlaces))){
					myPlaces.push(ven);
					$window.localStorage['myPlaces']=JSON.stringify(myPlaces);
				}
				else console.log("Already pushed");
				
			},
			getPlaces: function (){
				var places=JSON.parse($window.localStorage['myPlaces'] || '[]')				
				return places;
			},
			deletePlace: function (p){
				var myPlaces= JSON.parse($window.localStorage['myPlaces'] || '[]');
				
				var i;
				var index=-1;
				for (i=0; i<myPlaces.length; i++)
				{
					if (p.id==myPlaces[i].id)
					{
						console.log("da eliminare "+p.name);
						index=i;
						
					}
				}
				
				if (index!=-1)
				{
					myPlaces.splice(index, 1);
					$window.localStorage['myPlaces']=JSON.stringify(myPlaces);
				}
			},
			
			}
                
    }
    
    angular.module('starter').factory('venuesService',['$http','$window',venuesService]);
}());