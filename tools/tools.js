//创建将新的相应函数添加进onload事件的函数
function addLodEvent( fun ){
	var loadfun = window.onload
	if(typeof window.onload === "function"){	//检查是否有绑定响应函
		window.onload = function(){		//有则绑定匿名函数，将已绑定函数和需要绑定函数添加进匿名函数内
			loadfun();
			fun();
		}
	}else{		//没有绑定则直接绑定新函数
		window.onload = fun;
	}
}
//创建向指定元素后面添加兄弟元素的函数
function insertAfter( newElement,targetElement ){		//targetElement:目标元素，newElement:要插入的元素
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){		//如果目标元素是最后一个元素则直接在父元素最后面插入新元素
		parent.appendChild(newElement);
	}else{		//目标元素不是最后一个则再目标元素的下一个兄弟节点前面插入新元素
		parent.indert(newElement,targetElement.nextSibling);
	}
}
//向指定元素添加新类名
function addClass(tag,newClass){
			var tagClass = tag.getAttribute("class");
			//检查是否有该类名,或已有类名是否相同
			if(!tagClass){
				tag.setAttribute("class",newClass);
			}else if(!tagClass == newClass){
				tag.setAttribute("class", tagClass + " " + newClass);
			}
		}