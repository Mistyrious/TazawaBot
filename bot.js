var Discord = require('discord.io');
var logger = require('winston');
var token = process.env.token;

var sleepCnt = 0;
var sleepy = true;
var biidoCount = 0;
var wahahaCount = 0;
var wahahaInc =25;
var talkCount = 27;
var talkInc = 100;

var oogaSwitch = false;

var myLines = require('fs').readFileSync('quotes.txt').toString().match(/^.+$/gm);


// Configure logger settings
logger.remove(new logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	
	if(sleepy){
		if(message.toUpperCase().includes("AWAKEN") || message.toUpperCase().includes("A W A K E N")){
			sleepy = false;
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'good morning class!'
					});; 
				}, 1000);
		}
		else if (message.toUpperCase().includes("BOT") && !message.toUpperCase().includes("BOTT")) {
			sleepCnt++;
			if(sleepCnt ==1){
				bot.sendMessage({
                    to: channelID,
                    message: 'zzzzzzzzzz...'
				});
			}
			else if(sleepCnt ==2){
				bot.sendMessage({
                    to: channelID,
                    message: '*mutters incoherent japanese*'
				});
			}
			else{
				sleepy=false;
				bot.sendMessage({
                    to: channelID,
                    message: '*sigh*'
				});
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'good morning class...'
					});; 
				}, 1000);
			}
		}
	}
	else if(userID != bot.id){
		wahahaCount++;
		talkCount++;
		logger.info(wahahaCount);
		logger.info(talkCount);
		
		
		//Emoji reactions not functional, FOR NOW
		if(message.toUpperCase().includes("WOKE")){
			bot.sendMessage({
						to: channelID,
						message: '😮'
					});; 
		}
		
		else if(message.toUpperCase().includes("SAD")){
			bot.sendMessage({
						to: channelID,
						message: '😢'
					});; 
		}
		else if(message.toUpperCase().includes("LOVE")){
			bot.sendMessage({
						to: channelID,
						message: '😍'
					});; 
		}
		else if(message.toUpperCase().includes("ANGRY")){
			bot.sendMessage({
						to: channelID,
						message: '😠'
					});; 
		}
		else if(message.toUpperCase().includes("REACT")){
			var randReact = Math.floor(Math.random()*7)+1;
			switch(randReact){
				case 1:
					bot.sendMessage({
						to: channelID,
						message: '😮'
					});; 
					break;
				case 2:
					bot.sendMessage({
						to: channelID,
						message: '😢'
					});; 
					break;
				case 3:
					bot.sendMessage({
						to: channelID,
						message: '😍'
					});; 
					break;
				case 4:
					bot.sendMessage({
						to: channelID,
						message: '😠'
					});; 
					break;
				case 5:
					bot.sendMessage({
						to: channelID,
						message: '😆'
					});; 
					break;
				case 6:
					bot.sendMessage({
						to: channelID,
						message: '👍'
					});; 
					break;
				case 7:
					bot.sendMessage({
						to: channelID,
						message: '👎'
					});; 
					break;	
			}
		}
		
		
		if(message.toUpperCase().includes("BIIDO")|| message.toUpperCase().includes("B I I D O")){
			biidoCount++;
			bot.sendMessage({
                    to: channelID,
                    message: '(Biidometer: ' + biidoCount + " )"
			});
		}
		if(message.toUpperCase().includes("ONION")|| message.toUpperCase().includes("ORION")){
			bot.sendMessage({
                    to: channelID,
                    message: "oninon*"
			});
		}
		
		
		if(message.toUpperCase().includes("SHIRITORI") && !message.toUpperCase().includes("QUIZ")){
			bot.sendMessage({
                to: channelID,
				message: "join"
			});
		}
		
		
		else if(message.toUpperCase().includes("TEACH ME")){
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Ok, class!'
					});; 
				}, 1000);
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: "I've got a substitute teacher!"
					});; 
				}, 2000);
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: "eric_shiritori"
					});; 
				}, 5000);
		}
		
		else if(message.toUpperCase().includes("OOGA BOOGA")||message.toUpperCase().includes("OOGER BOOGER")){
			oogaSwitch = !oogaSwitch
			if(oogaSwitch){
				wahahaInc = 10;
				talkInc = 5;
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'and now to go... '
					});; 
				}, 1000);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '...even further...'
						});; 
				}, 2000);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'beyond!'
						});; 
				}, 3000);
			}
			else{
				wahahaInc = 25;
				talkInc = 100;
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: "I guess that's reasonable..."
					});; 
				}, 1000);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '*sad react*'
						});; 
				}, 2000);
			}
		}
		
		
		else if(message.toUpperCase().includes("IPPON") || message.toUpperCase().includes("DEMO") || message.toUpperCase().includes("NINJIN")){
			bot.sendMessage({
                    to: channelID,
                    message: "https://www.youtube.com/watch?v=4s7DI3KQjsM&feature=youtu.be"
			});
		}
		else if(message.toUpperCase().includes("NAPTIME")){
			if(userID == "133692090432487424" || userID == "149920811275386880"){
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'ok...'
					});; 
				}, 1000);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'goodnight, class!'
						});; 
				}, 2000);
				sleepy = true;
				sleepCnt = 0;
				wahahaCount = 0;
				talkCount = 27;
				oogaSwitch = false;
				talkInc = 100;
				wahahaInc = 25;
			}
			else{
				bot.sendMessage({
							to: channelID,
							message: 'access denied, biido'
						});; 
			}
			
		}
		else if(message.toUpperCase().includes("RESET COUNT")){
			if(userID == "133692090432487424" || userID == "149920811275386880"){
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'ok...'
					});; 
				}, 1000);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'My biidometer has been recalibrated'
						});; 
				}, 2000);
				biidoCount =0;
			}
			else{
				bot.sendMessage({
							to: channelID,
							message: 'access denied, biido'
						});; 
			}
			
		}
		else if(message.toUpperCase().includes("ERIC SETUP")){
			if(userID == "133692090432487424" || userID == "149920811275386880"){
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'k!settings'
						});; 
				}, 200);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '1'
						});; 
				}, 400);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'eric_'
						});; 
				}, 600);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'confirm'
						});; 
				}, 800); 
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'eric_settings'
						});; 
				}, 1000);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '3'
						});; 
				}, 1200);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '8'
						});; 
				}, 1400);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'enabled'
						});; 
				}, 1600);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'this server'
						});; 
				}, 1800); 
			}
			else{
				bot.sendMessage({
							to: channelID,
							message: 'access denied, biido'
						});; 
			}
			
		}
		else if(message.toUpperCase().includes("BOT")&&(message.toUpperCase().includes("BEST") || message.toUpperCase().includes("GREAT") || message.toUpperCase().includes("AMAZING")|| message.toUpperCase().includes("COOL")|| message.toUpperCase().includes("AWESOME")|| message.toUpperCase().includes("GOOD"))){
			bot.sendMessage({
							to: channelID,
							message: "**awwwww**"
							});
		}
		else if(message.toUpperCase().includes("THANKS")&&(message.toUpperCase().includes("ZAWA") || message.toUpperCase().includes("SENSEI") || message.toUpperCase().includes("KAYOKO"))){
				bot.sendMessage({
							to: channelID,
							message: "Anytime, bubbo. 😎"
							});
		}
		else if(message.toUpperCase().includes("ERIC") && userID != "482759518665703434"){
			bot.sendMessage({
                    to: channelID,
                    message: 'What about my son?'
			});
		}
		else if(message.toUpperCase().includes("ZAWA") || message.toUpperCase().includes("SENSEI") || message.toUpperCase().includes("KAYOKO")){
			setTimeout(function(){ 
					logger.info(userID);
					switch(userID){
						case "228231633336139776": //Mahdi
							bot.sendMessage({
							to: channelID,
							message: "shut up, Hamado-kuun."
							});
							break;
						case "403247076831526912": //Olivia
							bot.sendMessage({
							to: channelID,
							message: "yes, Ross-san?"
							});
							break;
						case "384151855745466388": //Will?
							bot.sendMessage({
							to: channelID,
							message: "What do you want, Hamilton-san?"
							});
							break;
						case "133692090432487424": //Orion
							bot.sendMessage({
							to: channelID,
							message: "Do you need me, 🇧ronio?"
							});
							break;
						case "149920811275386880": //Claudia
							bot.sendMessage({
							to: channelID,
							message: "yes, Biido-san?"
							});
							break;
						case "251095980278022155": //Shaad
							bot.sendMessage({
							to: channelID,
							message: "What do you need, Shaado-kuun"
							});
							break;
						case "242807193500516363": //Annabel
							bot.sendMessage({
							to: channelID,
							message: "How do you do, Alcoholic Ten Year Old Pink Aesthetic Depressed Drug Dealer Kinky Emo Hoe"
							});
							break;
						case "270737815141089280": //Santiago
							bot.sendMessage({
							to: channelID,
							message: "Do you even exist, Santi?"
							});
							break;
						default:
							bot.sendMessage({
							to: channelID,
							message: "Yes?"
							});
							break;
					}
				}, 500);
		}
		else if(message.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)){
			if(message.includes("死") || message.includes("ゴミ") || message.includes("くそ") || message.includes("たわごと")|| message.includes("売春婦")){
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'それを言わないで!'
					});; 
					}, 800);
			}
			else{
				setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'いいですね！'
					});; 
					}, 800);
			}
			
		}
		else if(wahahaCount%wahahaInc==0){
			var randomWa = Math.floor(Math.random()*3)+1;
			switch(randomWa){
				case 1:
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Wahaha'
					});; 
					}, 3000);
					break;
				case 2:
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Wa'
					});; 
					}, 2000);
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Ha...'
					});; 
					}, 4000);
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Ha...'
					});; 
					}, 3000);
					break;
				case 3:
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Waha..'
					});; 
					}, 2000);
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Ha?'
					});; 
					}, 2000);
					break;
			}
		}
		else if(talkCount%talkInc==0){
			var randomQuote = Math.floor(Math.random()*myLines.length-1);
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: myLines[randomQuote]
					});; 
					}, 4000);
		}
		
	} 
});