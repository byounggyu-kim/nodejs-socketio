const messageList = document.querySelector("ul");
const sendForm = document.querySelector("form");

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Successfully connected to the server**");
});

socket.addEventListener("message", (message) => {
  console.log("Got this message -> ", message.data, " from server rn");
});

// 서버가 작동되다가 꺼지면 작동이 된다. 연결이 끊어지기 때문에
socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});

const handleSubmit = (e) => {
  e.preventDefault();
  const input = sendForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
};

sendForm.addEventListener("submit", handleSubmit);
