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
    question.innerText = `Vanshika, I was just sitting here thinking about everything, and I realized I don’t say this enough: I am so incredibly grateful that you are my girlfriend. Looking back at everything, especially lately, I’ve realized that I am who I am today because of you. You’ve pushed me to grow, you’ve stood by me, and honestly, no medal or win feels like anything compared to just having you in my life.
I know I’m still learning how to show it properly, but please know that I don't take you for granted. You’re my biggest strength and my favorite part of every day. I can’t be grateful enough for your patience and for the way you love me. I’m so lucky it’s you. I love you more than words can say. ❤️🧿`;
    hint.innerText = "You are my greatest win. 🌸🌸";
    
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

