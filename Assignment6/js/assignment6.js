// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function(){
	makeRequest(1);
}

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	
	var url = "https://reqres.in/api/users?page=" + pageNum;


	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var table = document.getElementById("data");
			table.innerHTML = "";
			for(var i = 0; i < 3; ++i){
				var tr = document.createElement("tr");
				var td = document.createElement("td");
				var data = document.createTextNode(jsData.data[i].id);
				td.appendChild(data);
				tr.appendChild(td);
				var td1 = document.createElement("td");
				var data1= document.createTextNode(jsData.data[i].first_name);
				td1.appendChild(data1);
				tr.appendChild(td1);
				var td2 = document.createElement("td");
				var data2 = document.createTextNode(jsData.data[i].last_name);
				td2.appendChild(data2);
				tr.appendChild(td2);
				var td3 = document.createElement("td");
				var img = document.createElement("img");
				img.src = jsData.data[i].avatar;
				td3.appendChild(img);
				tr.appendChild(td3);
				table.appendChild(tr);
			}


		} else {
			console.log('There was a problem with the request.');
		}
	}
}	