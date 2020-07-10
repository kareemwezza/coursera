(function() {
var gbye = {};
var bye = "Good Bye";
gbye.speak = function (name) {
	console.log(bye + " " + name);
};
window.gbye = gbye;
})();
