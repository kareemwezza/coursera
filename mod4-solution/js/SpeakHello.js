// STEP 2

// STEP 3:

(function() {
	var helloSpeaker = {};
	var speakWord = "Hello";

	// STEP 4:
	
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;
})(); // END OF IIFE
// STEP 5:
