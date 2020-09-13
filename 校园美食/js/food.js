// JavaScript Document
"use strict";
var arrstr=new Array(14);

arrstr[0]="<strong>哈尔滨红肠</strong></p><p></p><p>哈尔滨红肠，是由外国人传进来的。与香肠相比，不油腻而易嚼，带有异国风味，非常有特色。</p>";
arrstr[1]="<strong>熏五香大马哈鱼</strong></p><p></p><p>大马哈鱼是黑龙江省抚远地区的特产。菜品色泽红润，滋味鲜美，回味无穷。</p>";
arrstr[2]="<strong>锅包肉</strong></p><p>锅包肉是黑龙江的一道名菜。成菜色泽金黄，外酥里嫩，口味酸甜，让人吃了一次就再也忘不了。</p>";
arrstr[3]="<strong>大庆扒鸡</strong></p><p></p><p>大庆扒鸡，是大庆的特色风味美食。味清香四溢，滑嫩爽口，是典型的黑色食品与绿色食品一体化的代表作。</p>";
arrstr[4]="<strong>溜肉段</strong></p><p></p><p>溜肉段是一道美味佳肴，属于家常菜，特点为外酥里嫩、味香可口，是素食者和保健者的最佳菜肴。</p>";
arrstr[5]="<strong>烤冷面</strong></p><p></p><p>烤泠面，有碳烤、铁板烤和油炸三种。味道松软可口，酱香扑鼻，吃起来很劲道，鲜辣醇香。</p>";
arrstr[6]="<strong>东北大拉皮</strong></p><p></p><p>东北大拉皮是东北的知名小吃，以劲柔爽口，味道鲜美而受东北人喜爱";
arrstr[7]="<strong>鸡西冷面</strong></p><p></p><p>冷面是朝鲜族的传统食品。在鸡西经演变后，溶入了东北人饮食口味，具有浓郁的地方风味。</p>";
arrstr[8]="<strong>杀猪菜</strong></p><p></p><p>杀猪菜，原本是东北农村每年接近年关杀年猪时所吃的一种炖菜。肉嫩汤鲜，肥而不腻，开胃解馋。</p>";
arrstr[9]="<strong>红烧大马哈鱼</strong></p><p></p><p>红烧大马哈鱼，黑龙江的特色菜肴。做这道菜时用冰糖代替盐，便于提鲜和中和鱼本身的咸味，也利于收汁。</p>";
arrstr[10]="<strong>扒猪脸</strong></p><p></p><p>扒猪脸俗称扒猪头，是黑龙江省齐齐哈尔市的汉族传统名菜。此菜味道独特，香而不腻，入口甜鲜。</p>";
arrstr[11]="<strong>小鸡炖蘑菇</strong></p><p></p><p>小鸡炖蘑菇是广为人知的东北名菜，蘑菇采用野生榛蘑，可以最大程度衬托出鸡肉的鲜香，名副其实的山珍野味。</p>";
arrstr[12]="<strong>猪肉炖粉条</strong></p><p></p><p>猪肉炖粉条是一道东北名菜，粉条吸取了肉的香味，而肉也变得肥而不腻，最朴实的菜却是最难忘的味道。</p>";
arrstr[13]="<strong>镜泊湖鲤鱼丝</strong></p><p></p><p>镜泊鲤鱼丝是牡丹江湖畔传统佳肴，制作精细、考究。以嫩脆鲜香、滑爽适口而闻名。</p>";

function fun1(){
	var fill=document.getElementsByClassName("fill");
	
	
	fill[0].onmouseover = function(){
			fill[0].style.opacity=0.4;
			fill[0].innerHTML=arrstr[0];
		};
	fill[0].onmouseout = function(){
			fill[0].style.opacity=0;
		};
	
	
	
	
	fill[1].onmouseover = function(){
			fill[1].style.opacity=0.4;
			fill[1].innerHTML=arrstr[1];
		};
	fill[1].onmouseout = function(){
			fill[1].style.opacity=0;
		};
	
	
	
	
	fill[2].onmouseover = function(){
			fill[2].style.opacity=0.4;
			fill[2].innerHTML=arrstr[2];
		};
	fill[2].onmouseout = function(){
			fill[2].style.opacity=0;
		};
	
	
	
	fill[3].onmouseover = function(){
			fill[3].style.opacity=0.4;
			fill[3].innerHTML=arrstr[3];
		};
	fill[3].onmouseout = function(){
			fill[3].style.opacity=0;
		};
	
	
	
	fill[4].onmouseover = function(){
			fill[4].style.opacity=0.4;
			fill[4].innerHTML=arrstr[4];
		};
	fill[4].onmouseout = function(){
			fill[4].style.opacity=0;
		};
	
	
	
	fill[5].onmouseover = function(){
			fill[5].style.opacity=0.4;
			fill[5].innerHTML=arrstr[5];
		};
	fill[5].onmouseout = function(){
			fill[5].style.opacity=0;
		};
	
	
	
	fill[6].onmouseover = function(){
			fill[6].style.opacity=0.4;
			fill[6].innerHTML=arrstr[6];
		};
	fill[6].onmouseout = function(){
			fill[6].style.opacity=0;
		};
	
	
	
	fill[7].onmouseover = function(){
			fill[7].style.opacity=0.4;
			fill[7].innerHTML=arrstr[7];
		};
	fill[7].onmouseout = function(){
			fill[7].style.opacity=0;
		};
	
	
	
	fill[8].onmouseover = function(){
			fill[8].style.opacity=0.4;
			fill[8].innerHTML=arrstr[8];
		};
	fill[8].onmouseout = function(){
			fill[8].style.opacity=0;
		};
	
	
	
	fill[9].onmouseover = function(){
			fill[9].style.opacity=0.4;
			fill[9].innerHTML=arrstr[9];
		};
	fill[9].onmouseout = function(){
			fill[9].style.opacity=0;
		};
	
	
	
	fill[10].onmouseover = function(){
			fill[10].style.opacity=0.4;
			fill[10].innerHTML=arrstr[10];
		};
	fill[10].onmouseout = function(){
			fill[10].style.opacity=0;
		};
	
	
	
	fill[11].onmouseover = function(){
			fill[11].style.opacity=0.4;
			fill[11].innerHTML=arrstr[11];
		};
	fill[11].onmouseout = function(){
			fill[11].style.opacity=0;
		};
	
	
	
	fill[12].onmouseover = function(){
			fill[12].style.opacity=0.4;
			fill[12].innerHTML=arrstr[12];
		};
	fill[12].onmouseout = function(){
			fill[12].style.opacity=0;
		};
	
	
	
	fill[13].onmouseover = function(){
			fill[13].style.opacity=0.4;
			fill[13].innerHTML=arrstr[13];
		};
	fill[13].onmouseout = function(){
			fill[13].style.opacity=0;
		};
	
	
}
window.onload=fun1;