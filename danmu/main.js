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
				var sizeText =`
					<a href="#" id="addSize">+</a>
					<input type="text" id="font-Size">
					<a href="#" id="subSize">-</a>
					`;
			
				sizeBox.setAttribute("id", "sizeBox");
				sizeBox.innerHTML = sizeText;
				elem.appendChild(sizeBox);
			}

				// 创建颜色组件
			{	var colorBox = document.createElement("div");
				var colorText = `<form>
						<input type="radio" id="black" name="colorSelection" value="#2f3542"><label for="black">黑色</label>
						<input type="radio" id="red" name="colorSelection" value="#ff4757"><label for="red">红色</label>
						<input type="radio" id="green" name="colorSelection" value="#2ed573"><label for="green">绿色</label><br>
						<input type="radio" id="yellow" name="colorSelection" value="#eccc68"><label for="yellow">黄色</label>
						<input type="radio" id="white" name="colorSelection" value="#ffffff"><label for="white">白色</label>
						<input type="radio" id="purple" name="colorSelection" value="#B33771"><label for="purple">紫色</label>
					</form>`;

				colorBox.setAttribute("id", "colro-Set");
				colorBox.innerHTML = colorText;
				elem.appendChild(colorBox);
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

