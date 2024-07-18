import express, { Express } from "express";
import WebSocket, { WebSocketServer } from "ws";

const app: Express = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", (data, isBinary) => {
    console.log(data.toString());
    ws.send("is this working");
  });

  ws.send("Hello! Message From Server!!");
});
