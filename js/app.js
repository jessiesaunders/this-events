//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName("navi");

for(var i = 0; i<navElem.length; i++){
	navElem[i].addEventListener("click", showSecretContents);
}

function showSecretContents(){
//console.log(this.innerHTML);

var navItem = this.querySelectorAll(".inner")[0];
if(navItem.style.display === "none"){
	navItem.style.display = "block";
	} else{
		navItem.style.display = "none";
	}
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var hElem = document.getElementsByClassName("name");

for(var i = 0; i<hElem.length; i++){
	hElem[i].addEventListener("click", showSecretMenuItem);
}

function showSecretMenuItem(){
//console.log(this.innerHTML);

var menuItem = this.querySelectorAll(".menu")[0];
if(menuItem.style.display === "none"){
	menuItem.style.display = "block";
	} else{
		menuItem.style.display = "none";
	}
}