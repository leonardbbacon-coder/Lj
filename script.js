window.onload = () => {

    const loading = setTimeout(() => {

        document.body.classList.remove("not-loaded");

        // ========= TYPEWRITER =========

        const message = "I LOVE YOU ❤️";

        const title = document.getElementById("title");

        let i = 0;

        function typeWriter(){

            if(i < message.length){

                title.innerHTML += message.charAt(i);

                i++;

                setTimeout(typeWriter,180);

            }

        }

        typeWriter();

        clearTimeout(loading);

    },1000);

};


// =======================
// Random Firefly Movement
// =======================

const fireflies = document.querySelectorAll(".fireflies span");

fireflies.forEach((fly)=>{

    randomMove(fly);

});

function randomMove(fly){

    setInterval(()=>{

        const x = Math.random()*120-60;

        const y = Math.random()*120-60;

        fly.animate([

            {
                transform:`translate(0px,0px)`
            },

            {
                transform:`translate(${x}px,${y}px)`
            }

        ],{

            duration:2500+Math.random()*2500,
            fill:"forwards",
            easing:"ease-in-out"

        });

    },2500);

}


// =======================
// Flower Sway
// =======================

const flowers=document.querySelectorAll(".lily");

flowers.forEach((flower,index)=>{

    flower.animate([

        {
            transform:"rotate(-2deg)"
        },

        {
            transform:"rotate(2deg)"
        },

        {
            transform:"rotate(-2deg)"
        }

    ],{

        duration:5000+index*700,
        iterations:Infinity,
        easing:"ease-in-out"

    });

});


// =======================
// Bell Glow
// =======================

const bells=document.querySelectorAll(".bell");

bells.forEach((bell)=>{

    bell.addEventListener("mouseenter",()=>{

        bell.style.filter="drop-shadow(0 0 15px white)";

    });

    bell.addEventListener("mouseleave",()=>{

        bell.style.filter="none";

    });

});


// =======================
// Twinkling Title
// =======================

setInterval(()=>{

    const title=document.getElementById("title");

    title.animate([

        {
            opacity:1,
            transform:"scale(1)"
        },

        {
            opacity:.75,
            transform:"scale(1.03)"
        },

        {
            opacity:1,
            transform:"scale(1)"
        }

    ],{

        duration:1800,
        easing:"ease-in-out"

    });

},1800);
