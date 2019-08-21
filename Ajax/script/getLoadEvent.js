function addLoadEvent( fun ){
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