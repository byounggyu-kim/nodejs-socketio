const messageList = document.querySelector("ul");
const sendNickForm = document.querySelector("#nick");
const sendMessageForm = document.querySelector("#message");

const socket = new WebSocket(`ws://${window.location.host}`);

const makeJSON = (type, payload) => {
  const msg = { type, payload };
  return JSON.stringify(msg);
};

socket.addEventListener("open", () => {
  console.log("Successfully connected to the server**");
});

socket.addEventListener("message", (message) => {
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
});

// 서버가 작동되다가 꺼지면 작동이 된다. 연결이 끊어지기 때문에
socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});

const handleSubmit = (e) => {
  e.preventDefault();
  const input = sendMessageForm.querySelector("input");
  socket.send(makeJSON("message", input.value));
  input.value = "";
};

const handleNick = (e) => {
  e.preventDefault();
  const input = sendNickForm.querySelector("input");
  socket.send(makeJSON("nickname", input.value));
  input.value = "";
};

sendNickForm.addEventListener("submit", handleNick);
sendMessageForm.addEventListener("submit", handleSubmit);
