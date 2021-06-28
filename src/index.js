const tocButton = document.querySelector(".toc-button");
const tocMenu = document.querySelector(".toc-menu");
tocButton.addEventListener("click", function () {
	tocMenu.classList.toggle("show");
});
