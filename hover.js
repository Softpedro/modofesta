


// BOTONES MENU
// $('.wrap-bt')
// 	.mouseover(function() {
// 	    $(this).find(".ico-us").addClass('over');
// 	    $(this).find(".bt-text").addClass('over');
// 	})
//
// 	.mouseout(function()  {
// 	    $(this).find(".ico-us").removeClass('over');
// 	    $(this).find(".bt-text").removeClass('over');
// 	});




// BOTONES SERVICIOS
// $('.bt-decoracion')
// 	.mouseover(function() {
// 	    $(this).find(".bt-sombra").addClass('over');
// 	    $(this).find(".titulo-bt").addClass('over');
// 	})
//
// 	.mouseout(function()  {
// 	    $(this).find(".bt-sombra").removeClass('over');
// 	    $(this).find(".titulo-bt").removeClass('over');
// 	});


// $('.bt-pina')
// 	.mouseover(function() {
// 	    $(this).find(".bt-sombra").addClass('over');
// 	    $(this).find(".titulo-bt").addClass('over');
// 	})
//
// 	.mouseout(function()  {
// 	    $(this).find(".bt-sombra").removeClass('over');
// 	    $(this).find(".titulo-bt").removeClass('over');
// 	});
//
//
// $('.bt-mobi')
// 	.mouseover(function() {
// 	    $(this).find(".bt-sombra").addClass('over');
// 	    $(this).find(".titulo-bt").addClass('over');
// 	})
//
// 	.mouseout(function()  {
// 	    $(this).find(".bt-sombra").removeClass('over');
// 	    $(this).find(".titulo-bt").removeClass('over');
// 	});


$(window).on('load', function(){
	$('#wrap').addClass('active')
})
$(function(){
	$('body').on('click', '.tabs-int', function(e){
		e.preventDefault()
		var id = $(this).attr('id')
		console.log(id, 'fnfnc')
		$('.tabs-int').removeClass('active')
		$(this).addClass('active')
		$('.wrap-cnt-item').removeClass('active')
		$('.wrap-cnt-item[data-id="' + id + '"]').addClass('active')

	})

	$('body').on('click', '.bg-link', function(e){
		e.preventDefault();
		let bg = $(this).attr('data-bg')
		$('.festa-bg').css('background-image', 'url("' + bg + '")');
		$('.bg-link').removeClass('active')
		$(this).addClass('active')
	})
})

//tabs




//SPAs
function loadPage(src, state) {
	let $html = $('html');
	$html.addClass('load-page');
	console.log('fnc')
	$.ajax(src).done(function (data) {
		console.log('ajax')
		$(window).scrollTop(0);

		var parser = new DOMParser(),
			htmlDoc = parser.parseFromString(data, "text/html"),
			content = htmlDoc.getElementById('wrap'),
			$wrap = $('#wrap');
		if (state)
			history.pushState({page: src}, "page", src);
		$wrap.html(content.innerHTML);
		// binding($wrap);
	}).always(function () {
		$('#wrap').addClass('active')
		$('body').removeAttr('style')
		$('.product-carousel').length > 0 ? lnz_slider() : '';
	});
}

function binding(element) {
	console.log('bind')
	$('body').on('click', '.spa', function(event) {
		event.preventDefault();
		console.log('spa')
		$('#wrap').removeClass('active')
		// $('body').css('pointer-events', 'none')
		loadPage(this.href, true);
		// return
	});
}
binding($('html'));
window.addEventListener('popstate', function(event) {
	loadPage(document.location.href, false);
}, false);

function lnz_slider(){
	$('.product-carousel').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<i class="arrow right">',
		prevArrow: '<i class="arrow left">',
		autoplay: true,
		fadeSpeed: 5,
		autoplayHoverPause: false,
		infinite: true,
		responsive: [
			{
				breakpoint: 1324,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					fadeSpeed: 50,
					autoplayHoverPause: false,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					fadeSpeed: 50,
					autoplayHoverPause: false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
}
lnz_slider()
