// Make arrows scroll to the left and right

$(document).ready( () => {

$('.arrow img').click( (e) => {
	console.log(e.target);
	let parent = e.target.closest('.slider').classList[1];
	let box = $('.'+parent+'');
	let x;
	if ($(e.target.parentElement).hasClass('arrow--right')) {
		console.log('right');
		x = (box.width() / 2.246) + box.scrollLeft() + 6; // '6' based on video spacing in px
		box.animate({
			scrollLeft: x,
		});
	} else {
		console.log('left');
		x = (box.width() / 2.246) - box.scrollLeft() + 6;
		box.animate({
			scrollLeft: -x,
		});
	}
});

});

const { videos } = require('../videos.json');

function createVideo({ id, title, description, rating }) {
	const slideContent = `
	<div class="video" id="video--${id}">
		<div class="video__image">
			<img src="https://source.unsplash.com/random?sig=${id}" alt="">
		</div>
		<div class="video__legend">
			<h3>${title}</h3>
			<a href="">upvote: ${rating}</a>
			<p>${description}</p>
		</div>
	</div>
	`

	$('.slider').append(slideContent);

}

// Generator
function* entries(obj) {
	for (let key of Object.keys(obj)) {
		yield [key, obj[key]];
	}
}

for (let [key, value] of entries(videos)) {
	createVideo(value);
}

const delay = 200;
let timeOut;

$('.video').hover(mouseIn, mouseOut);
$('.video').on('click', showVideo);

function mouseIn(e) {
	timeOut = setTimeout(() => {
	const video = new Video(1.5, $(this).width());
	let id = ($(this)[0].id);
	let parent = e.target.closest('.slider').classList[1];
	
	for (let i = 1; i < $('.'+parent+' .video').length+1; i++) {
		let currentId = Number(id.match(/\d$/)[0]);
		if (i < currentId) {
			transform('.'+parent+' #video--'+i+'', 'translateX('+video.moveLeft+'px) scale(1)');

		} else if (i > currentId) {
			transform('.'+parent+' #video--'+i+'', 'translateX('+video.moveRight+'px) scale(1)');

		} else if (currentId == 1) {
			$(this).css('transform-origin', 'left');
			$(this).animate({marginRight: video.moveRight+2}, 0);

		} else if (currentId == $('.'+parent+' .video').nextAll().length+1) {
			$(this).css('transform-origin', 'right');
			// $(this).animate({marginRight: -video.moveRight-2}, 0);
		} 

		transform($(this), 'translateX(0px) scale(1.5)');
	}
	
	// scale($(this), 1.5);

	changeOpacity('0.5', '.'+parent+' .video');
	changeOpacity('1', $(this));
	changeOpacity('0', '.'+parent+' .arrow');
	toggleVideoLegend($(this).find('.video__legend'), '1');
	}, delay);
}

function mouseOut(e) {
	let parent = e.target.closest('.slider').classList[1];

	setTimeout(() => {
		transform('.video', 'translateX(0) scale(1)');
	}, delay);
	clearTimeout(timeOut);
	
	$('.video').css('margin-right', '3px');
	$('.video:first').css('margin-left', '0');

	changeOpacity('1', '.video');
	changeOpacity('1', '.'+parent+' .arrow');
	toggleVideoLegend('.video__legend', '0');
}

function showVideo({ id, title, description, rating }) {
	let parent = $(this).closest('.slider__controls')[0];
	console.log(parent);
	const slideContent = `
	<div class="slider__big" id="big--${id}">
		<div class="video__image">
			<img src="https://source.unsplash.com/random?sig=${id}" alt="">
		</div>
		<div class="video__legend">
			<h3>${title}</h3>
			<a href="">upvote: ${rating}</a>
			<p>${description}</p>
		</div>
	</div>
	`

	// $(parent).append(slideContent);

}

function changeOpacity(op, el) {
	$(el).css('opacity', op);
}

function transform(el, x) {
	$(el).css({ transform: x });
}

function scale(el, n) {
	$(el).css({ scale: n });
}

function toggleVideoLegend(el, opacity) {
	$(el).css('opacity', opacity);
}
