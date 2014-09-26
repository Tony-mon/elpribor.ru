$(function(){

	$("#menuButton").click(function(){
		$("#pageHTML").toggleClass("openMenu");
	});
	

	$(".linkToBack").click(function(){
		$("main").hide();
		$("aside").show();
	});

	$('.tabs').each(function(){
		var tabs=$(this),
		btTabs=tabs.children('.btTabs'),
		contents=tabs.children('.contentTabs');
		btTabs.children('.bt').click(function(){
			btTabs.children('.bt').removeClass('active');
			contents.children('.contentTab').removeClass('active');	
			$(this).addClass('active');
			contents.children('.contentTab:eq('+$(this).index()+')').addClass('active');
		});
		btTabs.children('.bt:first').trigger('click');
	});


	$(".catalogNav li span, .catalogNav li a").click(function(){

		li = $(this).parent("li");

		sub = li.has("ul");

		if(li.hasClass("active")){
			removeActive(li);
		}
		else{
			var neibours = $(li).siblings(".active");
			$(neibours).each(function(){
				removeActive(neibours);
			})

			if(sub.length){
				console.log(sub)
				$(li).addClass("active").children("ul").slideDown();
			}
			else{
				var neibours = $(li).siblings(".selected");
				$(neibours).removeClass("selected")
				$(li).addClass("selected");
			}
		}

		function removeActive(el){
			$(el).removeClass("active").find("ul").slideUp();
			$(el).find(".selected").removeClass("selected");
			$(el).find(".active").removeClass("active").find(".active ul").slideUp();
		}	
	});

	$(".accordion>li>.toSlide").click(function(){
		$(this).siblings(".dropDown").slideToggle();
		$(this).toggleClass("shown");
		$(this).siblings(".showMore").toggleClass("shown");
	})
});