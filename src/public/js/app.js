const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");
const room = document.querySelector("#room");
const h3 = room.querySelector("h3");

room.hidden = true;

let roomName;

const handleRoomSubmit = (e) => {
  e.preventDefault();
  const input = form.querySelector("input");
  socket.emit("room", input.value, callback);
  roomName = input.value;
  input.value = "";
};

// 이 콜백 함수는 서버에 의해 작동이 되지만, 프런트엔드에서 작동이 된다.
const callback = () => {
  welcome.hidden = true;
  room.hidden = false;
  h3.innerText = `Room name: ${roomName}`;
};

form.addEventListener("submit", handleRoomSubmit);
