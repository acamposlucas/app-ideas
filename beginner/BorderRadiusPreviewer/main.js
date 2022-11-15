const box = document.getElementById("box");
const rounded_tl = document.getElementById("rounded-tl");
const rounded_t = document.getElementById("rounded-t");
const rounded_bl = document.getElementById("rounded-bl");
const rounded_b = document.getElementById("rounded-b");
const clipboard = document.getElementById("clipboard");
const css = document.getElementById("css");

rounded_tl.addEventListener("input", () => {
	const value = `${rounded_tl.value}`;

	box.style.borderTopLeftRadius = `${value}px`;
	css[0] = value;
});

rounded_t.addEventListener("input", () => {
	const value = `${rounded_t.value}`;
	box.style.borderTopRightRadius = `${value}px`;
	css[1] = value;
});

rounded_bl.addEventListener("input", () => {
	const value = `${rounded_bl.value}`;
	box.style.borderBottomLeftRadius = `${value}px`;
	css[2] = value;
});

rounded_b.addEventListener("input", () => {
	const value = `${rounded_b.value}`;
	box.style.borderBottomRightRadius = `${value}px`;
	css[3] = value ? value : "";
	console.log(css.join(" "));
});

textarea.addEventListener;

function copyToClipboard() {
	const borderRadius = css.join("px ");
	navigator.clipboard.writeText(`border-radius: ${borderRadius}`);

	alert("Copied to clipboard: " + `border-radius: ${borderRadius}`);
}
