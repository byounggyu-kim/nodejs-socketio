const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");

const handleRoomSubmit = (e) => {
  e.preventDefault();
  const input = form.querySelector("input");
  socket.emit("room", { payload: input.value }, callback);
  input.value = "";
};

// 이 콜백 함수는 서버에 의해 작동이 되지만, 프런트엔드에서 작동이 된다.
const callback = (msg) => {
  console.log("done", msg);
};

form.addEventListener("submit", handleRoomSubmit);
