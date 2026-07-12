const scene = document.querySelector(".scene");

scene.addEventListener("click", () => {
    scene.classList.toggle("bloom");
});

// Small floating animation
const flowers = document.querySelectorAll(".flower");

flowers.forEach((flower, i) => {
    flower.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-4px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 1800 + i * 250,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
