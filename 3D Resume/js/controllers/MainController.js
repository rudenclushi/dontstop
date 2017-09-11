app.controller('MainController', ['$scope', function($scope) { 
  $scope.basicinfo = {
	name: 'Michael Packard',
	
	}
  $scope.contactinfo = {
	phone: '857-413-0494',
	email: 'mike.c.packard@gmail.com'
	} 
  $scope.education = 
		{
			school: 'Georgetown University',
			location: 'Washington, D.C.',
			major: 'Economics',
			minor: 'Sociology and Business Administration',
			gpa: '3.71',
		}	
  $scope.experiences = 
	[
		{
			company: 'Georgetown University Economics Department',
			location: 'Washington, D.C.',
			title: 'Research Assistant',
			description1: 'Assist and support research on housing markets with statistical programming and proofreading',
			description2: 'description 2',
			description3: 'description 3'
		},
		{
			company: 'Innovo Consulting',
			location: 'Washington, D.C.',
			title: 'Project Manager',
			description1: 'Promoted to project manager, led a project team working on growth and marketing strategies',
			description2: 'Developed business model for a startup application seeking to end police misconduct',
			description3: 'Helped a Harvard graduate student plan to start a social impact bond intermediary'
		}
	]
}]);
