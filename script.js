const content = document.getElementById("content");

// Gift Opening
function openGift() {

    content.innerHTML = `
        <div class="fade">
            <h1>😊</h1>
            <h2>Before Opening...</h2>

            <p>Do you promise to smile today?</p>

            <button onclick="promise()">Yes ❤️</button>

            <button id="noBtn" onclick="moveButton()">No 🙈</button>
        </div>
    `;
}

// Moving No Button
function moveButton() {

    const btn = document.getElementById("noBtn");

    btn.style.position = "absolute";
    btn.style.left = Math.random() * 250 + "px";
    btn.style.top = Math.random() * 400 + "px";
}

// Birthday Wish
function promise() {

    content.innerHTML = `
        <div class="fade">

            <h1>🎉 Happy Birthday 🎉</h1>

            <h2 class="name">MADAM GARU ❤️</h2>

            <p>
                Wishing you endless happiness,
                success,
                good health,
                and beautiful memories.
                <br><br>

                May your smile always stay bright. 💖
            </p>

            <button onclick="showGallery()">
                Our Memories 📸
            </button>

        </div>
    `;
}

// Photo Gallery
function showGallery() {

    content.innerHTML = `
        <h2>📸 Our Beautiful Memories</h2>

        <div class="gallery">

            <img src="images/image1.jpeg">

            <img src="images/image2.jpeg">

            <img src="images/image3.jpeg">

        </div>

        <button onclick="showCake()">
            Continue 🎂
        </button>
    `;
}

// Cake Page
function showCake() {

    content.innerHTML = `
        <div class="cake">🎂</div>

        <h2>Make A Birthday Wish ✨</h2>

        <p>Click below to celebrate!</p>

        <button onclick="celebrate()">
            Celebrate 🎊
        </button>
    `;
}

// Confetti
function celebrate() {

    confetti({
        particleCount:200,
        spread:120,
        origin:{y:0.6}
    });

    content.innerHTML = `
        <div class="fade">

            <h1>🎊 Yay!! 🎊</h1>

            <p>

                Today is all about you ❤️

                <br><br>

                May every dream come true.

                Stay happy forever.

            </p>

            <button onclick="showLetter()">
                Read My Letter 💌
            </button>

        </div>
    `;
}

// Letter
function showLetter() {

    content.innerHTML = `
        <div class="secret">

            <h2>💌 Dear MADAM GARU ❤️</h2>

            <p>

            Thank you for being such an amazing person.

            <br><br>

            I hope this birthday brings you

            happiness,

            success,

            peace,

            laughter,

            and countless unforgettable memories.

            <br><br>

            Keep smiling always. 😊

            </p>

        </div>

        <button onclick="showHug()">
            One Last Surprise 🤗
        </button>
    `;
}

// Final Hug
function showHug() {

    createHearts();

    confetti({
        particleCount:300,
        spread:180
    });

    content.innerHTML = `
        <div class="fade">

            <div class="hug">🫂</div>

            <h2>A Warm Hug Just For You ❤️</h2>

            <p>

                Happy Birthday,

                <b>MADAM GARU</b> ❤️

                <br><br>

                Even though I can't be there in person,

                please accept this warm virtual hug.

                🤗💖

                <br><br>

                May your heart always be filled with happiness.

                <br><br>

                Stay blessed,

                stay healthy,

                and keep smiling forever.

                ❤️❤️❤️

            </p>

            <h2>🎂 Have an Amazing Birthday! 🎉</h2>

        </div>
    `;
}

// Floating Hearts
function createHearts() {

    for(let i=0;i<35;i++){

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="💖";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.animationDelay=Math.random()*2+"s";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },5000);

    }

}
