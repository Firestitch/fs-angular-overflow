
(function () {
    'use strict';

    angular.module('fs-angular-overflow',[])
    .directive('fsOverflow', function($location) {
        return {
            templateUrl: 'views/directives/overflow.html',
            restrict: 'E',
            transclude: true,
            scope: {
            	hasMore: '=?fsMore'
            },
            link: function($scope, element, attrs, ctrl, $transclude) {

            	$scope.hasMore = $scope.hasMore===undefined ? true : $scope.hasMore;

            	if($scope.hasMore) {
					element.addClass('has-more');
            	}

            	$scope.moreClick = function() {
            		$scope.more = !$scope.more;

            		if($scope.more) {
            			element.addClass('show');
            		} else {
            			element.removeClass('show');
            		}
            	}
            }
        };
    });
})();

angular.module('fs-angular-overflow').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/overflow.html',
    "<span class=\"fs-overflow-wrap\" ng-transclude></span><a href ng-show=\"hasMore\" ng-click=\"moreClick()\" class=\"more-toggle\" ng-style=\"moreStyle\">{{ more ? 'less' : 'more' }}</a>"
  );

}]);
