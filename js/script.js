$(
	function () {
		$("#button-top-right").blur(
			function (event) {
				var screen_width = window.innerWidth;
				if (screen_width < 768) {
					$("#collapsable-nav").collapse('hide');
				}
			}
		);
	}
);


(
	function(global) {

		var dm = {};

		var homeHTML = "snippets/home-snippet.html";

		var insertHTML = function (selector, html) {
			var targetElement = document.querySelector(selector);
			targetElement.innerHTML = html;
		};

		var showLoading = function (selector) {
			var html = "<div class='text-center'><img src='css/ajax-loader.gif'></div>";
			insertHTML(selector,html);
		};

		var activateMenuButton = function() {
			var classes = document.querySelector("#home-button").className;
			classes = classes.replace("active","");
			document.querySelector("#home-button").className = classes;
			document.querySelector("#menu-button").className += "active";
		}
		
		document.addEventListener("DOMContentLoaded",
			function (event) {
				showLoading("#main-content");
				$ajaxUtils.sendGetRequest(
					homeHTML,
					function(responseText) {
						document.querySelector("#main-content").innerHTML = responseText;
					},
					false
				);

				dm.loadMenuCategories = function(){
					showLoading("#main-content");
					activateMenuButton();
					$ajaxUtils.sendGetRequest(
						"snippets/menu-categories-snippet.html",
						function(responseText) {
							document.querySelector("#main-content").innerHTML = responseText;
						},
						false
					);
				};
			}
		);

		

		global.$dm = dm;
	}
)(window);