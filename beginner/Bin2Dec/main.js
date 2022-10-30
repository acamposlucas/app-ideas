const input = document.querySelector("input");
const result = document.getElementById("result");

input.addEventListener("input", () => {
	const regex = new RegExp("^[0-1]+$");
	const binary = input.value;
	let decimal = null;
	if (!regex.test(binary) || binary == "") return;

	for (let i = 0; i < binary.length; i++) {
		decimal += +binary.charAt(i) * Math.pow(2, binary.length - (i + 1));
	}

	return (result.innerText = decimal ? decimal : "37");
});
