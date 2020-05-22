
// STEP 6

// STEP 7: 

(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";

	// STEP 8:

	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	};

	window.byeSpeaker = byeSpeaker;
})(window); // END OF IIFE

// STEP 9: