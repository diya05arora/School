const chatBox = document.querySelector(".chat-box");
const inputField = chatBox.querySelector("input[type='text']");
const button = chatBox.querySelector("button");
const chatBoxBody = chatBox.querySelector(".chat-box-body");

button.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = inputField.value;
  inputField.value = "";
  chatBoxBody.innerHTML += `<div class="message"><p>${message}</p></div>`;
  chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`;
  scrollToBottom();
  
  // Simulate a "thinking" delay
  setTimeout(() => {
    document.getElementById("loading").remove();
    let responseMessage = getResponse(message);
    chatBoxBody.innerHTML += `<div class="response"><p>${responseMessage}</p></div>`;
    scrollToBottom();
  }, 2000);
}

function getResponse(userMessage) {
  // Handle different messages and send appropriate responses
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes("document")) {
    return "Birth certificate, report card, photos, address proof, and parent’s ID.";
  } 
  else if(userMessage.includes("hi") || userMessage.includes("hello")){
    return "Hello, how may I assist you?";
  }
  else if (userMessage.includes("fee structure") || userMessage.includes("fees")) {
    return "Fees vary by grade. Visit our Fee Structure page or contact administration for details.";
  } else if (userMessage.includes("transportation") || userMessage.includes("bus")) {
    return "Yes, we provide bus services with fixed routes and timings.";
  } else if (userMessage.includes("subjects offered") || userMessage.includes("subjects")) {
    return "Primary: English, Math, Science. Middle: Add Computer Science, languages. High School: Core and elective subjects like Physics, Math, and more.";
  } else if (userMessage.includes("pay school fees") || userMessage.includes("fee payment")) {
    return "You can pay online, via bank transfer, or at the school office.";
  } else if (userMessage.includes("thank you") || userMessage.includes("ok")) {
    return "Thanks for your question! If you have more inquiries, feel free to ask.";
  } else {
    return "I'm sorry, I didn't understand that. Could you please clarify your question?";
  }
}

function scrollToBottom() {
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}
