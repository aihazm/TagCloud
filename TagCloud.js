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
			}
		},
		definition : properties,
		snapshot : {
			canTakeSnapshot : true
		},
		controller : ['$scope', function($scope) {
			$scope.getFontsize = function(){
				var max, min = null;
				$scope.layout.qHyperCube.qDataPages[0].qMatrix.forEach(function(el){
					max = Math.max(max, el[1].qNum);
					min = Math.min(min, el[1].qNum);
				});
				console.log(max,min);
				//Math.max(maxVal, measure.qNum);
			};
			$scope.getFontsize();
		}]

	};

});
