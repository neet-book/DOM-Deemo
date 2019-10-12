class CreateDanmu {
	constructor() {
		// 保存弹幕文字设置
		this.config = {
			color: "#10a6ea",
			size: "16px",
			spead: 3000
		};
		// 保存所以组件指针，通过这些指针可以获得绑定组件元素或判断是否绑定组件
		this.component = {
			screen: null,
			features: null,
			inputBox: null,
			danmuList:null
		};

		// 将元素与组件绑定的方法
		this.createFeatures = function (elem) {
			// 获取按钮元素
			var sizeBtn = elem.children["size"];
			var colorBtn = elem.children["color"];
			var speadBtn = elem.children["spead"];
			var clearScreen = elem.children["clear-screen"];

			// 绑定事件
			sizeBtn.onclick = this.sizeComponent;
			colorBtn.onclick = this.colorComponent;
			speadBtn.onclick = this.speadComponent;
			clearScreen.onclick = this.clearScreenComponent;
			// 将绑定情况传给控件属性
			this.component.features = {sizeBtn, colorBtn, speadBtn, clearScreen};

			// 创建各组件
				// 创建sizebox
			{
				var sizeBox = document.createElement("div");
				var htmlText =`
					<a href="#" id="addSize">+</a>
					<input type="text" id="font-Size">
					<a href="#" id="subSize">-</a>
					`;
			
				sizeBox.setAttribute("id", "sizeBox");
				sizeBox.innerHTML = htmlText;
				elem.appendChild(sizeBox);
			}

				// 创建颜色组件
			{

			}
		};
	}
	
	//组件功能实现
	sizeComponent() {
		
	}

	colorComponent() {

	}

	speadComponent() {

	}

	clearScreenComponent() {

	}

	

}

var features = document.getElementsByClassName("features")[0];
var danmu = new CreateDanmu();
danmu.createFeatures(features);

console.log(danmu);