// ================== A1 KING MATKA - ULTRA PRO A7 STYLE ==================

// 12 Hour Clock
function updateClock() {
    const clock = document.getElementById('clock');
    clock.textContent = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
}

// =============== ADMIN CONTROL (Easy Change) ===============
let currentResult = "17";        // ← Yahan result number daal do
let gameName = "NIGHT CHAMP";    // ← Game naam
let resultTime = "21:00";        // ← Result time

function showResultFlash(number) {
    const flash = document.getElementById('result-flash');
    flash.textContent = number;
    flash.style.display = 'block';
    
    setTimeout(() => {
        flash.style.display = 'none';
    }, 15000); // 15 second tak dikhega
}

// =============== TIMETABLE ===============
const timetable = [
    { game: "JAIPUR MATKA", time: "12:55 PM" },
    { game: "SADAR BAZAR", time: "1:30 PM" },
    { game: "GWALIOR", time: "2:30 PM" },
    { game: "DELHI BAZAR", time: "3:00 PM" },
    { game: "SHREE GANESH", time: "4:25 PM" },
    { game: "SURAT BAZAR", time: "5:25 PM" },
    { game: "FARIDABAD", time: "5:55 PM" },
    { game: "FARIDKOT", time: "7:30 PM" },
    { game: "GAZIABAD", time: "9:30 PM" },
    { game: "DWARKA", time: "10:25 PM" },
    { game: "GALI", time: "11:30 PM" },
    { game: "DISAWAR", time: "1:30 AM" }
];

function loadTimetable() {
    const list = document.getElementById('timetable-list');
    list.innerHTML = '';
    timetable.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.game}</strong> — ${item.time}`;
        list.appendChild(li);
    });
}

// Countdown Timer
let timeLeft = 4500; // Change as per need

function updateCountdown() {
    const cd = document.getElementById('countdown');
    const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
    const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    cd.textContent = `${h} ${m} ${s}`;

    if (timeLeft <= 0) {
        showResultFlash(currentResult);
        timeLeft = 7200; // Next game
    }
    timeLeft--;
}

// =============== START EVERYTHING ===============
setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);
updateClock();
loadTimetable();
updateCountdown();

// Dynamic Update
document.getElementById('game-name').textContent = gameName;
document.getElementById('result-time').textContent = resultTime;
