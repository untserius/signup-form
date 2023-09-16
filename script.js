document.addEventListener("DOMContentLoaded", function () {
	const createPassInput = document.getElementById("cpass");
	const confirmPassInput = document.getElementById("cpass2");
	const passwordError = document.getElementById("password-error");
	const form = document.querySelector("form");

	form.addEventListener("submit", function (event) {
		if (createPassInput.value !== confirmPassInput.value) {
			event.preventDefault();
			passwordError.textContent = "Passwords do not match.";
		}
	});
});
