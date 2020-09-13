// JavaScript Document
"use strict";
var i=0;
var txtarr=new Array(8);
txtarr[0]='<strong>圣·索菲亚教堂</strong><br>高耸入云的金色十字架<br>与红砖绿顶相辉映,<br>显示出教堂主体<br>巍峨壮美的气势,<br>休闲椅、绿地环绕。<br>衬托出教堂广场的<br>表静谧安祥;<br>每到夜晚,<br>欧式庭院灯放出淡淡柔光<br>宛若一笼轻纱。';

txtarr[1]='<strong>中央大街</strong><br>欧洲风格满布中央大街的欧式建筑,<br>五步一典,十步一观。<br>在西方建筑史上几百年<br>才形成的建筑风格样式,<br>使得中央大街成为<br>远东最著名的街道。<br>欧洲最具魅力的近300年<br>文化发展史,<br>在中央大街上体现的淋漓尽致,<br>其涵盖历史的精深久远和<br>展示建筑艺术的博大精深,<br>为世上少见。';

txtarr[2]='<strong>冰雪大世界</strong><br>全园整体规划以<br>“盛世中华,腾飞龙江”为主题,<br>共分腾飞龙江、西部掠影、<br>盛世中华、春绿南疆、<br>龙腾虎跃、<br>欢乐之夜等六大景区,<br>设置景点、景观及活动2000余项。<br>其场面恢宏壮阔,<br>造型大气磅礴,景致优美绝伦<br>,如同一幅大型的冰雪史诗画卷<br>展现在世人面前。';

txtarr[3]='<strong>太阳岛</strong><br>太阳岛冰雪文化引人入胜,<br>冰雪游乐活动丰富多彩,<br>令人神往。<br>江上冰雪娱乐如火如荼,<br>滑冰橇、乘冰帆、<br>溜冰、打冰球,<br>人来人往,蔚为壮观;<br>闻名遐迩的哈尔滨雪雕游园会,<br>群众性的冰雕比赛会,<br>一年一度,相继展开,<br>雪雕塑,冰建筑,<br>冰雕塑,雪建筑,<br>千变万化,精彩纷呈。';

txtarr[4]='<strong>松花江</strong><br>松花江流域范围内山岭重叠,<br>满布原始森林,<br>蓄积在大兴安岭、小兴安岭.<br>在冬季部分夹带暖流的江面,<br>不断冒起团团蒸汽,<br>凝结在岸边的柳丝、<br>松叶上,形成一簇簇、<br>一串串晶莹似玉的冰花,<br>十里长堤顿时成了玲珑剔透、<br>玉树银枝的世界。<br>这就是闻名全国的树挂奇景。';

txtarr[5]='<strong>东北虎林园</strong><br>东北虎林园自然特色十分浓郁,<br>具有良好的生态旅游基础。<br>这里的空气质量优良,<br>到处散发着泥土和野草的芳香,<br>使人充分地享受与自然的融合,<br>是一处旅游、休闲、<br>渡假的理想之所。<br>东北虎林园以<br>它的野趣和迷人的魅力<br>吸引着海内外的游人慕名而来。';

txtarr[6]='<strong>哈尔滨文庙</strong><br>文庙庭院之内的园林，<br>也别具特色，<br>古松参天，灌木葱郁，<br>鸟语花香，环境清雅。<br>庭院里的古树树种繁多。<br>春天，园中的小桃红、<br>丁香、忍冬藤等灌木所开的<br>各种红色的、紫色的、<br>白色的花朵竞相开放，<br>加之林中莺歌燕舞，<br>满目春意盎然。';

txtarr[7]='<strong>亚布力滑雪度假区</strong><br>是由风车山庄、国家体委，<br>交通山庄，大青山滑雪场、<br>通信山庄，电力山庄，<br>云鼎山庄、雅旺斯、<br>好汉泊雪场，<br>以及农家院共同组成。<br>这里的极端最低<br>气温是-44℃，平均气温-10℃，<br>积雪期为170天，滑雪期近150天，<br>每年的11月中旬至次年3月下旬<br>是这里的最佳滑雪期。';

function btnext(){
	if(i===8){
		i=0;
	}
	i++;
	document.getElementById("img").src="img/"+i+".jpg";
	document.getElementById("txt").innerHTML=txtarr[i-1];
	if(i===8){
		i=0;
	}
}
function btlast(){
	if(i===0||i===1){
		i=9;
	}
	i--;
	document.getElementById("img").src="img/"+i+".jpg";
	document.getElementById("txt").innerHTML=txtarr[i-1];
	if(i===1){
		i=9;
	}
}
function fun10(){
	fun20();
	var long=700;
	var inter=setInterval(function(){
		document.getElementById("ff").style.width=long+"px";
//		alert(long);
		long-=8;
		if(long===-1){
			clearInterval(inter);	
		}
	},20);

}

var getOSAndBrowser = function () {  
            var os = navigator.platform;  
            var userAgent = navigator.userAgent;  
            var info = "";  
            var tempArray = "";  
            //判断浏览器版本  
            var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
            var isEdge = userAgent.toLowerCase().indexOf("edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
            var isIE11 = (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1);  
  
            if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {  
                tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);  
                info += tempArray[1] + tempArray[2];  
            } else if (isIE) {  
  
                var version = "";  
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
                reIE.test(userAgent);  
                var fIEVersion = parseFloat(RegExp["$1"]);  
                if (fIEVersion == 7)  
                { version = "IE7"; }  
                else if (fIEVersion == 8)  
                { version = "IE8"; }  
                else if (fIEVersion == 9)  
                { version = "IE9"; }  
                else if (fIEVersion == 10)  
                { version = "IE10"; }  
                else  
                { version = "0" }  
  
                info += version;  
  
            } else if (isEdge) {  
                info += "Edge";  
            } else if (isIE11) {  
                info += "IE11";  
            } else if (/[Cc]hrome\/\d+/.test(userAgent)) {  
                tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);  
                info += tempArray[1] + tempArray[2];  
            } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {  
                tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);  
                info += tempArray[3] + tempArray[1];  
            } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {  
                tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);  
                info += tempArray[1] + tempArray[2];  
            } else {  
                info += "unknown";  
            }  
            return info;  
        }
function fun20(){
	var str =getOSAndBrowser()+"";
	var patt=/IE[0-9]/;
	if(patt.test(str)){
		var txt = document.getElementById("txt");
		//document.getElementById('txt').style.backgroundColor='#ff0000';
		txt.style.background="linear-gradient(white,white)";
	}
}
window.onload=fun10;
