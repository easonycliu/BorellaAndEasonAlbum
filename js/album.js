import { getTokenValue } from "../js/auth.js"

function printToken(tokenValue) {
	var tokenPrintDiv = document.createElement("div");
	tokenPrintDiv.id = "tokenPrint";
	const tokenPrintContent = document.createTextNode("Hello " + tokenValue);
	tokenPrintDiv.appendChild(tokenPrintContent);
	const tokenPrintUnderDiv = document.getElementById("tokenSubmit");
	const sidemenuDiv = tokenPrintUnderDiv.parentNode;
	sidemenuDiv.insertBefore(tokenPrintDiv, tokenPrintUnderDiv.nextSibling);
}

function fetchWithAuthentication(url, tokenValue) {
	return fetch(url, {
		headers: {
			"Accept": "application/vnd.github+json",
			"Authorization": "Bearer " + tokenValue,
			"X-GitHub-Api-Version": "2022-11-28"
		}
	});
}

async function printPhotos(tokenValue) {
	// Fetch the image.
	const baseUrl = "https://api.github.com/repos/easonycliu/BorellaAndEasonPhotos/contents/"
	const response = await fetchWithAuthentication(
		baseUrl, tokenValue
	);
	const responseJson = await response.json();
	responseJson.forEach(photoMetadata => {
		if (photoMetadata.path.endsWith(".heic")) {
			printPhoto(tokenValue, baseUrl, photoMetadata.path);
		}
	});
}

async function printPhoto(tokenValue, baseUrl, imagePath) {
	// Fetch the image.
	const response = await fetchWithAuthentication(
		baseUrl + imagePath, tokenValue
	);
	const responseJson = await response.json();
	const objectUrl = "data:image/png;base64," + responseJson.content;

	const imageElementDiv = document.createElement('div');
	imageElementDiv.className = "griditem";
	const imageElement = document.createElement('img');
	imageElement.src = objectUrl;
	imageElementDiv.appendChild(imageElement)
	const imageContainerDiv = document.getElementsByClassName("gridcontainer")[0];
	imageContainerDiv.appendChild(imageElementDiv);
}

printPhotos(getTokenValue());

