//Color Array
var bgColor = [
				"red",
				"pink",
				"purple",
				"deep-purple",
				"indigo",
				"blue",
				"light-blue",
				"cyan",
				"teal",
				"green",
				"light-green",
				"lime",
				"yellow",
				"amber",
				"orange",
				"deep-orange",
				"brown",
				"grey",
				"blue-grey"
];
var sampleNote = [
				{
					id: 1,
					position: 1,
					color: 0,
					important: false,
					title: "wololo",
					date: "9/22/2017",
					content:"hello guyz",
				},	{
					id: 1,
					position: 1,
					color: 3,
					important: true,
					title: "Title goes here",
					date: "9/22/2017",
					content:"hi world <br> hello world",
				},
	];

function generateNoteCard(obj, container = "#note-container") {
	var noteContainer = $(container);
	var favorite = "",
		noteContent = "",
		stringHolder = "";
	for(var i in obj) {
		stringHolder =  "<article class='note-card' data-id='" + obj[i].id + 
						"' data-position = '" + obj[i].position + 
						"' data-important='" + obj[i].important + 
						"' data-bg-color='" + bgColor[obj[i].color] + 
						"'><header class='note-header'><h1 class='note-title'>" + obj[i].title + 
						"<br></h1><h4 class='note-date'>" + obj[i].date + 
						"</h4></header><div class='note-content'><p>" + obj[i].content + 
						"</p></div></article>";
		if (obj[i].important) favorite 	+= stringHolder;
		else 			noteContent 	+= stringHolder;
	}
	noteContainer.html(favorite += noteContent);
}

function toggleOverlay(element, overlay, container, method = 'hide') {
	if(element.hasClass('bt-active'))	{
		element.removeClass('bt-active');
		container.addClass("hide");
		overlay.hide();
	} else {
		element.siblings()
			   .removeClass('bt-active');
		element.addClass('bt-active');
		if(method !== "star-note")	{
			container.removeClass("hide");
			overlay.show();
		} else {
			container.addClass("hide");
			overlay.hide();
		}
	}
}

$(function(){
	var noteTitle = $("h1.note-title");
	var xscontainer = $("#xside-container");
	var overlay   = $("#overlay");
	$("#delete-after-load").remove();
	
	// Initializing Stuff
	overlay.hide();
	xscontainer.addClass("hide");
	noteTitle.attr('title', noteTitle.text());
	// Autoresize textarea
	autosize($('textarea'));


	// Getting DOM reference
	var eSplash = document.getElementById("splashscreen");
	// Getting Data
	var adSplash = {
        container: eSplash,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        path: 'splash.json'
    }
    // Creating instance
    var animSplash = bodymovin.loadAnimation(adSplash);
    // Playing it
    animSplash.play();
    // Delete element after play
    animSplash.onComplete = function() {
    	$("#splashscreen").remove();
    };

	
	$(".bt-bar:not(#search-note)").on('click', function(){
						var method = $(this).attr("data-bt-name");
						toggleOverlay($(this), overlay, xscontainer, method);

					});
	$("#overlay, #search-note").on('click', function() {
						$('.bt-bar.bt-active').click();
					});
	generateNoteCard(sampleNote);
});
