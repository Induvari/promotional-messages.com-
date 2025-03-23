// Toggle chatbot visibility
function toggleChat() {
    const chatbox = document.querySelector('.chatbot-container');
    chatbox.style.display = chatbox.style.display === 'flex' ? 'none' : 'flex';
}

// Handle message sending
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message === "") return;

    // Display user message
    const chatBody = document.getElementById("chat-body");
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);

    userInput.value = ""; // Clear input field
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to latest message

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = getBotResponse(message);
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// Generate bot response
function getBotResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you today? 😊";
    } else if (input.includes("pricing")) {
        return "You can check our pricing details on the pricing page.";
    } else if (input.includes("help")) {
        return "I'm here to help! Ask me anything about our services.";
    } else {
        return "I'm not sure about that. You can contact our support team for more details.";
    }
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
