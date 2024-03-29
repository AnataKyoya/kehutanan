const foto = document.querySelectorAll(".foto-galeri"),
    show = document.querySelector(".show-img");

for (let i = 0; i < foto.length; i++) {
    const source = foto[i].querySelector("img");
    foto[i].addEventListener("click", (e) => {
        e.preventDefault();

        show.classList.remove("hide");
        show.querySelector(".img img").src = source.src;
    });
}

show.addEventListener("click", (e) => {
    show.classList.add("hide");
});
