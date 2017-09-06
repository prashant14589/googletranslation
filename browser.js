var textEl ,htmlEl , newTextArea ,reqUrl = 'https://translation.googleapis.com/language/translate/v2?key=your_key';
  var http = new XMLHttpRequest();
  
	// responsiveVoice.setDefaultVoice("Hindi Male"); 
	document.addEventListener("DOMContentLoaded", function(event) {
		textEl = document.getElementById("message").value;
		htmlEl = document.getElementById("html");
		newTextArea = document.getElementById("htmlTextArea");
 


  
  });
  
  function translateIn(){
	http = new XMLHttpRequest();
	textEl = document.getElementById("message").value;
	htmlEl = document.getElementById("html");
	http.open("POST", reqUrl, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			console.log(http.responseText);
			var jsonString = http.responseText;
			console.log(JSON.parse(jsonString));
			newTextArea.innerHTML = JSON.parse(jsonString).data.translations[0].translatedText;
			
			
	}
}
	http.send("q="+textEl+"&source=en&target=hi");  
  }
  function playVoice(){
	var convertedTextEl = document.getElementById("htmlTextArea").value;
	// responsiveVoice.speak(convertedTextEl, "Hindi Male", {pitch: 2,rate:1});
	responsiveVoice.speak(convertedTextEl, "Hindi Female", {rate:1});
	  
  }
  function pauseVoice(){
	responsiveVoice.pause();
  }
  function resume(){
	responsiveVoice.resume();  
  }

  