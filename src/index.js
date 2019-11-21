console.log("%c HI", "color: firebrick");

const dogImages = document.querySelector("#dog-image-container");
const dogBreedList = document.querySelector("#dog-breeds");
let doggieArray = [];

document.addEventListener("DOMContentLoaded", () => {
	fetch("https://dog.ceo/api/breeds/image/random/4")
		.then(res => res.json())
		.then(res => {
			const dogList = document.createElement("ul");
			res.message.forEach(dogImage => {
				const doggieList = document.createElement("li");
				const doggie = document.createElement("img");
				doggie.setAttribute("src", `${dogImage}`);
				doggieList.append(doggie);
				dogList.append(doggieList);
			});
			dogImages.append(dogList);
		});

	fetch("https://dog.ceo/api/breeds/list/all")
		.then(res => res.json())
		.then(res => {
			for (let key in res.message) {
				doggieArray.push(key);
			}
			doggieArray.forEach(dogBreed => {
				let doggieBreedList = document.createElement("li");
				doggieBreedList.textContent = dogBreed;
				dogBreedList.append(doggieBreedList);
			});
			console.log(dogBreedList);
			handleColor();
		});
});

let handleColor = breed => {
	let individualBreed = dogBreedList.querySelectorAll("li");
	individualBreed.forEach(breed => {
		breed.addEventListener("click", function() {
			if (breed.style.color === "crimson") {
				breed.style.color = "black";
			} else {
				breed.style.color = "crimson";
			}
		});
	});
};

// query Select select tag
const select = document.querySelector("#breed-dropdown");
const selectOption = select.querySelectorAll("option");

select.addEventListener("change", function(e) {
	let dogUl = document.querySelector("#dog-breeds");
	let individualBreed = dogUl.querySelectorAll("li");
	let newList = document.createElement("li");
	individualBreed.forEach(breed => {
		breed.remove();
	});
	doggieArray.filter(doggies => {
		if (doggies[0] === e.target.value) {
			newList.textContent = doggies;
			dogUl.append(newList);
		}
	});
});

// remove existing list

// select old ul and create new li

// startsWith([breed name]) => true

// append it  to new li

// then append it to the ul
