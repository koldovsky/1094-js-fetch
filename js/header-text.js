const greetings = [
    { message: 'ПРИВІТ!', color: 'red' },
    { message: 'HELLO!', color: 'green' },
    { message: 'HI', color: 'blue' },
    { message: 'GREETINGS', color: 'white' },
    { message: 'ВІТАННЯ', color: 'aqua' }
]

function getRandomEl(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

function updateGreeting() {
    const headerText = document.querySelector('h1');
    const greeting = getRandomEl(greetings);
    headerText.style.color = greeting.color;
    headerText.innerText = greeting.message;
}

updateGreeting();
setInterval(updateGreeting, 3000);