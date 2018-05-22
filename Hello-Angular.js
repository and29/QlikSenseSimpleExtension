define( [
		'jquery',
		'./properties',
		'./initialproperties',
		'text!./template.ng.html'
		,'text!./styleSheet.css'
	],
	function ($,  props, initProps, ngTemplate, styleSheet 
		) {
		'use strict';
			var paintFct = function paint($element, layout){
				console.log('paint:', this.$scope, layout);
				//angular.element(document.getElementById('myCtrl')).scope().myStyleFunct(layout)
				this.$scope.myStyle=this.$scope.myStyleFunct(layout)
				



				};
		return {
			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			paint: paintFct,
			controller: ['$scope', function ( $scope ) {
				$scope.myTitle = 'This is my AngularJS table';
				$( "<style>" ).html( styleSheet ).appendTo( "head" );
				
				$scope.myStyleFunct= function(layout){
					var myStyle={};

					if(layout.customCSS.length>0 ){
						var customCssDec= jQuery.parseJSON( layout.customCSS );
						myStyle = customCssDec !== 'undefined' && customCssDec != null ? customCssDec : {};
					}
					myStyle["box-sizing"]="border-box";
					if(layout.boxWidth.length>0){
						myStyle["width"]=layout.boxWidth;
					}
					if(layout.boxHeight.length>0){ myStyle["height"]= layout.boxHeight};
					if(layout.boderProp.length>0){ myStyle["border"]= layout.boderProp};
					if(layout.boderRadiusProp.length>0){ myStyle["border-radius"]=layout.boderRadiusProp};

					
					return myStyle

				}
				$scope.selectToggle= function(id){
					console.log("I've been called", id);
					this.backendApi.selectValues( 0, [id], true);
					/*this.classList.toggle("selected");*/
				}
				$scope.myStyle = $scope.myStyleFunct($scope.layout);


				console.log('layout', $scope.layout);
				console.log('myStyle:',$scope.myStyle);

}]
		};}
	)
