export function isTokenSet() {
	return localStorage.getItem("tokenValue") !== null;
}

export function setTokenValue(newTokenValue) {
	if (!isTokenSet()) {
		localStorage.setItem("tokenValue", newTokenValue);
	}
}

export function getTokenValue() {
	return localStorage.getItem("tokenValue");
}

if (location.pathname.split("/").pop() === "auth.html") {
	document.getElementById("tokenSubmit").onclick = function() {
		setTokenValue(document.getElementById("tokenInput").value);
		location.href = "../pages/home.html";
	};
}

