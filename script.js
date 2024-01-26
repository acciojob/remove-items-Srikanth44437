//your JS code here. If required
document.addEventListener("DOMContentLoaded", function(){
	var removeButton = document.getElementById("removeButton");

	removeButton.addEventListener("click", function(){
		var colorSelect = document.getElementById("colorSelect");

		colorSelect.remove(colorSelect.selectedIndex);
	})
});