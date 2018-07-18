(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
