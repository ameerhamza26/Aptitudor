angular.module('starter.controllers',[])

.controller('HomeCtrl', function($ionicPlatform, $scope, $state, $http) {
	

		$http.get("http://localhost:81/aptitudor/ServiceAptitudor.asmx/GetSubjects").then(function (response) {
      $scope.myData = response.data;
	  
  });
	$scope.notify= function(val){	
		alert(val);
	
	};
	
		
})
.controller('addCtrl', function($ionicPlatform, $scope, $state, $http) {
	
	$scope.value = false;
	$scope.buttonsVal = false;
	$scope.count = $scope.questions;
		$http.get("http://192.168.0.108:81/aptitudor/ServiceAptitudor.asmx/GetClass").then(function (response) {
      $scope.classData = response.data;
	 
	
	});
	
		$http.get("http://192.168.0.108:81/aptitudor/ServiceAptitudor.asmx/GetSubjects").then(function (response) {
      $scope.subjectData = response.data;
	 
	
	});
	  $scope.getClassId= function(val){	
		alert(val); 
  };
  
	$scope.create= function(){
		$http.get("http://192.168.0.108:81/aptitudor/ServiceAptitudor.asmx/GetChapters?subid="+subjectId+"&classid="+classId ).then(function (response) {
      
	  console.log(response);
	  $scope.chapterData = response.data;
	 
	
	});
		$scope.value = true;
		
		$scope.buttonsVal = true;
	};
	
	var classId= null;
	var subjectId = null;
	$scope.GetValue = function(c){
		classId =$scope.ddlclassData;
		subjectId = $scope.ddlsubjectData;
	}
		
})
.directive("addbuttonsbutton", function(){
	var templates = "<div class='list list-inset' addbuttons>";
	for (var i = 0; i<5; i++){
		templates += "<label class='item item-input'><input type='text' placeholder='Enter Question'></label><label class='item item-input'><input type='text' placeholder='Last Name'></label>";
	}
	templates+="</div>";
	return {
		template:templates
	}
})
directive("addbuttons", function($compile){
	return function($scope,element,attrs){
			element.bind('click',function(){
					for (var i=0; i< scope.count; scope++){
						angular.element(document.getElementById('space-for-buttons')).append($complie("<div class='list list-inset' addbuttons><label class='item item-input'><input type='text' placeholder='Enter Question'></label><label class='item item-input'><input type='text' placeholder='Last Name'></label></div>"
	));
					}
			});
	}
});
//http://localhost:81/aptitudor/ServiceAptitudor.asmx/GetSubjects