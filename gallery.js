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

const colors = ["red", "orange", "yellow", "indigo", "violet", "pink", "gray", "teal", "gold", "magenta"];

function changeColor(color) {
	const body = document.querySelector('body');
  
	switch(color) {
		case 'blue':
			body.style.backgroundColor = 'blue';
			body.style.color = 'white';
			break;
		case 'green':
			body.style.backgroundColor = 'green';
			body.style.color = 'black';
			break;
		case 'purple':
			body.style.backgroundColor = 'purple';
			body.style.color = 'white';
			break;
		case 'random':
			body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
			body.style.color = 'white';
			break;
	}
}