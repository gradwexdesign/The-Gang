function showpopup () {
	var popup = document.getElementById('popup');
	popup.classlist.add('show')
}


function hidepopup () {
	var popup = document.getElementById('popup');
	popup.classlist.remove('show')
}