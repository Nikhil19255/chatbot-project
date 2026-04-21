async function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value;
 
  if (message.trim() === "") return;
 
  addMessage(message, "user");
 
  input.value = "";
 
  let response = await fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: message })
  });
 
  let data = await response.json();
 
  addMessage(data.reply, "bot");
}
 
function addMessage(text, sender) {
  let chatBox = document.getElementById("chat-box");
 
  let msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
 
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
 
