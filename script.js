const container = document.querySelector('.container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let scaleCount = 0; // Initialize a variable to keep track of the number of times btn2 is clicked
let clickCount = 0; // Initialize a variable to keep track of the number of clicks
let messageCount1 = 0; // Counter for the first message
let messageCount2 = 0; // Counter for the second message
let messageCount3 = 0; // Counter for the third message
let messageCount4 = 0; 
let messageCount5 = 0; 
let messageCount6 = 0;
let messageCount7 = 0;
let messageCount8 = 0;
let messageCount9 = 0;
let messageCount10 = 0;
let messageCount11 = 0;

window.onload = function() {
    alert("Welcome my love! Please turn on/up your volume.");
};

// Function to get random position within container
function getRandomPosition() {
    const containerRect = container.getBoundingClientRect();
    const btn2Rect = btn2.getBoundingClientRect();

    const maxX = containerRect.width - btn2Rect.width;
    const maxY = containerRect.height - btn2Rect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

// Function to set btn2 position without transition
function setBtn2Position() {
    const { x, y } = getRandomPosition();
    btn2.style.transition = 'none'; // Remove transition
    btn2.style.left = x + 'px';
    btn2.style.top = y + 'px';
    // Re-enable transition after a short delay to avoid it being applied immediately on subsequent clicks
    setTimeout(() => {
        btn2.style.transition = ''; // Reset transition to default
    }, 100);
}

// Function to scale up btn1
function scaleUpBtn1() {
    scaleCount++; // Increment scaleCount
    const scaleFactor = 1 + (.20 * scaleCount); // Incrementally increase the scale factor
    btn1.style.transform = `scale(${scaleFactor})`;
}

// Function to display text after a certain number of clicks
function displayTextAfterClicks() {
    clickCount++; // Increment clickCount
    
    if (clickCount % 5 === 0) { // Check if clickCount is a multiple of 5
        messageCount1++; // Increment messageCount1
        if (messageCount1 === 1) {
            const messageContainer = document.getElementById('messageContainer');
            messageContainer.innerHTML += `<p>HELLO?!?!!</p>`; // Add message to the container
        }
    }

    if (clickCount % 7 === 0) { // Check if clickCount is a multiple of 10
        messageCount2++; // Increment messageCount2
        if (messageCount2 === 1) {
            const messageContainer = document.getElementById('messageContainer1');
            messageContainer.innerHTML += `<p>Hindi moko love?:((</p>`; // Add message to the container
        }
    }

    if (clickCount % 9 === 0) { // Check if clickCount is a multiple of 15
        messageCount3++; // Increment messageCount3
        if (messageCount3 === 1) {
            const messageContainer = document.getElementById('messageContainer2');
            messageContainer.innerHTML += `<p>luhh...</p>`; // Add message to the container
        }
    }

    if (clickCount % 11 === 0) { // Check if clickCount is a multiple of 15
        messageCount4++; // Increment messageCount3
        if (messageCount4 === 1) {
            const messageContainer = document.getElementById('messageContainer3');
            messageContainer.innerHTML += `<p>iiyak akoo:((</p>`; // Add message to the container
        }
    }

    if (clickCount % 13 === 0) { // Check if clickCount is a multiple of 15
        messageCount5++; // Increment messageCount5
        if (messageCount5 === 1) {
            const messageContainer = document.getElementById('messageContainer4');
            const img = document.createElement('img');
            img.src = 'Images/dead.jpg';
            messageContainer.appendChild(img);
        }
    }

    if (clickCount % 14 === 0) { // Check if clickCount is a multiple of 15
        messageCount6++; // Increment messageCount3
        if (messageCount6 === 1) {
            const messageContainer = document.getElementById('messageContainer5');
            messageContainer.innerHTML += `<p>WHY IS U TORTURING <br> ME LIKE THIS:((</p>`; // Add message to the container
        }
    }

    if (clickCount % 15 === 0) { // Check if clickCount is a multiple of 15
        messageCount7++; // Increment messageCount3
        if (messageCount7 === 1) {
            const messageContainer = document.getElementById('messageContainer6');
            messageContainer.innerHTML += `<p>pain!</p>`; // Add message to the container
        }
    }

    if (clickCount % 16 === 0) { 
        messageCount8++; 
        if (messageCount8 === 1) {
            const messageContainer = document.getElementById('messageContainer7');
            messageContainer.innerHTML += `<p>pighati!!</p>`; 
        }
    }

    if (clickCount % 17 === 0) { 
        messageCount9++; 
        if (messageCount9 === 1) {
            const messageContainer = document.getElementById('messageContainer8');
            messageContainer.innerHTML += `<p>hinanakit!</p>`; 
        }
    }

    if (clickCount % 18 === 0) { 
        messageCount10++; 
        if (messageCount10 === 1) {
            const messageContainer = document.getElementById('messageContainer9');
            const img = document.createElement('img');
            img.src = 'Images/sad.jpeg';
            messageContainer.appendChild(img);
        }
    }   

    if (clickCount % 19 === 0) { 
        messageCount11++; 
        if (messageCount11 === 1) {
            const messageContainer = document.getElementById('messageContainer10');
            messageContainer.innerHTML += `<p>ahh ganun?</p>`; // Add message to the container
        }
    }

    if (clickCount % 20 === 0) { // Check if clickCount is a multiple of 5
        switch (clickCount / 20) { // Determine which set it is based on clickCount
            case 1:
                alert("It won't stop, believe me.");
                break;
            case 2:
                alert("Just click it:))");
                break;
            case 3:
                alert("Fine, as you wish.");
                break;
            case 4:
                alert("STILLL?!?!?!!");
                break;
            case 5:
                alert("Its either you or the button.");
                break;
        }}
}

btn2.addEventListener('click', () => {
    setBtn2Position(); // Set btn2 position to a random position without transition
    scaleUpBtn1(); // Scale up btn1 when btn2 is clicked
    displayTextAfterClicks(); // Display text after a certain number of clicks
});

// Reset btn1 when btn2 loses focus
btn2.addEventListener('blur', () => {
    resetBtn1();
});
