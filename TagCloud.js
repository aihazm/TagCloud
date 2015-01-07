define(["jquery", "./TagCloud.properties", "text!./tagcloud.ng.html", "text!./tagcloud.css"], function($, properties, template, css) {
	'use strict';
	$("<style>").html(css).appendTo("head");
	return {
		template : template,
		initialProperties : {
			version : 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 2,
					qHeight : 50
				}]
			},
			fontSize : {
				min : 8,
				max : 24
			}
		},
		definition : properties,
		snapshot : {
			canTakeSnapshot : true
		},
		controller : ['$scope', function($scope) {
			var max=0, min = 0;
			var minFontSize = $scope.$parent.layout.fontSize.min, maxFontSize = $scope.$parent.layout.fontSize.max;
			$scope.layout.qHyperCube.qDataPages[0].qMatrix.forEach(function(el){					
				if ( el[1].qNum > max ) { 
					max = el[1].qNum;
				}
				if ( el[1].qNum < min ) { 
					min = el[1].qNum;
				}
			});
			var fontSteps = 100/(maxFontSize - minFontSize);
			$scope.getFontsize = function(val){				
				val = Math.round((val*100/max)*100)/100;
				val = minFontSize + ( Math.floor( val/ fontSteps ) );
				return val+'px';
			};
			$scope.sel = function($event) {
				if($scope.$parent.layout.selectionMode !== "NO") {
					if($event.target.hasAttribute('data-value')) {
						var value = parseInt($event.target.getAttribute("data-value"), 10), dim = 0;						
						$scope.backendApi.selectValues(dim, [value], true);
					}
				}
			};
		}]

	};

});
