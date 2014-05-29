// http://www.thinkful.com/courses/ANG-001/unit/1/lesson/3/assignment/3
// http://www.thinkful.com/courses/ANG-001/unit/1/lesson/3/assignment/6
angular.module( 'madLibs', [] )

// handle form updates and submission
.controller( 'madLibsFormController', function( $scope, $attrs, $rootScope ) {
	$scope.data = {
		gender: 'Female',
		protoganist: 'Sue',
		jobTitle: 'Teacher',
		tediousTask: 'playground duty',
		dirtyTask: 'math',
		uselessSkill: '‘pity da foo’',
		obnoxiousCelebrity: 'Mr. T',
		adjective: 'foo’ pitying',
		hugeNumber: 1000
	};
	$scope.view = { inputMode: true };

	// handle submission
	$scope.submit = function() {
		// check data is valid
		$scope.view.inputMode = false;
		// tell the story controller
		$rootScope.$broadcast( 'displayData', $scope.data );
	};


	// reset form
	$scope.$on( 'newMadLib', function() {
		$scope.view.inputMode = true;
	});
})


// update story
.controller( 'madLibsStoryController', function( $scope, $attrs, $rootScope ) {
	// reset story and show the form
	$scope.reset = function() {
		$scope.view = { show: false };
		$rootScope.$broadcast( 'newMadLib' );
		$scope.madLib = {};
	};

	// init
	$scope.reset();

	// update the story
	$scope.$on( 'displayData', function( event, data ) {
		$scope.madLib = data;
		$scope.view.show = true;
	});
});
