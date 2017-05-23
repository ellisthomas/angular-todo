app.controller("AuthCtrl", function($scope, AuthFactory, UserFactory) {
	$scope.auth = {};

	$scope.loginUser = () => {
	};

	$scope.registerUser = () => {
		//adding username
		//login
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			console.log("didRegister", didRegister);
			$scope.auth.uid = didRegister.uid;
			return UserFactory.getUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", didRegister);
		}).then((registerComplete) => {
			console.log("registerComplete", registerComplete);
		}).catch(error);
		console.log("addUser error", error);
	};
});