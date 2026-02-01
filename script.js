const name = "Nirali"; // You can change this anytime
const question = document.getElementById("question");
const hint = document.getElementById("hint");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

// ====== MOVE NO BUTTON FUNCTION ======
function moveNoButton() {
    // Calculate random positions, keeping the button within viewable screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Event Listeners for "No" (Desktop + Mobile)
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevents clicking on mobile
    moveNoButton();
});

// ====== YES BUTTON LOGIC ======
yesBtn.addEventListener("click", () => {
    // 1. Change Text
    question.innerText = `YAYYYY little vanshu 💖 You just made me the happiest person!`;
    hint.innerText = "I love you! 🌸";
    
    // 2. Hide Buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // 3. Play Music
    music.play().catch(error => {
        console.log("Autoplay blocked, but since user clicked, it should play now.");
    });

    // 4. Confetti Explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});