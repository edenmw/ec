var NemoCV = {

	random: function(e,t) {

		return Math.floor(Math.random()*(t-e+1)+e)},

	

	drawSkillsArc:function() {

		function o(e,t){t.node["on"+e]=function() {

			for(var n=0,r=t.events.length; n<r; n++)t.events[n].name == e&&t.events[n].f.call(t)}}function l() {

				var t={fill:"#228fbd",stroke:"none",transform:"t615 235"},

					n=e.path("M86.112,80.5 86.892,81.191 87.847,80.774 88.374,81.673 89.411,81.572 89.635,82.589 90.653,82.813 90.551,83.851 91.45,84.378 91.033,85.333 91.725,86.112 91.033,86.892 91.45,87.847 90.551,88.374 90.653,89.411 89.635,89.635 89.411,90.653 88.374,90.551 87.847,91.45 86.892,91.033 86.112,91.725 85.333,91.033 84.378,91.45 83.851,90.551 82.813,90.653 82.589,89.635 81.572,89.411 81.673,88.374 80.774,87.847 81.191,86.892 80.5,86.112 81.191,85.333 80.774,84.378 81.673,83.851 81.572,82.813 82.589,82.589 82.813,81.572 83.851,81.673 84.378,80.774 85.333,81.191 z").attr(t).animate({path:

							 "M86.112,0 98.071,10.609 112.723,4.214 120.818,18 136.728,16.446 140.167,32.057 155.778,35.497 154.224,51.406 168.011,59.501 161.616,74.154 172.225,86.112 161.616,98.071 168.011,112.723 154.224,120.818 155.778,136.728 140.167,140.167 136.728,155.778 120.818,154.224 112.723,168.011 98.071,161.616 86.112,172.225 74.154,161.616 59.501,168.011 51.406,154.224 35.497,155.778 32.057,140.167 16.446,136.728 18,120.818 4.214,112.723 10.609,98.071 0,86.112 10.609,74.154 4.214,59.501 18,51.406 16.446,35.497 32.057,32.057 35.497,16.446 51.406,18 59.501,4.214 74.154,10.609 z"},2e3,"bounce").hover(function() {this.animate({fill:"#005687",path:

							 "M86.112,-16 100.293,-3.42 117.667,-11.003 127.267,5.345 146.132,3.502 150.211,22.014 168.723,26.093 166.879,44.958 183.228,54.557 175.645,71.932 188.225,86.112 175.645,100.293 183.228,117.667 166.879,127.267 168.723,146.132 150.211,150.211 146.132,168.723 127.267,166.879 117.667,183.228 100.293,175.645 86.112,188.225 71.932,175.645 54.557,183.228 44.958,166.879 26.093,168.723 22.014,150.211 3.502,146.132 5.345,127.267 -11.003,117.667 -3.42,100.293 -16,86.112 -3.42,71.932 -11.003,54.557 5.345,44.958 3.502,26.093 22.014,22.014 26.093,3.502 44.958,5.345 54.557,-11.003 71.932,-3.42"},1e3,"bounce")},function(){this.animate({fill:"#228fbd",path:

							 "M86.112,0 98.071,10.609 112.723,4.214 120.818,18 136.728,16.446 140.167,32.057 155.778,35.497 154.224,51.406 168.011,59.501 161.616,74.154 172.225,86.112 161.616,98.071 168.011,112.723 154.224,120.818 155.778,136.728 140.167,140.167 136.728,155.778 120.818,154.224 112.723,168.011 98.071,161.616 86.112,172.225 74.154,161.616 59.501,168.011 51.406,154.224 35.497,155.778 32.057,140.167 16.446,136.728 18,120.818 4.214,112.723 10.609,98.071 0,86.112 10.609,74.154 4.214,59.501 18,51.406 16.446,35.497 32.057,32.057 35.497,16.446 51.406,18 59.501,4.214 74.154,10.609 z"},1e3,"bounce")});

			

			f.push(n),setTimeout(function() {

				var t = e.text(703,318,"20年以上\n金融保險、教育\n訓練及行銷經驗").attr({"font-size":18,fill:"#fff","font-family":s});

						 //{ 2 年 }\n前端开发经验

			f.push(t)},1e3)}

				var e=Raphael("skillsArc",960,500),

										//830

				t=73,

				n="金融證照\xa0/\n訓練\xa0/\xa0專長",

				//Skills

				r=250;



			e.circle(250,250,5).attr({stroke:"none",fill:"#193340"}).animate({r:85},1e3,">");

			

			var i=e.text(250,250,n).attr({font:"20px Hiragino Sans GB, Microsoft YaHei, sans-serif",fill:"#fff"}).toFront(),

				s="Hiragino Sans GB, Microsoft YaHei, sans-serif";

			

			e.customAttributes.arc=function(e,t,n) {

				var r=3.6*e,

					i=r==360?359.99:r,

					s=(90-i)*Math.PI/180,

					o=250+n*Math.cos(s),

					u=250-n*Math.sin(s),

					a=[["M",250,250-n],

					["A",n,n,0,+(i>180),1,o,u]];

					

					return{path:a,stroke:t}};



			var u=e.circle(701,70,5.5).attr({stroke:"none",fill:"#228fbd"}),

				a=e.path("M 702 70 L 702 70").attr({fill:"none",stroke:"#228fbd","stroke-width":1}).animate({path:"M701 70 L 701 250"},1e3,">",l),

				f=e.set();



			f.push(u),f.push(a);



	var c=[{kind:"金融證照",score:"90",color:"#97BE0D"},

		   {kind:"專業訓練",score:"80",color:"#D84F5F"},

		   {kind:"金融訓練",score:"70",color:"#88B8E6"},

		   {kind:"專長",score:"60",color:"#FEAE16"}],



		h=e.set(),

		p={"arc-金融證照":[[300,"考試院人身保險經紀人考試及格"],

								[300,"理財規劃人員資格壽險登錄資格"],

								[140,"外幣保單資格"],

								[160,"投資型保單資格"],

								[140,"產險登錄資格"],

								[140,"壽險登錄資格"]],

					 "arc-專業訓練":[[160,"生命線義工訓練"],

					 				[180,"訓練團體師資訓練"],

					 				[140,"組織管理研習"],

					 				[420,"靜宜大學管科所「人力資源管理」學分班研修"],

					 				[430,"跨世紀人力資源經理人/顧問師證照特訓班研修"],

					 				[440,"銘傳大學管科所「管理理論與實務」學分班研修"],

					 				[160,"管理心理學研修"],

					 				[140,"組織行為研修"],

					 				[140,"組織發展研修"]],

					 "arc-金融訓練":[[140,"組訓專員訓練"],

					 				[252,"文化大學第4期壽險研究班"],

					 				[365,"日本OLIS及壽險公會外勤經營管理研習"],

					 				[340,"美國(LIMRA)壽險行銷協會BMTC班"],

					 				[325,"美國(LIMRA)壽險行銷協會MSS班"],

					 				[291,"壽險公司MTW團隊經營研習會"],

					 				[287,"保險經紀人協會-保險法規概要"],

					 				[267,"保險經紀人協會-保險學概要"],

					 				[287,"保險經紀人協會-風險管理概要"]],

					 "arc-專長":[[140,"包括理財規劃"],

								[140,"人力資源管理"],

								[100,"教育訓練"],

								[100,"組織發展"],

								[200,"行銷管理及策略規劃"]]},d=30,v=520,m=100,g=v+10;

					 								//d=單體高度(30) v=整體寬度(550) m=整體高度(150) g=字前距離(10)



	setTimeout(function(){for(var u=0; u<c.length; u++) {

		var a=c[u],

			l=a.color,

			y=a.score,

			b=a.kind,

			w="arc-"+b.toLowerCase().replace("&","_");

			t+=30;



		var E=e.path().attr({arc:[y,l,t],"stroke-width":26});

			E.node.id=w, function(t,u,a) {

				o("mouseover",E),

				o("mouseout",E),

				E.mouseover(function() {

					this.animate({"stroke-width":50,opacity:.75},1e3,"elastic"),

					Raphael.type!="VML"&&this.toFront(),

						  i.stop().animate({opacity:0},r,">", function() {

						  	this.attr({text:a}).animate({opacity:1},r,"<")});

																																																														 //+"\n"+u+"%"

		var n=this.node.id;

		for(var o=0,l=p[n]; o<l.length; o++) {

			var c=d+10,

				y=e.rect(v,m+c*o,1,d).attr({fill:t,stroke:"none"}).animate({width:l[o][0]},2e3*Math.random(),"bounce"),

				b=e.text(g,c*o+m+d/2,l[o][1]).attr({"font-size":20,fill:"#fff","font-family":s,"text-anchor":"start"});



			h.push(y),h.push(b)}f.forEach(function(e) {

				var t=Raphael.animation({opacity:0},500,">");

				e.stop().animate(t)})}).mouseout(function(){this.stop().animate({"stroke-width":26,opacity:1},r*4,"elastic"),

				i.stop().animate({opacity:0},r,">",function(){i.attr({text:n}).animate({opacity:1},r,"<")}),

		  console.log(h.length),

		  		h.length>0&&(h.forEach(function(e) {

		  			e.remove()}),

		  			h.clear()),

		  			f.forEach(function(e) {

		  				var t=Raphael.animation({opacity:1},1e3,">");

				

				e.stop().animate(t)})})}(l,y,b)}},1500)},

				

	/*drawIcons:function() {

		var e={fill:"#285AA9","stroke-width":0,opacity:.5},

			t="t-240,-240s0.07",

			n=Raphael("icon_mobile",35,35),

			r="M22.065,18.53c-0.467-0.29-1.167-0.21-1.556,0.179l-3.093,3.092c-0.389,0.389-1.025,0.389-1.414,0L9.05,14.848c-0.389-0.389-0.389-1.025,0-1.414l2.913-2.912c0.389-0.389,0.447-1.075,0.131-1.524L6.792,1.485C6.476,1.036,5.863,0.948,5.433,1.29c0,0-4.134,3.281-4.134,6.295c0,12.335,10,22.334,22.334,22.334c3.015,0,5.948-5.533,5.948-5.533c0.258-0.486,0.087-1.122-0.38-1.412L22.065,18.53z";

						

			n.path(r).attr(e);



		var i=Raphael("icon_email",35,35),

			s="M28.516,7.167H3.482l12.517,7.108L28.516,7.167zM16.74,17.303C16.51,17.434,16.255,17.5,16,17.5s-0.51-0.066-0.741-0.197L2.5,10.06v14.773h27V10.06L16.74,17.303z";

					

			i.path(s).attr(e)},



		var o = Raphael("icon_weibo",35,35),

			  u = "M231.37,290.319c-2.825-1.122-6.355,0.234-8.011,3.012c-1.607,2.793-0.721,5.971,2.109,7.135c2.879,1.186,6.553-0.182,8.214-3.022C235.269,294.581,234.238,291.366,231.37,290.319zM219.894,240.975c-47.513,4.699-83.544,33.788-80.457,64.981c3.086,31.197,44.105,52.677,91.624,47.987c47.523-4.699,83.538-33.793,80.457-65.002C308.437,257.754,267.417,236.275,219.894,240.975z M261.586,314.548c-9.698,21.933-37.591,33.629-61.254,25.997c-22.846-7.375-32.517-29.933-22.515-50.253c9.821-19.924,35.379-31.192,57.99-25.308C259.209,271.03,271.151,293.106,261.586,314.548zM213.235,297.838c-7.359-3.087-16.87,0.086-21.409,7.204c-4.598,7.151-2.441,15.669,4.865,18.996c7.413,3.386,17.254,0.171,21.853-7.162C223.055,309.47,220.679,301.011,213.235,297.838zM256.417,50c-113.771,0-206,92.229-206,206c0,113.771,92.229,206,206,206c113.771,0,205.999-92.229,205.999-206C462.416,142.229,370.188,50,256.417,50zM230.901,370.958c-59.55,0-120.419-28.859-120.419-76.324c0-24.816,15.722-53.515,42.797-80.596c36.154-36.144,78.316-52.608,94.171-36.742c6.997,6.985,7.674,19.091,3.178,33.542c-2.344,7.279,6.831,3.247,6.831,3.263c29.222-12.234,54.717-12.955,64.035,0.358c4.973,7.097,4.497,17.046-0.085,28.576c-2.12,5.314,0.651,6.136,4.694,7.348c16.464,5.105,34.792,17.452,34.792,39.209C360.895,325.603,308.965,370.958,230.901,370.958zM338.705,220.029c1.928-5.949,0.722-12.731-3.771-17.708c-4.485-4.967-11.112-6.852-17.228-5.56v-0.011c-5.1,1.111-10.125-2.163-11.22-7.257c-1.095-5.116,2.163-10.147,7.273-11.236c12.507-2.66,26.056,1.207,35.23,11.385c9.195,10.179,11.652,24.042,7.722,36.208c-1.603,4.978-6.937,7.69-11.909,6.099c-4.972-1.613-7.689-6.953-6.088-11.92H338.705zM393.839,237.834c-0.006,0.011-0.006,0.032-0.006,0.043c-1.868,5.768-8.068,8.929-13.836,7.06c-5.789-1.869-8.951-8.053-7.082-13.837l-0.005-0.005c5.735-17.751,2.099-38.002-11.289-52.848c-13.404-14.846-33.164-20.518-51.423-16.641c-5.938,1.266-11.78-2.526-13.046-8.459c-1.271-5.928,2.516-11.771,8.454-13.041h0.01c25.666-5.458,53.473,2.51,72.324,23.412C396.798,184.399,401.887,212.863,393.839,237.834z";

			  o.path(u).transform(t).attr(e)},*/


		drawMiniSkillsArc:function() {

		function o(e,t){t.node["on"+e]=function() {

			for(var n=0,r=t.events.length; n<r; n++)t.events[n].name == e&&t.events[n].f.call(t)}}function l() {

				var t={fill:"#228fbd",stroke:"none",transform:"t615 235"},

					n=e.path("M-370.4,44.6l0.4,0.4l0.5-0.2l0.3,0.5l0.6-0.1l0.1,0.6l0.6,0.1l-0.1,0.6l0.5,0.3l-0.2,0.5l0.4,0.4l-0.4,0.4l0.2,0.5l-0.5,0.3l0.1,0.6l-0.6,0.1l-0.1,0.6l-0.6-0.1l-0.3,0.5l-0.5-0.2l-0.4,0.4l-0.4-0.4l-0.5,0.2l-0.3-0.5l-0.6,0.1l-0.1-0.6l-0.6-0.1l0.1-0.6l-0.5-0.3l0.2-0.5l-0.4-0.4l0.4-0.4l-0.2-0.5l0.5-0.3l-0.1-0.6l0.6-0.1l0.1-0.6l0.6,0.1l0.3-0.5l0.5,0.2L-370.4,44.6z").attr(t).animate({path:

							 "M-370.4-7.2l7.6,6.8l9.4-4.1l5.2,8.8l10.2-1l2.2,10l10,2.2l-1,10.2l8.8,5.2l-4.1,9.4l6.8,7.6l-6.8,7.6l4.1,9.4l-8.8,5.2l1,10.2l-10,2.2l-2.2,10l-10.2-1l-5.2,8.8l-9.4-4.1l-7.6,6.8l-7.6-6.8l-9.4,4.1l-5.2-8.8l-10.2,1l-2.2-10l-10-2.2l1-10.2l-8.8-5.2l4.1-9.4l-6.8-7.6l6.8-7.6l-4.1-9.4l8.8-5.2l-1-10.2l10-2.2l2.2-10l10.2,1l5.2-8.8l9.4,4.1L-370.4-7.2z"},2e3,"bounce").hover(function() {this.animate({fill:"#005687",path:

							 "M-370.4-18.2l9.2,8.1L-350-15l6.2,10.6l12.2-1.2l2.6,12l12,2.6l-1.2,12.2l10.6,6.2l-4.9,11.2l8.1,9.2l-8.1,9.2l4.9,11.2l-10.6,6.2l1.2,12.2l-12,2.6l-2.6,12l-12.2-1.2l-6.2,10.6l-11.2-4.9l-9.2,8.1l-9.2-8.1l-11.2,4.9L-397,100l-12.2,1.2l-2.6-12l-12-2.6l1.2-12.2l-10.6-6.2l4.9-11.2l-8.1-9.2l8.1-9.2l-4.9-11.2l10.6-6.2L-423.8,9l12-2.6l2.6-12l12.2,1.2l6.2-10.6l11.2,4.9"},1e3,"bounce")},function(){this.animate({fill:"#228fbd",path:

							 "M-370.4-7.2l7.6,6.8l9.4-4.1l5.2,8.8l10.2-1l2.2,10l10,2.2l-1,10.2l8.8,5.2l-4.1,9.4l6.8,7.6l-6.8,7.6l4.1,9.4l-8.8,5.2l1,10.2l-10,2.2l-2.2,10l-10.2-1l-5.2,8.8l-9.4-4.1l-7.6,6.8l-7.6-6.8l-9.4,4.1l-5.2-8.8l-10.2,1l-2.2-10l-10-2.2l1-10.2l-8.8-5.2l4.1-9.4l-6.8-7.6l6.8-7.6l-4.1-9.4l8.8-5.2l-1-10.2l10-2.2l2.2-10l10.2,1l5.2-8.8l9.4,4.1L-370.4-7.2z"},1e3,"bounce")});

			

			f.push(n),setTimeout(function() {

				var t = e.text(245,280,"20年以上\n金融保險、教育\n訓練及行銷經驗").attr({"font-size":10,fill:"#fff","font-family":s});

						 //{ 2 年 }\n前端开发经验

			f.push(t)},1e3)}

				var e=Raphael("miniskillsArc",320,500),

										//830

				t=30,

				n="金融證照\xa0/\n訓練\xa0/\xa0專長",

				//Skills

				r=150;



			e.circle(70,250,5).attr({stroke:"none",fill:"#193340"}).animate({r:35},1e3,">");

			

			var i=e.text(70,250,n).attr({font:"10px Hiragino Sans GB, Microsoft YaHei, sans-serif",fill:"#fff"}).toFront(),

				s="Hiragino Sans GB, Microsoft YaHei, sans-serif";

			

			e.customAttributes.arc=function(e,t,n) {

				var r=3.6*e,

					i=r==360?359.99:r,

					s=(90-i)*Math.PI/180,

					o=70+n*Math.cos(s),

					u=250-n*Math.sin(s),

					a=[["M",70,250-n],

					["A",n,n,0,+(i>180),1,o,u]];

					

					return{path:a,stroke:t}};



			var u=e.circle(246,140,3).attr({stroke:"none",fill:"#228fbd"}),

				a=e.path("M246.5,139.4L246.5,139.4").attr({fill:"none",stroke:"#228fbd","stroke-width":1}).animate({path:"M245.9,139.4v103.7"},1e3,">",l),

				f=e.set();



			f.push(u),f.push(a);



	var c=[{kind:"金融證照",score:"90",color:"#97BE0D"},

		   {kind:"專業訓練",score:"80",color:"#D84F5F"},

		   {kind:"金融訓練",score:"70",color:"#88B8E6"},

		   {kind:"專長",score:"60",color:"#FEAE16"}],



		h=e.set(),

		p={"arc-金融證照":[[122,"考試院人身保險經紀人考試及格"],

								[122,"理財規劃人員資格壽險登錄資格"],

								[59,"外幣保單資格"],

								[66,"投資型保單資格"],

								[59,"產險登錄資格"],

								[59,"壽險登錄資格"]],

					 "arc-專業訓練":[[66,"生命線義工訓練"],

					 				[74,"訓練團體師資訓練"],

					 				[58,"組織管理研習"],

					 				[170,"靜宜大學管科所「人力資源管理」學分班研修"],

					 				[173,"跨世紀人力資源經理人/顧問師證照特訓班研修"],

					 				[177,"銘傳大學管科所「管理理論與實務」學分班研修"],

					 				[66,"管理心理學研修"],

					 				[58,"組織行為研修"],

					 				[58,"組織發展研修"]],

					 "arc-金融訓練":[[59,"組訓專員訓練"],

					 				[103,"文化大學第4期壽險研究班"],

					 				[145,"日本OLIS及壽險公會外勤經營管理研習"],

					 				[129,"美國(LIMRA)壽險行銷協會BMTC班"],

					 				[124,"美國(LIMRA)壽險行銷協會MSS班"],

					 				[115,"壽險公司MTW團隊經營研習會"],

					 				[117,"保險經紀人協會-保險法規概要"],

					 				[109,"保險經紀人協會-保險學概要"],

					 				[118,"保險經紀人協會-風險管理概要"]],

					 "arc-專長":[[59,"包括理財規劃"],

								[59,"人力資源管理"],

								[42,"教育訓練"],

								[42,"組織發展"],

								[82,"行銷管理及策略規劃"]]},d=15,v=160,m=180,g=v+5;

					 								//d=單體高度(30) v=整體寬度(550) m=整體高度(150) g=字前距離(10)



	setTimeout(function(){for(var u=0; u<c.length; u++) {

		var a=c[u],

			l=a.color,

			y=a.score,

			b=a.kind,

			w="arc-"+b.toLowerCase().replace("&","_");

			t+=12; //四環間距



		var E=e.path().attr({arc:[y,l,t],"stroke-width":10});

			E.node.id=w, function(t,u,a) {

				o("mouseover",E),

				o("mouseout",E),

				E.mouseover(function() {

					this.animate({"stroke-width":20,opacity:.75},1e3,"elastic"),

					Raphael.type!="VML"&&this.toFront(),

						  i.stop().animate({opacity:0},r,">", function() {

						  	this.attr({text:a}).animate({opacity:1},r,"<")});

																																																														 //+"\n"+u+"%"

		var n=this.node.id;

		for(var o=0,l=p[n]; o<l.length; o++) {

			var c=d+3,

				y=e.rect(v,m+c*o,1,d).attr({fill:t,stroke:"none"}).animate({width:l[o][0]},2e3*Math.random(),"bounce"),

				b=e.text(g,c*o+m+d/2,l[o][1]).attr({"font-size":8,fill:"#fff","font-family":s,"text-anchor":"start"});



			h.push(y),h.push(b)}f.forEach(function(e) {

				var t=Raphael.animation({opacity:0},500,">");

				e.stop().animate(t)})}).mouseout(function(){this.stop().animate({"stroke-width":10,opacity:1},r*4,"elastic"),

				i.stop().animate({opacity:0},r,">",function(){i.attr({text:n}).animate({opacity:1},r,"<")}),

		  console.log(h.length),

		  		h.length>0&&(h.forEach(function(e) {

		  			e.remove()}),

		  			h.clear()),

		  			f.forEach(function(e) {

		  				var t=Raphael.animation({opacity:1},1e3,">");

				

				e.stop().animate(t)})})}(l,y,b)}},1500)},



		drawExperienceTimeLine:function() {
			function i() {
				e.path("M300 130 L 300 130").attr({
					fill:"none",
					"stroke-dasharray":"- ",
					stroke:"#000",
					"stroke-width":1}).animate({path:"M300 150 L 300 550 l 25 50"},1e3,"backOut");

			for(var n=0; n<t.length; n++) { 
					var i=t[n][1];
						(function(r){
							e.circle(300,1500,r).attr({stroke:"none",fill:t[n][2]}).animate({cy:t[n][0]},
							1e3+1e3*Math.random(),"backOut").hover(function(){this.animate({r:r*1.5},500,"bounce")},
	
	function(){this.animate({r:r},500,"bounce")})})(i),
	e.text(360,1500,t[n][3]).attr({"font-size":16,fill:"#649996","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]},1e3,"backOut").delay(1e3)),
	     //360       第一列  為主標題  font-size 14 																								
	e.text(394,1500,t[n][4]).attr({"font-size":14,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+20},1e3,"backOut").delay(1e3)),
		 //360                 第二列 font-size 16 																							 +25
	e.text(408,1500,t[n][5]).attr({"font-size":14,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+40},1e3,"backOut").delay(1e3)),
		 //360                 第三列			 																							 +50
	e.text(380,1500,t[n][6]).attr({"font-size":14,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+60},1e3,"backOut").delay(1e3)),
		 //360                 第四列 																										 +75
	e.text(492,1500,t[n][7]).attr({"font-size":14,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+80},1e3,"backOut").delay(1e3)),
		 //360                 第五列 																										 +100
	e.text(413,1500,t[n][8]).attr({"font-size":14,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+100},1e3,"backOut").delay(1e3)),
		 //360                 第六列 																										 +125
	e.text(435,1500,t[n][9]).attr({"font-size":14,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+120},1e3,"backOut").delay(1e3))}}var e=new Raphael("experienceTimeLine",700,680),
		 //360                 第七列 																										 +150
	t=[[195,25,"#97BE0D","","","","","","",""],
           [170,25,"","元智大學 管理研究所","","","","","",""],
           [195,25,"","社區大學 食物與營養保健 結業","","","","","",""],
           [220,25,"","台北醫學大學 營養保健學分班 結業","","","","","",""],
	  //200
	   [280,20,"#88B8E6","壽險公司 訓練部、業務部經理、駐區經理","","","","","",""],
	  //300
	   [360,10,"#88B8E6","企管顧問公司 協理、總經理","","","","","",""],
	  //400
	   [440,10,"#88B8E6","台灣及大陸企業公司專任顧問","","","","","",""],
	  //500
	   [520,20,"#989898","現職",
	    				 "益鼎保險經紀人股份有限公司\xa0-\xa0總經理",
	    				 "華頓智庫國際顧問有限公司\xa0-\xa0顧問",
	    				 "綠新經營管理顧問股份有限公司\xa0-\xa0顧問",
	    				 "伊登國際貿易\xa0-\xa0執行長",
	    				 "美安台灣公司SHOP.COM\xa0-\xa0超連鎖店主",
	    				 "美安台灣公司全新生活\xa0-\xa0授證教練"]],
	  //600

	n=[["#97BE0D",370,"學歷"],["#88B8E6",500,"工作經歷"]],

	r="Hiragino Sans GB, Microsoft YaHei, sans-serif";

	e.text(20,115,"星座：金牛座").attr({"font-size":16,fill:"#898989","font-family":r,"text-anchor":"start"}),
				//1991年7月，出生
	e.path("M 130 95 L 170 95 176 95 182 95 188 95 260 95 300 95 385 95").attr({fill:"none","stroke-dasharray":"- ",stroke:"#000","stroke-width":1}).animate({path:"M 130 115 L 170 115 176 105 179 125 188 115 280 116 300 150 350 130"},1e3,"bounce",i);

for(icategory=0; icategory<n.length; icategory++)
	e.circle(n[icategory][1],120,10).attr({stroke:"none",fill:n[icategory][0]}),
	e.text(n[icategory][1]+25,120,n[icategory][2]).attr({"font-size":16,fill:"#898989","font-family":r,"text-anchor":"start"})},

drawMiniExperienceTimeLine:function() {

			function i() {

				e.path("M 49.1 130 L 49.1 130").attr({

					fill:"none",

					"stroke-dasharray":"- ",

					stroke:"#000",

					"stroke-width":1}).animate({path:"M 49.1 130 v 319 l25 39.9"},1e3,"backOut");



			for(var n=0; n<t.length; n++) { 

					var i=t[n][1];

						(function(r){

							e.circle(49,1500,r).attr({stroke:"none",fill:t[n][2]}).animate({cy:t[n][0]},
								//下方 學經歷 圓 左右位置
							1e3+1e3*Math.random(),"backOut").hover(function(){this.animate({r:r*1.5},500,"bounce")},

	

	function(){this.animate({r:r},500,"bounce")})})(i),

	e.text(65,1500,t[n][3]).attr({"font-size":10,fill:"#649996","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]},1e3,"backOut").delay(1e3)),

	     //360       第一列  為主標題  font-size 14 																								

	e.text(80,1500,t[n][4]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+15},1e3,"backOut").delay(1e3)),

		 //360                 第二列 font-size 16 																							 +25

	e.text(80,1500,t[n][5]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+30},1e3,"backOut").delay(1e3)),

		 //360                 第三列			 																							 +50

	e.text(80,1500,t[n][6]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+45},1e3,"backOut").delay(1e3)),

		 //360                 第四列 																										 +75

	e.text(80,1500,t[n][7]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+60},1e3,"backOut").delay(1e3)),

		 //360                 第五列 																										 +100

	e.text(80,1500,t[n][8]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+75},1e3,"backOut").delay(1e3)),

		 //360                 第六列 																										 +125

	e.text(80,1500,t[n][9]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate(Raphael.animation({y:t[n][0]+90},1e3,"backOut").delay(1e3))}}var e=new Raphael("miniexperienceTimeLine",320,680),

		 //360                 第七列 																										 +150

	t=[[165,10,"#97BE0D","","","","","","",""],

           [150,15,"","元智大學 管理研究所","","","","","",""],

           [165,15,"","社區大學 食物與營養保健 結業","","","","","",""],

           [180,15,"","台北醫學大學 營養保健學分班 結業","","","","","",""],

	  //200

	   [225,8,"#88B8E6","壽險公司 訓練部、業務部經理、駐區經理","","","","","",""],

	  //300

	   [285,5,"#88B8E6","企管顧問公司 協理、總經理","","","","","",""],

	  //400

	   [345,5,"#88B8E6","台灣及大陸企業公司專任顧問","","","","","",""],

	  //500

	   [405,8,"#989898","現職",

	    				 "益鼎保險經紀人股份有限公司\xa0-\xa0總經理",

	    				 "華頓智庫國際顧問有限公司\xa0-\xa0顧問",

	    				 "綠新經營管理顧問股份有限公司\xa0-\xa0顧問",

	    				 "伊登國際貿易\xa0-\xa0執行長",

	    				 "美安台灣公司SHOP.COM\xa0-\xa0超連鎖店主",

	    				 "美安台灣公司全新生活\xa0-\xa0授證教練"]],

	  //600



	n=[["#97BE0D",85,"學歷"],["#88B8E6",150,"工作經歷"]],



	r="Hiragino Sans GB, Microsoft YaHei, sans-serif";



	e.text(5,80,"星座：金牛座").attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}),

				//1991年7月，出生

	e.path("M 9.4 113 49.1 113 79 113").attr({fill:"none","stroke-dasharray":"- ",stroke:"#000","stroke-width":1}).animate({path:"M 30.5 96.4 49.1 130 73.8 113.2"},1e3,"bounce",i);



for(icategory=0; icategory<n.length; icategory++)

	e.circle(n[icategory][1],108,8).attr({stroke:"none",fill:n[icategory][0]}),
						//學 經歷 圈 高度, 圓大小
	e.text(n[icategory][1]+16,108,n[icategory][2]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"})},
						//字距離, 學 經歷 字 高度

drawBCList: function() {

	var e = Raphael("bclist",850,500);



		tb = [[10, "新光人壽南區", "組織增員研討專案"],

		 	  [33, "興農人壽總公司", "組織增員研討會專案"],

		 	  [56, "國寶人壽總公司", "高階經營研討會"],

		 	  [79, "中誠保險經紀公司", "同心策略營"],

		 	  [102, "聯強保險經紀公司", "公司合併顧問案"],

		 	  [125, "全亞東倫保險公司", "公司合併顧問案"],

		 	  [148, "威盛保險經紀公司", "公司合併顧問案"],

		 	  [171, "威盛保險經紀公司", "退休規劃課程"],

		 	  [194, "瑞泰人壽總公司", "管理才能訓練班"],

		 	  [217, "創造力國際事業", "年度經營策劃營"],

		 	  [240, "全球人壽總公司", "退休規劃顧問案"],

		 	  [263, "東倫保險經紀公司", "策略規劃顧問案"],

		 	  [286, "臺灣人壽總公司", "用人準則顧問案"],

		 	  [309, "和泰保險經紀公司", "策略規劃顧問案"],

		 	  [332, "幸福人壽", "退休理財規劃課程"],

		 	  [355, "幸福人壽", "同心策略營"],

		 	  [378, "國華人壽", "同心策略營"],

		 	  [401, "國華人壽", "退休理財規劃課程"],

		 	  [424, "全球人壽", "年度策劃會規劃"],

		 	  [447, "NG安泰人壽通訊處", "年度策劃會規劃"],

		 	  [470, "保險經紀人協會", "壽險行銷管理班"]],



		cb = [[10, "太平洋人壽公司", "講師培訓專案"],

			  [33, "中國人壽江蘇省公司", "講師提高培訓專案"],

		  	  [56, "中國人壽廣東省公司", "第一期培訓培訓專案"],

		  	  [79, "中國人壽汕頭分公司", "培訓體系顧問案"],

		  	  [102, "中國人壽北京分公司", "種子講師培訓顧問案"],

		  	  [125, "中國保險報", "營銷精英高級研修班"],

		  	  [148, "中國人壽福州分公司", "種子講師培訓顧問案"],

		  	  [171, "中國人壽福建省公司", "種子講師培訓顧問案"],

		  	  [194, "中國人壽安徽省公司", "種子講師培訓顧問案"],

		  	  [217, "中國人壽總公司", "講師團培訓專案"]],



		r = "Hiragino Sans GB, Microsoft YaHei, sans-serif";



			  //e.text(100,100,t[0][0])



		for(var i = 0; i < tb.length; i++) {

			//e.text(100,130,nn[0][0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + nn[0][1])

			e.text(40,1000,tb[i][1]).attr({"font-size":16,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:tb[i][0]+10},1e3,"backOut"),

			e.text(220,1000,tb[i][2]).attr({"font-size":16,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:tb[i][0]+10},1e3,"backOut")

																											

		}



		for(var i = 0; i < cb.length; i++) {

			e.text(460,1000,cb[i][1]).attr({"font-size":16,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:cb[i][0]+10},4e3,"backOut"),

			e.text(660,1000,cb[i][2]).attr({"font-size":16,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:cb[i][0]+10},4e3,"backOut")

		}

		

},

drawMiniBCList: function() {

	var e = Raphael("minibclist",320,500);



		tb = [[22, "新光人壽南區", "組織增員研討專案"],

		 	  [35, "興農人壽總公司", "組織增員研討會專案"],

		 	  [48, "國寶人壽總公司", "高階經營研討會"],

		 	  [61, "中誠保險經紀公司", "同心策略營"],

		 	  [74, "聯強保險經紀公司", "公司合併顧問案"],

		 	  [87, "全亞東倫保險公司", "公司合併顧問案"],

		 	  [100, "威盛保險經紀公司", "公司合併顧問案"],

		 	  [113, "威盛保險經紀公司", "退休規劃課程"],

		 	  [126, "瑞泰人壽總公司", "管理才能訓練班"],

		 	  [139, "創造力國際事業", "年度經營策劃營"],

		 	  [152, "全球人壽總公司", "退休規劃顧問案"],

		 	  [165, "東倫保險經紀公司", "策略規劃顧問案"],

		 	  [178, "臺灣人壽總公司", "用人準則顧問案"],

		 	  [191, "和泰保險經紀公司", "策略規劃顧問案"],

		 	  [204, "幸福人壽", "退休理財規劃課程"],

		 	  [217, "幸福人壽", "同心策略營"],

		 	  [230, "國華人壽", "同心策略營"],

		 	  [243, "國華人壽", "退休理財規劃課程"],

		 	  [256, "全球人壽", "年度策劃會規劃"],

		 	  [269, "NG安泰人壽通訊處", "年度策劃會規劃"],

		 	  [282, "保險經紀人協會", "壽險行銷管理班"]],



		cb = [[325, "太平洋人壽公司", "講師培訓專案"],

			  [338, "中國人壽江蘇省公司", "講師提高培訓專案"],

		  	  [351, "中國人壽廣東省公司", "第一期培訓培訓專案"],

		  	  [364, "中國人壽汕頭分公司", "培訓體系顧問案"],

		  	  [377, "中國人壽北京分公司", "種子講師培訓顧問案"],

		  	  [390, "中國保險報", "營銷精英高級研修班"],

		  	  [403, "中國人壽福州分公司", "種子講師培訓顧問案"],

		  	  [416, "中國人壽福建省公司", "種子講師培訓顧問案"],

		  	  [429, "中國人壽安徽省公司", "種子講師培訓顧問案"],

		  	  [442, "中國人壽總公司", "講師團培訓專案"]],



		r = "Hiragino Sans GB, Microsoft YaHei, sans-serif";



			  //e.text(100,100,t[0][0])



		for(var i = 0; i < tb.length; i++) {

			//e.text(100,130,nn[0][0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + nn[0][1])

			e.text(40,1000,tb[i][1]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:tb[i][0]+10},1e3,"backOut"),

			e.text(160,1000,tb[i][2]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:tb[i][0]+10},1e3,"backOut")

																											

		}



		for(var i = 0; i < cb.length; i++) {

			e.text(40,1000,cb[i][1]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:cb[i][0]+10},4e3,"backOut"),

			e.text(160,1000,cb[i][2]).attr({"font-size":10,fill:"#898989","font-family":r,"text-anchor":"start"}).animate({y:cb[i][0]+10},4e3,"backOut")

		}

		

},


drawProjectsGallery:function() {

	var e="img/led.png",

		awl="img/arrow_left.png",

		awr="img/arrow_right.png",

		t=["#005687","#7bbfea","#646993","#88B8E6","#BEDBE9","#566A76"],

		n={fill:"#005687","stroke-width":0},

		r=new Raphael("projectsGallery",980,605),

		i=["ap_001.png","ap_002.png","ap_003.png","ap_004.png","ap_006.png","ap_005.png"],

		s=[737,919,1111,332,609,558],

		o="img/ap/",

		u=r.image(o+i[0],278,26,473,315).attr({"clip-rect":"278, 26, 473, 315",opacity:1}),

		a=0,f=r.image(e,255,-40,519,519).attr(n);



	Raphael.type=="VML"&&f.translate(1.4,1.4);



	var l=r.image(awr,110,15,45,45).attr({cursor:"pointer",fill:"#005687",opacity:0,stroke:"none"}).transform("t690 250").animate({opacity:1},500,"bouce"),

		c=r.image(awl,110,15,45,45).attr({cursor:"pointer",fill:"#005687",opacity:0,stroke:"none",zIndex:999}).transform("t0 250").animate({opacity:1},500,"bouce");

		c.translate(40,200),

		l.translate(40,200),

		l.click(function() {

			$("#projectIntro table").eq(a).fadeOut(1e3),a++,a>i.length-1&&(a=0);

			

			var e=t[a%t.length],n=t[(a+1)%t.length];

				f.animate({fill:e},1e3,"bouce"),

				l.animate({fill:e},1e3,"bouce"),

				c.animate({fill:e},1e3,"bouce"),

				u.animate({opacity:0},3e3,"bouce").attr({src:o+i[a],opacity:0}).animate({opacity:1},3e3,"bouce"),

													   //src:o+i[a] = o="images/ap/" + i=["ap_001.png"]

			$("#projectIntro table").eq(a).fadeIn(1e3),

			$("#galleryCursor .cursor").text(a+1),

			$("#galleryCursor .total")}),

			

			c.click(function() {

				$("#projectIntro table").eq(a).fadeOut(1e3),a--,a<0&&(a=i.length-1);

				

				var e=t[a%t.length],

					n=t[(a+1)%t.length];

					f.animate({fill:e},1e3,"bouce"),

					l.animate({fill:e},1e3,"bouce"),

					c.animate({fill:e},1e3,"bouce"),

					u.animate({opacity:0},3e3,"bouce").attr({src:o+i[a],opacity:0}).animate({opacity:1},3e3,"bouce"),



				$("#projectIntro table").eq(a).fadeIn(1e3),

				$("#galleryCursor .cursor").text(a+1),

				$("#galleryCursor .total")}),

				$("#galleryCursor .cursor").text(1),

				$("#galleryCursor .total").text(i.length),

				$("#galleryCursor").fadeIn(2e3)},





drawMiniProjectsGallery:function() {

	var e="img/led.png",

		awl="img/arrow_left.png",

		awr="img/arrow_right.png",

		t=["#005687","#7bbfea","#646993","#88B8E6","#BEDBE9","#566A76"],

		n={fill:"#005687","stroke-width":0},

		r=new Raphael("miniprojectsGallery",320,605),

		i=["ap_001.png","ap_002.png","ap_003.png","ap_004.png","ap_006.png","ap_005.png"],

		s=[737,919,1111,332,609,558],

		o="img/ap/",

		u=r.image(o+i[0],13,70,275,178).attr({"clip-rect":"13, 65, 275, 178",opacity:1}),

		a=0,f=r.image(e,0,35,300,300).attr(n);



	Raphael.type=="VML"&&f.translate(1.4,1.4);



	var l=r.image(awr,110,15,45,45).attr({cursor:"pointer",fill:"#005687",opacity:0,stroke:"none"}).transform("t70 120").animate({opacity:1},500,"bouce"),

		c=r.image(awl,110,15,45,45).attr({cursor:"pointer",fill:"#005687",opacity:0,stroke:"none",zIndex:999}).transform("t-120 120").animate({opacity:1},500,"bouce");

		c.translate(40,260),

		l.translate(40,260),

		l.click(function() {

			$("#projectIntro table").eq(a).fadeOut(1e3),a++,a>i.length-1&&(a=0);

			

			var e=t[a%t.length],n=t[(a+1)%t.length];

				f.animate({fill:e},1e3,"bouce"),

				l.animate({fill:e},1e3,"bouce"),

				c.animate({fill:e},1e3,"bouce"),

				u.animate({opacity:0},3e3,"bouce").attr({src:o+i[a],opacity:0}).animate({opacity:1},3e3,"bouce"),

													   //src:o+i[a] = o="images/ap/" + i=["ap_001.png"]

			$("#projectIntro table").eq(a).fadeIn(1e3),

			$("#galleryCursor .cursor").text(a+1),

			$("#galleryCursor .total")}),

			

			c.click(function() {

				$("#projectIntro table").eq(a).fadeOut(1e3),a--,a<0&&(a=i.length-1);

				

				var e=t[a%t.length],

					n=t[(a+1)%t.length];

					f.animate({fill:e},1e3,"bouce"),

					l.animate({fill:e},1e3,"bouce"),

					c.animate({fill:e},1e3,"bouce"),

					u.animate({opacity:0},3e3,"bouce").attr({src:o+i[a],opacity:0}).animate({opacity:1},3e3,"bouce"),



				$("#projectIntro table").eq(a).fadeIn(1e3),

				$("#galleryCursor .cursor").text(a+1),

				$("#galleryCursor .total")}),

				$("#galleryCursor .cursor").text(1),

				$("#galleryCursor .total").text(i.length),

				$("#galleryCursor").fadeIn(2e3)}};



			$(function() {

				var e=["cv_header_intro","literary","skills","experiences","bc","projects","final"],

					t=[!1,!1,!1,!1,!1,!1,!1],

					n=[],

					r=0,

					i=$(window).height();



				for(var s=0; s<e.length; s++)n[s]=$("#"+e[s]).offset().top;

				var o=[];

					

				o[0]=function() {

					$.browser.msie && $("#"+e[0]+" h2").animate( {

						opacity:1},2e3),

						

						$(".left_bracket").animate({right:"64.75em",opacity:1},1500),

						$(".right_bracket").animate({left:"64.75em",opacity:1},1500),

						//大括弧 {} 顯示

						

						$("#cv_header_intro .text, #cv_header_intro .contact").fadeIn(2e3),

									  

						$("#cv_header_intro .down").queue(function(e) {

							$(this).animate({top:"8em",opacity:.7},800).delay(500).animate({top:"6em",opacity:1},800),

								  			//下箭頭 移動距離 速度

							$(this).queue(arguments.callee),e()}).click(function() {

							r++,

								$("html, body").stop().animate({scrollTop:n[r]+0},1e3,"easeOutBack")}),

													   //中間下箭頭 下移 原設值 = 100

								$("#sideNav .down").queue(function(e) {

									$(this).animate({marginTop:"35px",opacity:.7},800).delay(500).animate({marginTop:"10px",opacity:1},800),

									$(this).queue(arguments.callee),e()}).click(function() {

									r++,

							

									$("html, body").stop().animate({scrollTop:n[r]+0},2e3,"easeOutBack")}),

														   //右邊下箭頭 下移 原設值 = 200

									$("#sideNav .up").click(function(){r--; var e=r==0?0:n[r]+0;

																	  //右邊上箭頭 上移 原設值 = 150

									$("html, body").stop().animate({scrollTop:e},2e3,"easeOutBack")})},



				o[1]=function(){

					$("#literary .text").each(function() {

						var t=$(this);

						setTimeout(function(){t.addClass("inLeft")},800)

					}),



					$(" #literary .img").each(function() {

						var t=$(this);

						setTimeout(function(){t.addClass("inRight")},500)

					})	

				},

				

				o[2]=function() { 

					$(".legend h3").addClass("fadeInUp"),

					$(".skillsList li").each(function(e) {

						var t=$(this);

						setTimeout(function(){t.addClass("fadeInLeftBig")},e*200)}),

						$(".skillsList li").hover(function() {

							var e="arc-"+$(this).text().toLowerCase();

								e=e.replace(/&/,"_"),

								$("#"+e).trigger("mouseover")},function() {

												//滑鼠移至上面 執行

									var e="arc-"+$(this).text().toLowerCase();

										e=e.replace(/&/,"_"),

										$("#"+e).trigger("mouseout")}),NemoCV.drawSkillsArc(),NemoCV.drawMiniSkillsArc()},

														//滑鼠未移 原始	

										

				o[3]=function() {

					NemoCV.drawExperienceTimeLine(),NemoCV.drawMiniExperienceTimeLine()},



				o[4]=function() {

					$("#bc .tw").each(function() {

						var t=$(this);

						setTimeout(function(){t.addClass("inLeft")},800)

					}),



					$("#bc .ch").each(function() {

						var t=$(this);

						setTimeout(function(){t.addClass("inRight")},500)

					}),

        			//$(".type").ghostType();



        			NemoCV.drawBCList();

        			NemoCV.drawMiniBCList();

				},

										

				o[5]=function() {

					NemoCV.drawProjectsGallery(),

					$("#projectsGallery").addClass("bounceInDown"),

					$("#projectIntro table").eq(0).fadeIn(2e3);



					NemoCV.drawMiniProjectsGallery(),

					$("#miniprojectsGallery").addClass("bounceInDown"),

					$("#projectIntro table").eq(0).fadeIn(2e3)

				},

								

				o[6]=function() {

					$("#final .text").animate({opacity:1},2e3),

					$("#final .backTop").click(function() {

					$("html, body").stop().animate({scrollTop:0},2e3,"easeOutBack")})},

					

				$(window).scroll(function() {

					var s=$(this).scrollTop();

					for(var u=e.length; u>0; u--)

					if(s>n[u]-i+300){t[u]||($("#"+e[u]+" h2").addClass("fadeInLeftBig"),

					$.browser.msie&&$("#"+e[u]+" h2").animate({opacity:1},2e3),o[u](),t[u]=!0);break}r=u,

					s>n[1]-100?$("#sideNav").fadeIn(1e3):($("#sideNav").fadeOut(1e3),r=0)}),o[0](),t[0]=!0});

