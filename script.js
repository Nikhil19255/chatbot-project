function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value;
 
  if (message.trim() === "") return;
 
  addMessage(message, "user");
 
  let response = getBotResponse(message);
  setTimeout(() => {
    addMessage(response, "bot");
  }, 500);
 
  input.value = "";
}
 
function addMessage(text, sender) {
  let chatBox = document.getElementById("chat-box");
 
  let msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
 
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
 
function getBotResponse(input) {
  input = input.toLowerCase();
 
  if (input.includes("hello")) return "Hi there!";
  if (input.includes("how are you")) return "I'm just a bot, but I'm good!";
  if (input.includes("your name")) return "I'm your simple chatbot 🤖";
  if (input.includes("bye")) return "Goodbye! Take care 👋";
 
  return "Sorry, I don't understand that.";
}
 
