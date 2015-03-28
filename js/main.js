function toggleServices(e){
	e.preventDefault();
	var target = e.currentTarget.href;
		target = '#' + target.split('#')[1];
	
	var $active = $('.services.active');

	if($active.length > 0){
		$active.fadeOut(100, function(){
			$(target).addClass('active').fadeIn(100);	
		}).removeClass('active');
	} else {
		$('.content').fadeOut(100, function(){
			$(target).addClass('active').fadeIn(100);
		});
	}
}

$('document').ready(function(){
	$('#services li a').on('click', toggleServices);
});