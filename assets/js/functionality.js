//To cross out list items

$('ul').on('click','li', function(){
	$(this).toggleClass('completed');
});

// To delete list items

$('ul').on('click','span', function(event){
	$(this).parent().fadeOut(350, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// To add list items

$('input').on('keypress', function(event){
	if(event.which === 13){
		listItem = $(this).val();
		$('input').val("");
		
		$('ul').append("<li><span>X</span> " + listItem + "</li>");

	}
})