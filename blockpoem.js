function getXhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}


function makeGETRequest(url){
	const xhr = getXhr();
	return new Promise((resolve , reject) => {
		xhr.onreadychangestate = function(){
			if (xhr.readyState !== 4) return;

			if(xhr.status === 2) {
				resolve(JSON.parse(xhr.responseText))
			}else{
				reject("error")
			}
		};

		xhr.open("GET" , url);
		xhr.send();
	})
}

