//your JS code here. If requi
document.addEventListener("DOMContentLoaded", function(){
	var removeButton = document.getElementById("removeButton");

	removeButton.addEventListener("click", function(){
		var colorselect = document.getElementById("colorSelect");

		colorselect.remove(colorselect.startedIndex);
	})
})