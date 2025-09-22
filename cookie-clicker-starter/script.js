// DOM Elements
const cookieImage = document.getElementById("cookie-image");
const clickCountDisplay = document.getElementById("click-count");
const buyGrandmaBtn = document.getElementById("buy-grandma");
const grandmaCountDisplay = document.getElementById("grandma-count");
const cpsDisplay = document.getElementById("cookies-per-second");

// Game State
let cookies = 0;
let grandmas = 0;
const grandmaCost = 100;
const cookiesPerGrandmaPerSecond = 1;

// Click the cookie to earn cookies
cookieImage.addEventListener("click", () => {
  cookies++;
  updateUI();
});

// Buy grandma
buyGrandmaBtn.addEventListener("click", () => {
  if (cookies >= grandmaCost) {
    cookies -= grandmaCost;
    grandmas++;
    addGrandmaImage();
    updateUI();
  } else {
    alert("Not enough cookies to buy a grandma!");
  }
});

// Passive cookie generation
setInterval(() => {
  cookies += grandmas * cookiesPerGrandmaPerSecond;
  updateUI();
}, 1000); // every second

// Update UI
function updateUI() {
  clickCountDisplay.textContent = cookies;
  grandmaCountDisplay.textContent = grandmas;
  cpsDisplay.textContent = grandmas * cookiesPerGrandmaPerSecond;
}

// Add dynamic grandma image when one is purchased
const grandmaContainer = document.createElement("div");
grandmaContainer.id = "grandma-image-container";
document.querySelector("main").appendChild(grandmaContainer);

function addGrandmaImage() {
  const img = document.createElement("img");
  img.src = "Assets/Grandma.webp"; // ⚠️ update if filename is different
  img.alt = "Grandma";
  img.className = "w-16 h-16 rounded-full shadow m-1";
  grandmaContainer.appendChild(img);
}

// Initialize UI
updateUI();
// === Achievements ===

// Achievement list
const achievements = [
  {
    id: 'first-click',
    title: '👆 First Click',
    description: 'Click the cookie once.',
    check: () => cookies >= 1,
    unlocked: false,
    reward: 10
  },
  {
    id: 'click-100',
    title: '💪 Cookie Novice',
    description: 'Reach 100 cookies.',
    check: () => cookies >= 100,
    unlocked: false,
    reward: 50
  },
  {
    id: 'click-1000',
    title: '🥇 Cookie Expert',
    description: 'Reach 1,000 cookies.',
    check: () => cookies >= 1000,
    unlocked: false,
    reward: 100
  },
  {
    id: 'grandma-1',
    title: '👵 Grandma\'s Helper',
    description: 'Buy 1 grandma.',
    check: () => grandmas >= 1,
    unlocked: false,
    reward: 25
  },
  {
    id: 'grandma-10',
    title: '👵👵 Grandma Army',
    description: 'Buy 10 grandmas.',
    check: () => grandmas >= 10,
    unlocked: false,
    reward: 100
  },
  {
    id: 'cps-10',
    title: '⚙️ Passive Income',
    description: 'Reach 10 cookies per second.',
    check: () => (grandmas * cookiesPerGrandmaPerSecond) >= 10,
    unlocked: false,
    reward: 100
  }
];

// DOM Elements
const toggleAchievementsBtn = document.getElementById('toggle-achievements');
const achievementsPanel = document.getElementById('achievements-panel');
const achievementsList = document.getElementById('achievements-list');

// Toggle Panel
toggleAchievementsBtn.addEventListener('click', () => {
  achievementsPanel.classList.toggle('hidden');
  toggleAchievementsBtn.textContent = achievementsPanel.classList.contains('hidden') ? 'Show Achievements' : 'Hide Achievements';
});

// Display achievement popup
function showPopup(title, reward) {
  const popup = document.createElement('div');
  popup.className = 'fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded shadow-lg';
  popup.textContent = `🎉 Achievement Unlocked: ${title} (+${reward} cookies)`;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}

// Render achievements list
function renderAchievements() {
  achievementsList.innerHTML = '';
  achievements.forEach(a => {
    const li = document.createElement('li');
    li.className = `p-2 rounded ${a.unlocked ? 'bg-green-200' : 'bg-gray-200'} text-sm`;
    li.textContent = `${a.title} — ${a.description}`;
    achievementsList.appendChild(li);
  });
}

// Check for newly unlocked achievements
function checkAchievements() {
  achievements.forEach(a => {
    if (!a.unlocked && a.check()) {
      a.unlocked = true;
      cookies += a.reward;
      showPopup(a.title, a.reward);
    }
  });
  renderAchievements();
}

// Hook into game loop
setInterval(checkAchievements, 1000); // Check every second






