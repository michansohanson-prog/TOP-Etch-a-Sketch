const container = document.querySelector("#main-container");
const resButton = document.querySelector("#res-btn");

function createGrid(side) {
	container.innerHTML = "";

	let resolution = side * side;
	const pix = {};

	for (let i = 0; i < resolution; i++) {
		let size = 800 / side;
		pix[i] = document.createElement("div");
		pix[i].style.width = `${size}px`;
		pix[i].style.height = `${size}px`;
		pix[i].style.outline = "1px solid black";
		pix[i].style.backgroundColor = "black";
		pix[i].style.opacity = "0";
		pix[i].addEventListener("mouseover", function (e) {
			if (e.buttons === 0) {
				let currentOp = parseFloat(pix[i].style.opacity) || 0;
				if (currentOp < 1) {
					currentOp += 0.1;
					pix[i].style.opacity = currentOp;
				}
			}
		});
		container.appendChild(pix[i]);
	}
}
createGrid(16);

resButton.addEventListener("click", () => {
	let newRes = prompt("How many squares per side? (1 to 100)");
	let newGrid = parseInt(newRes);
	if (newGrid > 0 && newGrid <= 100) {
		createGrid(newGrid);
	} else if (newGrid !== null) {
		alert("Please enter a valid input (1 to 100)");
	}
});
