const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");

const handleRoomSubmit = (e) => {
  e.preventDefault();
  const input = form.querySelector("input");
  socket.emit("room", { payload: input.value }, callback);
  input.value = "";
};

const callback = () => {
  console.log("done");
};

form.addEventListener("submit", handleRoomSubmit);
