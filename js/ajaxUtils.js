(function (global) {
	
	var ajaxUtils = {};

	ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJSON) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			handleResponse(request,responseHandler,isJSON);
		}
		request.open("GET",requestUrl,true);
		request.send(null);
	};

	function handleResponse(request, responseHandler, isJSON) {
		if (request.readyState == 4 && request.status == 200) {
			if(isJSON == undefined) {
				isJSON = true;
			}
			if (isJSON) {
				responseHandler(JSON.parse(request.responseText));
			}else {
				responseHandler(request.responseText);
			}
		}
	}

	global.$ajaxUtils = ajaxUtils;

})(window);