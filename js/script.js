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
					content:"hi mudafukas <br> hello world",
				},
	];

function generateNoteCard(obj, container = "#note-container") {
	var noteContainer = $(container);
	var favorite = "";
	var noteContent = "";
	var stringHolder = ""
	for(var i in obj) {
		stringHolder =  "<article class='note-card' data-id='" + obj[i].id + 
						"' data-position = '" + obj[i].position + 
						"' data-important='" + obj[i].important + 
						"' data-color='" + bgColor[obj[i].color] + 
						"'><header class='note-header'><h1 class='note-title'>" + obj[i].title + 
						"<br></h1><h4 class='note-date'>" + obj[i].date + 
						"</h4></header><div class='note-content'><p>" + obj[i].content + 
						"</p></div></article>";
		if (obj[i].important) favorite 	+= stringHolder;
		else 			noteContent 	+= stringHolder;
	}
	noteContainer.html(favorite += noteContent);
}


$(function(){
	var noteTitle = $("h1.note-title");
	noteTitle.attr('title', noteTitle.text());
	$(".bt-bar:not(#search-note)").on('click', function(){
						method = $(this).attr("data-bt-name");
						if($(this).hasClass('bt-active'))	{
							$(this).removeClass('bt-active')
						} else {
							$(this).siblings().removeClass('bt-active')
							$(this).addClass('bt-active');
						}
					});

	generateNoteCard(sampleNote);
});
