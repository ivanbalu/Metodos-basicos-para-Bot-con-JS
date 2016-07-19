var TelegramBot = require('node-telegram-bot-api');
var token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var fs = require('fs');

var bot = new TelegramBot(
	token, {
		polling: true
	});

bot.getMe().then(function (me){
	console.log('hi my name is ' + me.username);
});

bot.onText(/^\/soy (.+)$/, function (msg, match){
	var name = match[1];
	console.log(msg);
	bot.sendMessage(msg.chat.id, 'Hola '+ name + ' los comandos que puedes utilizar son /audio /photo /ubicacion y /soy seguido de tu nombre' ).then(function (){
		console.log('saludando a ' + name);
	});
	
});



bot.onText(/^\/photo/, function (msg, match) {
	console.log(msg);
	bot.sendPhoto(msg.chat.id, fs.createReadStream('assets/images/c1.jpg')).then(console.log)
});


bot.onText(/^\/ubicacion/, function (msg, match) {
	var lat = '20.082822';
	var lon = '-98.362407';
	bot.sendLocation(msg.chat.id, lat,lon).then(function(){
		console.log('ubicacion');
	});
});

bot.onText(/^\/audio/, function (msg, match) {
	var a = 'assets/images/audio.mp3';
	bot.sendAudio(msg.chat.id, a).then(function (){
		console.log('audio');
	});

});
