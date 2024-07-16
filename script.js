function isUsername() {
    let username = document.getElementById('username').value;
    return username !== '';
}

function writeErrorMessageUsername() {
    document.getElementById('validate-username').innerText = "Please Enter a Username.";
}

function writeErrorMessagePassword() {
    document.getElementById('validate-password').innerText = "Please Enter a Password.";
}

function isPassword() {
    let password = document.getElementById('password').value;
    return password !== '';
}

function checkInput() {
    let isUsernameValid = isUsername();
    let isPasswordValid = isPassword();
    if (!isUsernameValid || !isPasswordValid) {
        setTimeout(function () {
            window.location.reload();
        }, 5000);
        if (!isUsernameValid)
            writeErrorMessageUsername();
        if (!isPasswordValid)
            writeErrorMessagePassword();
    } else
        window.open('main.html');
}

function ballPool() {
    window.open('https://8ballpool.com/en/game', "8 Ball Pool");
}

function vectaria() {
    window.open('https://poki.com/en/g/vectaria-io', "Vectaria");
}

function tapTapShots() {
    window.open('https://www.crazygames.com/game/tap-tap-shots', "Tap Tap Shots");
}

function warClicks() {
    window.open('https://www.kongregate.com/games/gamexstudio/war-clicks?haref=HP_HNG_war-clicks', "War Clicks");
}

function agar() {
    window.open('https://agar.io/#ffa', "Agar.io");
}

function templeRun2() {
    window.open('https://poki.com/en/g/temple-run-2', "Temple Run 2");
}

function smashKarts() {
    window.open('https://www.crazygames.com/game/smash-karts', "Smash Karts");
}

function animationThrowdown() {
    window.open('https://www.kongregate.com/games/Throwdown/animation-throwdown?haref=HP_HNG_animation-throwdown', "Animation Throwdown");
}

function hillsOfSteel() {
    window.open('https://poki.com/en/g/hills-of-steel', "Hills of Steel");
}

function farmMergeValley() {
    window.open('https://www.crazygames.com/game/farm-merge-valley', "Farm Merge Valley");
}

function sortTheCourt() {
    window.open('https://www.kongregate.com/games/graebor/sort-the-court', "Sort the Court!");
}

function stickDefenders() {
    window.open('https://poki.com/en/g/stick-defenders', "Stick Defenders");
}

function shellShockers() {
    window.open('https://www.crazygames.com/game/shellshockersio', "Shell Shockers");
}

function learnToFly3() {
    window.open('https://www.kongregate.com/games/light_bringer777/learn-to-fly-3', "Learn to Fly 3");
}

function sillySky() {
    window.open('https://poki.com/en/g/silly-sky', "Silly Sky");
}

function mrRacer() {
    window.open('https://www.crazygames.com/game/mr-racer---car-racing', "Mr. Racer");
}