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


var note = {
	id: 0,
	color: 0,
	date: "9/22/2017",





};

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
});
