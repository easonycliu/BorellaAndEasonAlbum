var tokenValue = "";

document.getElementById("tokenSubmit").onclick = function() {
	tokenValue = document.getElementById("tokenInput").value;
	location.href = "../pages/album.html";
	console.log(tokenValue);
};

export function getTokenValue() {
	return tokenValue;
}

