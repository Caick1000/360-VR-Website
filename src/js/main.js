// Make arrows scroll to the left and right
$(document).ready(function(){

$('.arrow').click(function() {
	let box = $('.slider');
	let x;
	if ($(this).hasClass('arrow--right')) {
		x = (box.width() / 2.246) + box.scrollLeft() + 4; // '4' based on video spacing in px
		box.animate({
			scrollLeft: x,
		});
	} else {
		x = (box.width() / 2.246) - box.scrollLeft() + 4;
		box.animate({
			scrollLeft: -x,
		});
	}
});

});

const { videos } = require('../videos.json');

function createVideo({ id, title, description, rating }) {
	const slideContent = `
	<div class="video video--${id}">
		<div class="video__image">
			<img src="https://source.unsplash.com/random/380x200" alt="">
		</div>
		<div class="video__legend">
			<h3>${title}</h3>
			<a href="">upvote - ${rating}</a>
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

$('.video').on('mouseover', videoZoom);

function videoZoom() {
	const videoWidth = $(this).width();
	const scaleFactor = 1.5;
	const moveRight = videoWidth * (scaleFactor - 1);
	const moveLeft = -(videoWidth * (scaleFactor - 1) / 2);

	// $('.video ~ .video').css('transform', 'translateX(' + '10' + ')');
	$('.video ~ .video').css('opacity', '0.5');
	console.log($(this));
};