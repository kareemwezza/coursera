(function() {
var shello = {};
var bye = "Good Bye";
shello.speak = function (name) {
	console.log(bye + " " + name);
};
window.shello = shello;
})();