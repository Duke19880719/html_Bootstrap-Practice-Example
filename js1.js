$(function(){

	var timer;
	var slide_pic_objec = $("#slide_pic").find("img");
	var slide_pic_count = slide_pic_objec.length;
	var current_index = 0;
	
	//--------頁面背景自動轉動------------------------
	$("#slide_pic").each(function(){

		slide_pic_objec.eq(current_index).fadeIn();
		timer =	setInterval(auto_scroll,3000);		

	});
	//-----------點擊背景,畫面不動,離開畫面,開始自動轉動---------------------------
	$('#slide_pic').hover(
		function(){
		
		clearInterval(timer)
	},function(){
		slide_pic_objec.eq(current_index).fadeIn();
		timer =	setInterval(auto_scroll,7000);

	
	});
	//-----------timer function---------------------------
	 function auto_scroll(){
		var next = (current_index + 1) % slide_pic_count;

		slide_pic_objec.eq(current_index).fadeOut();

		slide_pic_objec.eq(next).fadeIn();
		
		current_index = next;
		};
	//----------------menu 點擊出現下拉選單---------------------
	$(".dropdownitem1").hover(function(){
		
		$(".drop_list").attr("style","display:block");
		
		},function(){
			$(".drop_list").attr("style","display:none");

		});
	//----------------menu 在window scroll 超過本身高度時,固定在頂端---------------------
	$(".dropdown").each(function(){
		var my_window = $(window),
		menu_drop = $(this),
		menu_drop_offset_top = menu_drop.offset().top;

		my_window.on("scroll",function(){
			if (my_window.scrollTop()>menu_drop_offset_top) {
				menu_drop.addClass("sticky");
				
				
				
			}else{
				menu_drop.removeClass("sticky");
				
			}

		});
		my_window.trigger("scroll");
	});
	//----------------card infomation display-------------------------------
	$("#card1").hover(function(){

		$("#img_card").css("display","none");
		
		$("#card_title").css({"font-size":"18px","line-height": "3vmin"});
		$("#card_title").html("望幽谷是北台灣有名的旅遊景點站在高處俯瞰綠色山谷可以讓人忘卻一切煩憂，從這裡可以遠眺台灣蜿蜒的海岸線風景，海天一線的蔚藍大海，廣闊視野讓人不禁心曠神怡；到了夜晚海面上漁火點點與九份山城行程美麗的景象，讓人印象深刻！<br><strong>交通</strong>：<br><strong>大眾運輸</strong><br>▶自基隆火車站前搭103路公車，可在八斗子站下車，再沿八斗街步行約25分鐘可達。<br><strong>自行開車</strong><br>▶自行開車前往者，可沿中正路往濱海公路方向行駛，至八斗子後轉入八斗街，即可看見指標。")
	},function(){
		$("#card_title").css("font-size","3vmin");
		$("#img_card").css("display","block");
		$("#card_title").html("基隆-望幽谷");
	});

	$("#card2").hover(function(){

		$("#img_card2").css("display","none");
		$("#card_title2").css({"font-size":"18px","line-height": "3vmin"});
		$("#card_title2").html("新北市有個又名「天使的秘境」的新山夢湖，位於新北市汐止區的新山夢湖步道，是「新山」與「夢湖」的合稱，對居住在台北的人來說，是很方便的旅遊選擇。這裡被群山包圍、雲霧繚繞，縹緲夢幻之感讓人感到嚮往，湖畔有左右兩條山徑通往新山，後段較為陡峭，需要手腳並用才能登山；這裡視野廣闊，有豐富的動植物生態，春夏有油桐花、杜鵑和螢火蟲，非常適合假日帶上一家大小前往的台灣景點唷！<br><strong>地址：</strong><br>台北市汐止區夢湖路新山")
	},function(){
		$("#card_title2").css("font-size","3vmin");
		$("#img_card2").css("display","block");
		$("#card_title2").html("新北市-新山夢湖");
	});

	$("#card3").hover(function(){

		$("#img_card3").css("display","none");
		$("#card_title3").css({"font-size":"18px","line-height": "3vmin"});
		$("#card_title3").html("位於北台灣新店區的濛濛湖是著名的約會景點，這處絕美湖景有著湛藍的潭水，平靜的湖面接鄰寬闊的沙洲或綠地，放眼望去的湖光山色，讓人流連忘返，到這裡旅遊總能讓人忘卻一切煩憂，心靈真正得到放鬆；水面上可以看到水鳥覓食，偶爾還會有釣客在湖畔釣魚，是個如詩似畫，讓人沉醉的忘憂景點呢！<br><strong>交通：</strong><br>至捷運新店站搭乘F708新烏路線公車，在「頂石厝路站」下車即可抵達")
	},function(){
		$("#card_title3").css("font-size","3vmin");
		$("#img_card3").css("display","block");
		$("#card_title3").html("新北市-濛濛湖");
	});

	$("#card4").hover(function(){
		$("#card_title4").css({"font-size":"18px","line-height": "3vmin"});
		$("#img_card4").css("display","none");
		$("#card_title4").html("說到台灣的忘憂景點，南投忘憂森林絕對是榜上有名！忘憂森林的大片柳杉長期泡水變成枯木，也因此形成奇特的林木景觀。這裡林相特殊，終日霧氣迷濛，也有人稱為迷霧森林。這裡四季皆有不同的風情，許多人認為雨水豐沛的夏季最美，沼澤地呈現積水的狀態，水面則倒映著枯樹倒影、藍天白雲的景致，讓人一見就忘憂，難怪是台灣有名的旅遊景點呢！<br><strong>交通：</strong><br><strong>▶自行開車</strong><br>❶從國道3號下竹山交流道，接台3線往竹山方向，然後轉接151縣道往溪頭方向，抵達溪頭後再往杉林溪方向前進，沿途經過十二生肖彎等等，約在杉林溪公路3公里，左手邊即可看到招牌。<br><strong>▶搭車前往</strong><br>❶「台中干城車站」轉搭客運前往「杉林溪」，再往回步行約2公里即可抵達產業道路口，再依指標到達「忘憂森林」。<br>❷「台中高鐵站」或「台中台鐵火車站」搭程「台灣好行」公車前往「溪頭站」，再轉搭開往「杉林溪遊樂區」的公車，向公車司機告知要在「忘憂森林登山口」下車。")
	},function(){
		$("#card_title4").css("font-size","3vmin");
		$("#img_card4").css("display","block");
		$("#card_title4").html("南投-忘憂森林");
	});
	// ------------------------------------------------	
	$("#card5").hover(function(){
		$("#card_title5").css({"font-size":"18px","line-height": "3vmin"});
		$("#img_card5").css("display","none");
		$("#card_title5").html("誰說在台灣想忘憂一定要觀山看海？黃金稻浪才是熱門的旅遊景點，位於台中的外埔忘憂谷，鄉間小路將田園切割成不規則的形狀， 一層一層，如大地拼布一般，收割前是綠油油稻田，收成時節就能看到金黃色的稻浪撲滿大地，有如高貴的地毯一般，視野相當遼闊，瞬間感覺慢活了起來，是台中相當之名的忘憂景點。<br> <strong>地址：</strong> <br>台中市外埔區溪底路<br> <strong>交通：</strong><br>走台一線省道")
	},function(){
		$("#card_title5").css("font-size","3vmin");
		$("#img_card5").css("display","block");
		$("#card_title5").html("台中-外埔忘憂谷");
	});

	$("#card6").hover(function(){
		$("#card_title6").css({"font-size":"18px","line-height": "3vmin"});
		$("#img_card6").css("display","none");
		$("#card_title6").html("走過了中部的稻浪，我們來看看南台灣的莊園美景（推薦給你：台南景點、美食懶人包），位於台南的忘憂景點是Vanaheim愛莊園，莊園內有小湖泊，寧靜舒適的空間被公認為「台南版的忘憂森林」，莊園內有木棧道穿過湖面，四週被樹林包圍，可以欣賞樹木倒映在湖面上的美景，除此之外，還有開放入內露營，也有白沙灘可以戲水，非常適合帶上一家老小來這裡旅遊呢！<br><strong>地址：</strong><br>台南市北門區雙春里雙春73-11號<br><strong>交通：</strong><br>高速公路南下路線：國道1號或3號→82快速道路→往西接西濱海岸61快速道路→往南至北門；或沿西濱海岸線61號一路下南至北門→下北門交流道右轉→往南鯤鯓代天府直行→過五王大橋左轉→看到雙春遊憩區指示右轉→沿路直走即可抵達Vanaheim 愛莊園")
	},function(){
		$("#card_title6").css("font-size","3vmin");
		$("#img_card6").css("display","block");
		$("#card_title6").html("台南-Vanaheim愛莊園");
	});

	$("#card7").hover(function(){
		$("#card_title7").css({"font-size":"18px","line-height": "3vmin"});
		$("#img_card7").css("display","none");
		$("#card_title7").html("這個台灣著名的旅遊景點壽豐雲山水位於花蓮，過去因為林依晨代言黑松沙士到此取景，開始吸引絡繹不絕的遊客人潮前往朝聖。雲山水濕地生態園區佔地面積24公頃，園區內有4公頃如夢似幻的夢幻湖，湖面上閃著藍樂色彩波光粼粼，周圍種植了26種棕櫚科植物及闊葉林，季節性開花植物和超大片的翠綠草地，環境有如歐洲才有的美景，難怪是網友們心中台灣忘憂景點之一哪！<br><strong>交通：</strong><br>從花蓮市出發，往南沿台11丙線壽豐方向，約14K處見右方路旁有座風車，左轉入風車對面小路，沿途會看到往環湖步道路碑，往前行約800公尺，即可抵達這夢幻湖。")
	},function(){
		$("#card_title7").css("font-size","3vmin");
		$("#img_card7").css("display","block");
		$("#card_title7").html("花蓮-雲山水");
	});

	$("#card8").hover(function(){
		$("#card_title8").css({"font-size":"18px","line-height": "3vmin"});
		$("#img_card8").css("display","none");
		$("#card_title8").html("在台灣想賞金針花，來花蓮就對啦！花蓮六十石山一層層起起伏伏的金色地毯，滿山的金針花相當壯觀，登上忘憂亭還可以俯瞰廣闊的花東縱谷，風光明媚有如畫作一般，是讓人感到心曠神怡旅遊景點，身心都被療癒啦！<br><strong>地址：</strong><br>花蓮縣富里鄉竹田村<br><strong>交通：</strong><br>從台9號省道轉進六十石山產業路後，經過一段蜿蜒的山路，即可到達六十石山的金針栽植區")
	},function(){
		$("#card_title8").css("font-size","3vmin");
		$("#img_card8").css("display","block");
		$("#card_title8").html("花蓮-六十石山");
	});
	// -------------------------tw_history_a--------------------------------
	$("#tw_history_a").click(function(){
		var offset_str = $("#tw_history").offset().top - 155;
		 $('html, body').animate({
                    scrollTop: offset_str
                }, 1000);

            return false;
	});
	// -------------------------tw_geography_a--------------------------------
	$("#tw_geography_a").click(function(){
		var offset_str1 = $("#tw_geography").offset().top-155;
		 $('html, body').animate({
                    scrollTop: offset_str1
                }, 1000);

		
        return false;   
	});
		// -------------------------tw_geography_a--------------------------------
	$("#taiwan_culture_a").click(function(){
		var offset_str1 = $("#taiwan_culture").offset().top-155;
		 $('html, body').animate({
                    scrollTop: offset_str1
                }, 1000);

		
        return false;   
	});

	// -------------------------tw_eat_a--------------------------------
	$("#tw_eat_a").click(function(){
		var offset_str1 = $("#eat").offset().top-155;
		 $('html, body').animate({
                    scrollTop: offset_str1
                }, 1000);



        return false;   
	});
	// -------------------------traffic_a--------------------------------
	$("#traffic_a").click(function(){
		var offset_str1 = $("#traffic").offset().top-155;
		 $('html, body').animate({
                    scrollTop: offset_str1
                }, 1000);



        return false;   
	});

	// -------------------------tooltip--------------------------------
	$('#img_tooltip').tooltip(); 
	$('#img_tooltip1').tooltip(); 

	$('#img_tooltip3').tooltip(); 
	$('#img_tooltip4').tooltip(); 

	$('#img_tooltip5').tooltip(); 
	$('#img_tooltip6').tooltip();

	$('#img_tooltip7').tooltip(); 
	$('#img_tooltip8').tooltip();

	$('#img_tooltip9').tooltip(); 
	$('#img_tooltip10').tooltip();

	$('#img_tooltip11').tooltip();
	$('#img_tooltip12').tooltip(); 
	$('#img_tooltip13').tooltip();

	$('#img_tooltip14').tooltip();
	$('#img_tooltip15').tooltip(); 
	$('#img_tooltip16').tooltip();

	$('#img_tooltip17').tooltip();
	$('#img_tooltip18').tooltip(); 
	$('#img_tooltip19').tooltip();

	$('#img_tooltip20').tooltip();
	$('#img_tooltip21').tooltip(); 
	$('#img_tooltip22').tooltip();

	$('#img_tooltip23').tooltip();
	$('#img_tooltip24').tooltip(); 
	$('#img_tooltip25').tooltip();

// ---------------------文字轉語音撥放&&滑鼠事件註冊應用&&文字反白抓取------------------------------------
	var t='';


   $('#taiwan_culture').mousedown(function() {
 
  
  if(window.getSelection){t=window.getSelection();}
  else if(document.getSelection){t=document.getSelection();}
  else if(window.document.selection){t=window.document.selection.createRange().text;}
   
	});
     $('#taiwan_culture').mouseup(function() {
  	
		var words = "" + location.search;
		words = decodeURIComponent(words.replace("?q=", ""));
		var words = "" + t;
		$("#player").attr('src',
						'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&client=tw-ob&tl=zh-tw&q=' +
						words).trigger("play");
  
	});

  // ---------------------modal window------------------------------------
    $("#card1").click(function(){
			$("#modal_image").attr("src",'./img/k.jpg');
			$("#title_modal").html("基隆-望幽谷");
		   $("#modal1").modal();
		
        return false;   
	});
      $("#card2").click(function(){
			$("#modal_image").attr("src",'./img/l.jpg');
			$("#title_modal").html("新北市-新山夢湖");
		   $("#modal1").modal();
		
        return false;   
	});
       $("#card3").click(function(){
			$("#modal_image").attr("src",'./img/m.jpg');
			$("#title_modal").html("新北市-濛濛湖");
		   $("#modal1").modal();
		
        return false;   
	});
      $("#card4").click(function(){
			$("#modal_image").attr("src",'./img/n.jpg');
			$("#title_modal").html("南投-忘憂森林");
		   $("#modal1").modal();
		
        return false;   
	});
       $("#card5").click(function(){
			$("#modal_image").attr("src",'./img/o.jpg');
			$("#title_modal").html("台中-外埔忘憂谷");
		   $("#modal1").modal();
		
        return false;   
	});
     $("#card6").click(function(){
			$("#modal_image").attr("src",'./img/p.jpg');
			$("#title_modal").html("台南-Vanaheim愛莊園");
		   $("#modal1").modal();
		
        return false;   
	});
     $("#card7").click(function(){
			$("#modal_image").attr("src",'./img/q.jpg');
			$("#title_modal").html("花蓮-雲山水");
			$("#modal1").modal();
		
        return false;   
	});
    $("#card8").click(function(){
			$("#modal_image").attr("src",'./img/r.jpg');
			$("#title_modal").html("花蓮-六十石山");
			$("#modal1").modal();
		
        return false;   
	});
// ---------------------------------------------------------------
	$('#myScrollspy').on('activate.bs.scrollspy', function () {
	    var activeSection = $(this).find("li.active a").attr("href");

	  
	});
    
});