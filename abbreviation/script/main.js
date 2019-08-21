//定义displayAddr函数创建定义列表，显示缩写词与说明
function displayAddr(){
	var abbreviation = document.getElementsByTagName("abbr");
	var dl = document.createElement("dl");
	var h2 = document.createElement("h2");
	h2.innerHTML = "Abbreviations"
	dl.appendChild(h2);
	if(abbreviation.length>0){		//判断页面中是否有abbr标签
		for(var i = 0;i<abbreviation.length;i++){
			//获取title属性值和abbr标签内容
			var title = abbreviation[i].getAttribute("title");
			var abbr = abbreviation[i].childNodes[0].nodeValue;
			var text = null;
			//创建定义列表标题标签
			var dt = document.createElement("dt");
			text = document.createTextNode(abbr);
			dt.appendChild(text);
			dl.appendChild(dt);
			//创建定义列表描述标签
			var dd = document.createElement("dd");
			text = document.createTextNode(title);
			dd.appendChild(text);
			dl.appendChild(dd);
		}
		// 将创建好的标题与描述标签添加进无需列表标签
		document.body.appendChild(dl);
	}else return false;		//如果没有abbr标签则返回false
}
displayAddr();

function displayCite(){
	var quote =document.getElementsByTagName("blockquote");
	if(!quote.length){		//检查页面是否有引用
		return false;
	}else{
		for(var i = 0;i<quote.length;i++){
			var source = quote[i].getAttribute("cite");
			if(typeof source === "undifind"){		//检查是否有cite属性
				continue;
			}else{		//创建cite
				var citeNode = document.createElement("cite"); 
				var text = document.createTextNode(source);
				var a = document.createElement("a");
				a.setAttribute("href",source);
				a.appendChild(text);
				citeNode.appendChild(a);
				//将创建好的cite添加进body子元素的最后面
				quote[i].appendChild(citeNode);
			}
			
		}
	}
	return true;
}
var result = displayCite();
console.log(result);


