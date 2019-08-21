function displayAddr(){
	var abbreviation = document.getElementsByTagName("abbr");
	var dl = document.createElement("dl");
	if(abbreviation.length>0){
		for(var i = 0;i<abbreviation.length;i++){

			var title = abbreviation[i].getAttribute("title");
			var abbr = abbreviation[i].childNodes[0].nodeValue;
			var text = null;

			var dt = document.createElement("dt");
			text = document.createTextNode(abbr);
			dt.appendChild(text);
			dl.appendChild(dt);
			
			var dd = document.createElement("dd");
			text = document.createTextNode(title);
			dd.appendChild(text);
			dl.appendChild(dd);
		}
		document.body.appendChild(dl);
	}else return false;
}
	
displayAddr();

