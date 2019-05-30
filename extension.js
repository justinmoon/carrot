const vscode = require('vscode');
const WebSocket = require('ws');


function openWebSocket() {
	var ws = new WebSocket("ws://localhost:5001");

	ws.onopen = function () {
		// Web Socket is connected, send data using send()
		ws.send("Message to send");
		console.log("Message is sent...");
	};

	ws.onmessage = function (evt) {
		var tx = JSON.parse(evt.data.toString());
		var msg = `you received ${tx.amount} satoshis`
		vscode.window.showInformationMessage(msg)
		console.log("Message is received:", evt.data);
	};

	ws.onclose = function () {
		// websocket is closed.
		console.log("Connection is closed...");
	};
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	openWebSocket();
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}