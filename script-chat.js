const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.querySelector('.chat-messages');

// function to add a new message to the chat

function addMessage(message, isUser) 
{
    const messageDiv = document.createElement('div');
    messageDiv.classList.ad(isUser?'user-message' : 'bot-message');
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
}

//Event listener for the send button
sendBtn.addEventListener('click' , ()=>{
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message , true);
        //Here you can add logic to send the message to the server or process it in any other way
        chatInput.value = '';
    }
})
// example
chatInput.addEventListener('input' , () => {
    if (chatInput.value.trim() !== '')
        {
            setTimeout(() => {
                addMessage('This is a sample bot response', false)
            },2000);
        }
})