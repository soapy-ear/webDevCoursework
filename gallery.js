// Main image //

function showImage(imageSrc, description) {
	// Set the selected image to be the main focus
	document.getElementById("selectedImage").src = imageSrc;
	// Set the description of the image
	document.getElementById("imageDescription").innerHTML = description;
}

// Font changing buttons //
var imageDescription = document.getElementById("imageDescription");

document.getElementById("bigButton").addEventListener("click", function() {
	imageDescription.style.fontSize = "24px";
});

document.getElementById("mediumButton").addEventListener("click", function() {
	imageDescription.style.fontSize = "20px";
});

document.getElementById("smallButton").addEventListener("click", function() {
	imageDescription.style.fontSize = "16px";
});

// Colour changing buttons //

function changeColorScheme(color) {
	const body = document.querySelector('body');
  
	switch(color) {
		case 'blue':
			body.style.backgroundColor = '#0099cc';
			body.style.color = '#fff';
			break;
		case 'green':
			body.style.backgroundColor = '#66cc66';
			body.style.color = '#000';
			break;
		case 'purple':
			body.style.backgroundColor = '#993399';
			body.style.color = '#fff';
			break;
		case 'random':
			const randomColor = Math.floor(Math.random() * 16777215).toString(16);
			body.style.backgroundColor = '#' + randomColor;
			body.style.color = '#fff';
			break;
		default:
			body.style.backgroundColor = '#fff';
			body.style.color = '#000';
	}
}