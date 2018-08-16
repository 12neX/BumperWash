angular.module('enrollCtrl',[])

.controller('enrollCtrl',['$scope','$http',function($scope,$http){
	var app = this;
		

	$(document).ready(function(){


//Enroll now form
        $("#loader1").hide();
        $("#success-alert1").hide();
        $("#failure-alert1").hide();
        //route to send data from contact form
        app.enrollUser= function(enrollData){
            console.log(this.enrollData);
            $("#loader1").show();
            $http.post('/api/enroll', this.enrollData).then(function(response){
                console.log(response);
                $('#enrollform').trigger("reset");
                $("#loader1").hide();
                $("#success-alert1").fadeTo(2000, 500).slideUp(500, function(){
                $("#success-alert1").slideUp(500);
            });   
            },function(response){
                console.log(response);
                $('#enrollform').trigger("reset");
                $("#loader1").hide();
                $("#failure-alert1").fadeTo(2000, 500).slideUp(500, function(){
                $("#failure-alert1").slideUp(500);
            });
            }
        )};
 	});

}]);
		 