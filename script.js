window.onload = () => {

    setTimeout(() => {

        document.body.classList.remove("not-loaded");

        typeMessage();

        createBells();

        createFireflies();

    },1000);

};

// ==========================
// TYPEWRITER
// ==========================

function typeMessage(){

    const text = "FOR MY LILY OF THE VALLEY ❤️";

    const title = document.getElementById("title");

    let i = 0;

    function type(){

        if(i < text.length){

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,140);

        }

    }

    type();

}

// ==========================
// CREATE FLOWERS
// ==========================

function createBells(){

    document.querySelectorAll(".bells").forEach(group=>{

        let y = 0;

        for(let i=0;i<12;i++){

            const stem = document.createElement("div");
            stem.className = "bell-stem";

            const bell = document.createElement("div");
            bell.className = "bell";

            const petal = document.createElement("div");
            petal.className = "petal";

            for(let j=1;j<=5;j++){

                const s=document.createElement("div");

                s.className="scallop sc"+j;

                petal.appendChild(s);

            }

            const hole=document.createElement("div");

            hole.className="center-hole";

            petal.appendChild(hole);

            bell.appendChild(petal);

            stem.appendChild(bell);

            // Random placement

            y += 18 + Math.random()*8;

            stem.style.top = y+"px";

            stem.style.left = (i*11)+"px";

            stem.style.transform =
            `rotate(${25-Math.random()*55}deg)`;

            bell.style.animationDelay =
            (1+i*.12)+"s";

            bell.style.transform =
            `scale(${0.88+Math.random()*0.3})`;

            group.appendChild(stem);

        }

    });

}

// ==========================
// FIREFLIES
// ==========================

function createFireflies(){

    const container=document.querySelector(".fireflies");

    for(let i=0;i<45;i++){

        const fly=document.createElement("span");

        fly.className="firefly";

        fly.style.left=Math.random()*100+"vw";

        fly.style.top=Math.random()*100+"vh";

        fly.style.animationDuration=
        (6+Math.random()*7)+"s";

        fly.style.animationDelay=
        Math.random()*5+"s";

        container.appendChild(fly);

    }

}
