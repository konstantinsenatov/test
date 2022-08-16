var swiper = new Swiper(".test__swiper", {
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".test__btn-next",
		prevEl: ".test__btn-prev",
	},
	spaceBetween: 50,
	autoHeight: true,
	effect: 'fade',
	allowTouchMove: false,
});

$(document).ready(function() {
	$(document).on('click', '.show-result', function(event) {
		$('.result').addClass('show');
		$('.test__card').addClass('hide');
		$('.test__swiper').slideUp();

	});
	$(document).on('click', '.result__btn', function(event) {
		$('.result').removeClass('show');
		$('.test__card').removeClass('hide');
		$('.test__swiper').slideDown();
		swiper.slideTo(0)
	});
});

$( "#log" ).html( $( ".test__radiobuttons-itemA input:checked" ).length);
$( "#log1" ).html( $( ".test__radiobuttons-itemB input:checked" ).length);
$( "#log2" ).html( $( ".test__radiobuttons-itemC input:checked" ).length);

const test__radiobuttons_itemA = ( $( ".test__radiobuttons-itemA input:checked" ).length);
const test__radiobuttons_itemB = ( $( ".test__radiobuttons-itemB input:checked" ).length);
const test__radiobuttons_itemC = ( $( ".test__radiobuttons-itemC input:checked" ).length);

console.log(test__radiobuttons_itemA);
console.log(test__radiobuttons_itemB);
console.log(test__radiobuttons_itemC);

if (test__radiobuttons_itemA > test__radiobuttons_itemB && test__radiobuttons_itemA > test__radiobuttons_itemC) {
	console.log('A наибольший');
	$('.result1').addClass('active');
	$('.result2').removeClass('active');
	$('.result3').removeClass('active');
} else if (test__radiobuttons_itemB > test__radiobuttons_itemA && test__radiobuttons_itemB > test__radiobuttons_itemC){
	console.log('B наибольший');
	$('.result2').addClass('active');
	$('.result1').removeClass('active');
	$('.result3').removeClass('active');
} else if (test__radiobuttons_itemC > test__radiobuttons_itemA && test__radiobuttons_itemC > test__radiobuttons_itemB){
	console.log('C наибольший');
	$('.result3').addClass('active');
	$('.result1').removeClass('active');
	$('.result2').removeClass('active');
}
$( "input" ).on( "click", function() {
	$( "#log" ).html( $( ".test__radiobuttons-itemA input:checked" ).length);
	$( "#log1" ).html( $( ".test__radiobuttons-itemB input:checked" ).length);
	$( "#log2" ).html( $( ".test__radiobuttons-itemC input:checked" ).length);
	const test__radiobuttons_itemA = ( $( ".test__radiobuttons-itemA input:checked" ).length);
	const test__radiobuttons_itemB = ( $( ".test__radiobuttons-itemB input:checked" ).length);
	const test__radiobuttons_itemC = ( $( ".test__radiobuttons-itemC input:checked" ).length);
	
	console.log(test__radiobuttons_itemA);
	console.log(test__radiobuttons_itemB);
	console.log(test__radiobuttons_itemC);

	if (test__radiobuttons_itemA > test__radiobuttons_itemB && test__radiobuttons_itemA > test__radiobuttons_itemC) {
		console.log('A наибольший');
		$('.result1').addClass('active');
		$('.result2').removeClass('active');
		$('.result3').removeClass('active');
	} else if (test__radiobuttons_itemB > test__radiobuttons_itemA && test__radiobuttons_itemB > test__radiobuttons_itemC){
		console.log('B наибольший');
		$('.result2').addClass('active');
		$('.result1').removeClass('active');
		$('.result3').removeClass('active');
	} else if (test__radiobuttons_itemC > test__radiobuttons_itemA && test__radiobuttons_itemC > test__radiobuttons_itemB){
		console.log('C наибольший');
		$('.result3').addClass('active');
		$('.result1').removeClass('active');
		$('.result2').removeClass('active');
	}
});

