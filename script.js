window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
        typeMessage();
        createBells();
        createFireflies();
    }, 1000);
};

// ==========================
// TYPEWRITER EFFECT
// ==========================
function typeMessage() {
    const text = "FOR MY LILY OF THE VALLEY ❤️";
    const title = document.getElementById("title");
    let i = 0;
    function type() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 140);
        }
    }
    type();
}

// ==========================
// CREATE LILY BELLS
// ==========================
function createBells() {
    document.querySelectorAll(".bells").forEach(group => {

        const count = 7;
        let top = 0;
        let left = 0;

        for (let i = 0; i < count; i++) {

            const stem = document.createElement("div");
            stem.className = "bell-stem";

            const bell = document.createElement("div");
            bell.className = "bell";

            const petal = document.createElement("div");
            petal.className = "petal";

            // Bottom scallops
            for (let j = 1; j <= 5; j++) {
                const scallop = document.createElement("div");
                scallop.className = "scallop sc" + j;
                petal.appendChild(scallop);
            }

            // Petal ridges
            for (let k = 1; k <= 4; k++) {
                const ridge = document.createElement("div");
                ridge.className = "ridge r" + k;
                petal.appendChild(ridge);
            }

            // Flower opening
            const hole = document.createElement("div");
            hole.className = "center-hole";
            petal.appendChild(hole);

            bell.appendChild(petal);
            stem.appendChild(bell);

            // Walk down the raceme, alternating slightly left/right of a
            // central line — like real lily-of-the-valley bells nodding
            // off alternating points along the stem, not stacked on one
            // pivot and not trailing off diagonally.
            top += 24 + Math.random() * 6;
            const side = i % 2 === 0 ? 1 : -1;
            left = 30 + side * (8 + Math.random() * 10);

            stem.style.top = top + "px";
            stem.style.left = left + "px";

            // Bells on the left of centre lean left, right of centre lean
            // right, so each one visibly droops away from the stalk.
            const angle = side * (12 + Math.random() * 14);
            stem.style.transform = `rotate(${angle}deg)`;

            bell.style.animationDelay = (1 + i * 0.12) + "s";

            // Size variation, applied as a CSS custom property so it
            // survives the bellSwing keyframe animation (an inline
            // `transform` here would just get overwritten every frame).
            const scale = (0.85 + Math.random() * 0.3).toFixed(2);
            bell.style.setProperty("--s", scale);

            group.appendChild(stem);
        }
    });
}

// ==========================
// CREATE FIREFLIES
// ==========================
function createFireflies() {
    const container = document.querySelector(".fireflies");
    for (let i = 0; i < 30; i++) {
        const fly = document.createElement("span");
        fly.className = "firefly";
        fly.style.left = Math.random() * 100 + "vw";
        fly.style.top = Math.random() * 100 + "vh";
        fly.style.animationDuration = (6 + Math.random() * 7) + "s";
        fly.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(fly);
    }
}
