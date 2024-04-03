try {
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    document.writeLine("data");
  });

  ws.send('something');
});
} catch (e) {
  console.log(e);
  document.writeLine("ERROR OCCURED: "+String(e));
  alert(String(e));
}
