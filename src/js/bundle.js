(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Make arrows scroll to the left and right

$(document).ready( () => {

$('.arrow').click( () => {
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
	<div class="video" id="video--${id}">
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

$('.video').hover(mouseIn, mouseOut);


function mouseIn() {
	const video = new Video(1.5, $(this).width());
	let id = ($(this)[0].id);
	
	for (let i = 1; i < $('.video').length; i++) {
		let currentId = Number(id.match(/\d$/)[0]);
		if (i < currentId) {
			moveX('#video--'+i+'', 'translateX('+video.moveLeft+'px)');

		} else if (i > currentId) {
			moveX('#video--'+i+'', 'translateX('+video.moveRight+'px)');

		}

		scale($(this), 1.5);
	}

	$('.video').css('opacity', 0.5);
	changeOpacity('1', $(this));

	toggleVideoLegend($(this).find('.video__legend'), '1');
}

function mouseOut() {
	// const video2 = new Video(1.5, $(this).width());

	moveX('.video', 0);
	changeOpacity('1', '.video');
	toggleVideoLegend('.video__legend', '0');
}

function changeOpacity(op, el) {
	$(el).css('opacity', op);
}

function moveX(el, x) {
	$(el).css({ transform: x });
}

function scale(el, n) {
	$(el).css({ scale: n });
}

function toggleVideoLegend(el, opacity) {
	$(el).css('opacity', opacity);
}

// function videoZoom() {
// 	const videoWidth = $(this).width();
// 	const scaleFactor = 1.5;
	// const moveRight = videoWidth * (scaleFactor - 1);
// 	const moveLeft = -(videoWidth * (scaleFactor - 1) / 2);

// 	$('.video ~ .video').css('width', 'translateX(10px)');
// 	$('.video ~ .video').css('opacity', '0.5');
// };

// $('body').on('mouseenter', '.video', videoZoom);

// function videoZoom() {
// 	const videoWidth = $(this).width();
// 	const scaleFactor = 1.5;
// 	const moveRight = videoWidth * (scaleFactor - 1);
// 	const moveLeft = -(videoWidth * (scaleFactor - 1) / 2);

// 	$('.video ~ .video').css('width', 'translateX(10px)');
// 	$('.video ~ .video').css('opacity', '0.5');
// };
},{"../videos.json":2}],2:[function(require,module,exports){
module.exports={
  "videos": [
    {       
      "id" : "1",
      "title" : "Filme 1",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "2",
      "title" : "Filme 2",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "3",
      "title" : "Filme 3",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "4",
      "title" : "Filme 4",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "5",
      "title" : "Filme 5",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "6",
      "title" : "Filme 6",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "7",
      "title" : "Filme 7",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    },
    { 
      "id" : "8",
      "title" : "Filme 8",
      "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem ducimus id?",
      "rating" : "10"
    }
  ]
}
},{}]},{},[1]);