app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory) {
	$scope.auth = {
		email: "t@t.com",
		password: "123456"
	};

	let logMeIn = () => {
		AuthFactory.authenticate($scope.auth).then((userCreds) => {
			console.log("userCreds", userCreds);
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
			console.log("authenticate error", error);
		}).then((user) => {
			console.log("user", user);
			$rootScope.user = user;
			$location.url("/items/list");
		}).catch((error) => {
			console("getUser error", error);
		});
	};

	$scope.registerUser = () => {
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			console.log("didRegister", didRegister);
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", error);
		}).then((registerComplete) => {
			logMeIn();
			console.log("registerComplete", registerComplete);
		}).catch((error) => {
		console.log("addUser error", error);
		});
	};

	

	$scope.loginUser = () => {
		logMeIn();
	};
});