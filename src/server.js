import express from "express";
import http from "http";
import SocketIO from "socket.io";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
const server = http.createServer(app);
const io = SocketIO(server);

io.on("connection", (socket) => {
  socket.on("room", (msg, done) => {
    console.log(msg);
    setTimeout(() => {
      done();
    }, 5000);
  });
});

server.listen(3000, handleListen);

// const onServerClose = () => {
//   console.log("hey sth got wrong from Browser");
// };

// const showMessage = (mes, soc) => {
//   const message = JSON.parse(mes);
//   switch (message.type) {
//     case "message":
//       sockets.forEach((el) => el.send(`${soc.nickname}: ${message.payload}`));
//       break;
//     case "nickname":
//       soc["nickname"] = message.payload;
//       break;
//   }
// };

// const sockets = [];

// const handleConnection = (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "??";
//   console.log("Successfully connected to Browser"); // 프런트와 연결 되어있을때의 로직
//   socket.send("hello!"); // 서버에서 프런트로 보내는 메세지
//   socket.on("close", onServerClose); // 프런트와의 연결이 끊긴 후의 로직
//   socket.on("message", (msg) => showMessage(msg, socket)); // 프런트에서 보낸 메세지 받는 로직
// };

// wss.on("connection", handleConnection);
