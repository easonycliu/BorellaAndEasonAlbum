import { isTokenSet } from "../js/auth.js"

if (location.pathname.split("/").pop() === "home.html") {
	document.getElementById("photoCheck").onclick = function() {
		if (isTokenSet()) {
			location.href = "../pages/album.html";
		}
	};
}

