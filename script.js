document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const startBtn = document.getElementById('start-btn');
    const introPage = document.getElementById('intro-page');
    const chatbotPage = document.getElementById('chatbot-page');
    const chatArea = document.getElementById('chat-area');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const fileUpload = document.getElementById('file-upload');
    
    // Handle Start Button Click
    startBtn.addEventListener('click', function() {
        introPage.style.display = 'none';
        chatbotPage.style.display = 'flex';
        
        // Add initial greeting message
        addMessage('Hi there! I\'m Bi Sa Mi, your AI study buddy. How can I help you today?', 'ai');
    });
    
    // Handle Send Button Click
    sendBtn.addEventListener('click', sendMessage);
    
    // Handle Enter key press
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Handle File Upload
    fileUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(event) {
                const fileMsg = `Uploaded: ${file.name}`;
                addMessage(fileMsg, 'user');
                
                // Simulate AI response to file upload
                setTimeout(() => {
                    addMessage('I\'ve received your file. What would you like me to help you with?', 'ai');
                }, 1000);
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Function to send message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            addMessage(message, 'user');
            userInput.value = '';
            
            // Simulate typing indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator';
            loadingIndicator.textContent = 'Typing...';
            chatArea.appendChild(loadingIndicator);
            
            // Simulate AI response (replace with actual AI integration)
            setTimeout(() => {
                chatArea.removeChild(loadingIndicator);
                simulateResponse(message);
            }, 1500);
        }
    }
    
    // Function to add message to chat
    function addMessage(text, sender) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}-bubble`;
        bubble.textContent = text;
        
        chatArea.appendChild(bubble);
        
        // Scroll to bottom
        chatArea.scrollTop = chatArea.scrollHeight;
    }
    
    // Function to simulate AI response (replace with actual AI integration)
    function simulateResponse(userMessage) {
        const lowerMsg = userMessage.toLowerCase();
        let response = '';
        
        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            response = 'Hello! How can I help with your studies today?';
        } else if (lowerMsg.includes('math') || lowerMsg.includes('problem')) {
            response = 'I can help solve math problems! Could you describe it or upload a photo of the problem?';
        } else if (lowerMsg.includes('science') || lowerMsg.includes('chemistry') || lowerMsg.includes('physics')) {
            response = 'Science questions are my specialty. What specific topic are you studying?';
        } else if (lowerMsg.includes('history') || lowerMsg.includes('english') || lowerMsg.includes('literature')) {
            response = 'I can help with history and literature questions. What period or text are you studying?';
        } else if (lowerMsg.includes('thank')) {
            response = 'You\'re welcome! Feel free to ask anything else.';
        } else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
            response = 'Goodbye! Come back anytime you need help with your studies.';
        } else {
            response = 'That\'s an interesting question. Let me help you with that. Could you provide a bit more detail about what you\'re studying?';
        }
        
        addMessage(response, 'ai');
    }
});
