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

var a = require('fs').readFileSync('shiritori/a.txt').toString().match(/^.+$/gm);
var i = require('fs').readFileSync('shiritori/i.txt').toString().match(/^.+$/gm);
var u = require('fs').readFileSync('shiritori/u.txt').toString().match(/^.+$/gm);
var e = require('fs').readFileSync('shiritori/e.txt').toString().match(/^.+$/gm);
var o = require('fs').readFileSync('shiritori/o.txt').toString().match(/^.+$/gm);

var ka = require('fs').readFileSync('shiritori/ka.txt').toString().match(/^.+$/gm);
var ki = require('fs').readFileSync('shiritori/ki.txt').toString().match(/^.+$/gm);
var ku = require('fs').readFileSync('shiritori/ku.txt').toString().match(/^.+$/gm);
var ke = require('fs').readFileSync('shiritori/ke.txt').toString().match(/^.+$/gm);
var ko = require('fs').readFileSync('shiritori/ko.txt').toString().match(/^.+$/gm);

var ga = require('fs').readFileSync('shiritori/ga.txt').toString().match(/^.+$/gm);
var gi = require('fs').readFileSync('shiritori/gi.txt').toString().match(/^.+$/gm);
var gu = require('fs').readFileSync('shiritori/gu.txt').toString().match(/^.+$/gm);
var ge = require('fs').readFileSync('shiritori/ge.txt').toString().match(/^.+$/gm);
var go = require('fs').readFileSync('shiritori/go.txt').toString().match(/^.+$/gm);

var sa = require('fs').readFileSync('shiritori/sa.txt').toString().match(/^.+$/gm);
var shi = require('fs').readFileSync('shiritori/shi.txt').toString().match(/^.+$/gm);
var su = require('fs').readFileSync('shiritori/su.txt').toString().match(/^.+$/gm);
var se = require('fs').readFileSync('shiritori/se.txt').toString().match(/^.+$/gm);
var so = require('fs').readFileSync('shiritori/so.txt').toString().match(/^.+$/gm);

var za = require('fs').readFileSync('shiritori/za.txt').toString().match(/^.+$/gm);
var ji = require('fs').readFileSync('shiritori/ji.txt').toString().match(/^.+$/gm);
var zu = require('fs').readFileSync('shiritori/zu.txt').toString().match(/^.+$/gm);
var ze = require('fs').readFileSync('shiritori/ze.txt').toString().match(/^.+$/gm);
var zo = require('fs').readFileSync('shiritori/zo.txt').toString().match(/^.+$/gm);

var ta = require('fs').readFileSync('shiritori/ta.txt').toString().match(/^.+$/gm);
var chi = require('fs').readFileSync('shiritori/chi.txt').toString().match(/^.+$/gm);
var tsu = require('fs').readFileSync('shiritori/tsu.txt').toString().match(/^.+$/gm);
var te = require('fs').readFileSync('shiritori/te.txt').toString().match(/^.+$/gm);
var to = require('fs').readFileSync('shiritori/to.txt').toString().match(/^.+$/gm);

var da = require('fs').readFileSync('shiritori/da.txt').toString().match(/^.+$/gm);
var de = require('fs').readFileSync('shiritori/de.txt').toString().match(/^.+$/gm);
var dou = require('fs').readFileSync('shiritori/do.txt').toString().match(/^.+$/gm);

var na = require('fs').readFileSync('shiritori/na.txt').toString().match(/^.+$/gm);
var ni = require('fs').readFileSync('shiritori/ni.txt').toString().match(/^.+$/gm);
var nu = require('fs').readFileSync('shiritori/nu.txt').toString().match(/^.+$/gm);
var ne = require('fs').readFileSync('shiritori/ne.txt').toString().match(/^.+$/gm);
var no = require('fs').readFileSync('shiritori/no.txt').toString().match(/^.+$/gm);

var ha = require('fs').readFileSync('shiritori/ha.txt').toString().match(/^.+$/gm);
var hi = require('fs').readFileSync('shiritori/hi.txt').toString().match(/^.+$/gm);
var hu = require('fs').readFileSync('shiritori/hu.txt').toString().match(/^.+$/gm);
var he = require('fs').readFileSync('shiritori/he.txt').toString().match(/^.+$/gm);
var ho = require('fs').readFileSync('shiritori/ho.txt').toString().match(/^.+$/gm);

var ba = require('fs').readFileSync('shiritori/ba.txt').toString().match(/^.+$/gm);
var bi = require('fs').readFileSync('shiritori/bi.txt').toString().match(/^.+$/gm);
var bu = require('fs').readFileSync('shiritori/bu.txt').toString().match(/^.+$/gm);
var be = require('fs').readFileSync('shiritori/be.txt').toString().match(/^.+$/gm);
var bo = require('fs').readFileSync('shiritori/bo.txt').toString().match(/^.+$/gm);

var pa = require('fs').readFileSync('shiritori/pa.txt').toString().match(/^.+$/gm);
var pi = require('fs').readFileSync('shiritori/pi.txt').toString().match(/^.+$/gm);
var pe = require('fs').readFileSync('shiritori/pe.txt').toString().match(/^.+$/gm);
var po = require('fs').readFileSync('shiritori/po.txt').toString().match(/^.+$/gm);

var ma = require('fs').readFileSync('shiritori/ma.txt').toString().match(/^.+$/gm);
var mi = require('fs').readFileSync('shiritori/mi.txt').toString().match(/^.+$/gm);
var mu = require('fs').readFileSync('shiritori/mu.txt').toString().match(/^.+$/gm);
var me = require('fs').readFileSync('shiritori/me.txt').toString().match(/^.+$/gm);
var mo = require('fs').readFileSync('shiritori/mo.txt').toString().match(/^.+$/gm);

var ra = require('fs').readFileSync('shiritori/ra.txt').toString().match(/^.+$/gm);
var ri = require('fs').readFileSync('shiritori/ri.txt').toString().match(/^.+$/gm);
var ru = require('fs').readFileSync('shiritori/ru.txt').toString().match(/^.+$/gm);
var re = require('fs').readFileSync('shiritori/re.txt').toString().match(/^.+$/gm);
var ro = require('fs').readFileSync('shiritori/ro.txt').toString().match(/^.+$/gm);

var ya = require('fs').readFileSync('shiritori/ya.txt').toString().match(/^.+$/gm);
var yu = require('fs').readFileSync('shiritori/yu.txt').toString().match(/^.+$/gm);
var yo = require('fs').readFileSync('shiritori/yo.txt').toString().match(/^.+$/gm);

var wa = require('fs').readFileSync('shiritori/wa.txt').toString().match(/^.+$/gm);



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
			var randReact = Math.floor(Math.random()*9)+1;
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
				case 8:
					bot.sendMessage({
						to: channelID,
						message: '<:484476698792820737:>'
					});; 
					break;
				case 9:
					bot.sendMessage({
						to: channelID,
						message: '<:484476658946932736:>'
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

        if(message.toUpperCase().includes("GUESS")){
        	var guess = null
            if(message.toUpperCase().includes("GUESS A") || message.includes("Guess あ")){
                guess = a;
            }
            else if(message.toUpperCase().includes("GUESS I") || message.includes("Guess い")){
                guess = i;
            }
            else if(message.toUpperCase().includes("GUESS U") || message.includes("Guess い")){
                guess = u;
            }
            else if(message.toUpperCase().includes("GUESS E") || message.includes("Guess う")){
                guess = e;
            }
            else if(message.toUpperCase().includes("GUESS O") || message.includes("Guess お")){
                guess = o;
            }

            else if(message.toUpperCase().includes("GUESS KA") || message.includes("Guess か")){
                guess = ka;
            }
            else if(message.toUpperCase().includes("GUESS KI") || message.includes("Guess き")){
                guess = ki;
            }
            else if(message.toUpperCase().includes("GUESS KU") || message.includes("Guess く")){
                guess = ku;
            }
            else if(message.toUpperCase().includes("GUESS KE") || message.includes("Guess け")){
                guess = ke;
            }
            else if(message.toUpperCase().includes("GUESS KO") || message.includes("Guess こ")){
                guess = ko;
            }

            else if(message.toUpperCase().includes("GUESS GA") || message.includes("Guess が")){
                guess = ga;
            }
            else if(message.toUpperCase().includes("GUESS GI") || message.includes("Guess ぎ")){
                guess = gi;
            }
            else if(message.toUpperCase().includes("GUESS GU") || message.includes("Guess ぐ")){
                guess = gu;
            }
            else if(message.toUpperCase().includes("GUESS GE") || message.includes("Guess げ")){
                guess = ge;
            }
            else if(message.toUpperCase().includes("GUESS GO") || message.includes("Guess ご")){
                guess = go;
            }

            else if(message.toUpperCase().includes("GUESS SA") || message.includes("Guess さ")){
                guess = sa;
            }
            else if(message.toUpperCase().includes("GUESS SHI") || message.includes("Guess　し")){
                guess = shi;
            }
            else if(message.toUpperCase().includes("GUESS SU") || message.includes("Guess す")){
                guess = su;
            }
            else if(message.toUpperCase().includes("GUESS SE") || message.includes("Guess せ")){
                guess = se;
            }
            else if(message.toUpperCase().includes("GUESS SO") || message.includes("Guess そ")){
                guess = so;
            }

            else if(message.toUpperCase().includes("GUESS ZA") || message.includes("Guess ざ")){
                guess = za;
            }
            else if(message.toUpperCase().includes("GUESS JI") || message.includes("Guess じ")){
                guess = ji;
            }
            else if(message.toUpperCase().includes("GUESS ZU") || message.includes("Guess ず")){
                guess = zu;
            }
            else if(message.toUpperCase().includes("GUESS ZE") || message.includes("Guess ぜ")){
                guess = ze;
            }
            else if(message.toUpperCase().includes("GUESS ZO") || message.includes("Guess ぞ")){
                guess = zo;
            }

            else if(message.toUpperCase().includes("GUESS TA") || message.includes("Guess た")){
                guess = ta;
            }
            else if(message.toUpperCase().includes("GUESS CHI") || message.includes("Guess ち")){
                guess = chi;
            }
            else if(message.toUpperCase().includes("GUESS TSU") || message.includes("Guess つ")){
                guess = tsu;
            }
            else if(message.toUpperCase().includes("GUESS TE") || message.includes("Guess て")){
                guess = te;
            }
            else if(message.toUpperCase().includes("GUESS TO") || message.includes("Guess と")){
                guess = to;
            }

            else if(message.toUpperCase().includes("GUESS DA") || message.includes("Guess だ")){
                guess = da;
            }
            else if(message.toUpperCase().includes("GUESS DE") || message.includes("Guess で")){
                guess = de;
            }
            else if(message.toUpperCase().includes("GUESS DO") || message.includes("Guess ど")){
                guess = dou;
            }

            else if(message.toUpperCase().includes("GUESS NA") || message.includes("Guess な")){
                guess = na;
            }
            else if(message.toUpperCase().includes("GUESS NI") || message.includes("Guess に")){
                guess = ni;
            }
            else if(message.toUpperCase().includes("GUESS NU") || message.includes("Guess ぬ")){
                guess = nu;
            }
            else if(message.toUpperCase().includes("GUESS NE") || message.includes("Guess ね")){
                guess = ne;
            }
            else if(message.toUpperCase().includes("GUESS NO") || message.includes("Guess の")){
                guess = no;
            }

            else if(message.toUpperCase().includes("GUESS HA") || message.includes("Guess は")){
                guess = ha;
            }
            else if(message.toUpperCase().includes("GUESS HI") || message.includes("Guess ひ")){
                guess = hi;
            }
            else if(message.toUpperCase().includes("GUESS HU") || message.includes("Guess ふ")){
                guess = hu;
            }
            else if(message.toUpperCase().includes("GUESS HE") || message.includes("Guess へ")){
                guess = he;
            }
            else if(message.toUpperCase().includes("GUESS HO") || message.includes("Guess ほ")){
                guess = ho;
            }

            else if(message.toUpperCase().includes("GUESS BA") || message.includes("Guess ば")){
                guess = ba;
            }
            else if(message.toUpperCase().includes("GUESS BI") || message.includes("Guess び")){
                guess = bi;
            }
            else if(message.toUpperCase().includes("GUESS BU") || message.includes("Guess ぶ")){
                guess = bu;
            }
            else if(message.toUpperCase().includes("GUESS BE") || message.includes("Guess べ")){
                guess = be;
            }
            else if(message.toUpperCase().includes("GUESS BO") || message.includes("Guess ぼ")){
                guess = bo;
            }

            else if(message.toUpperCase().includes("GUESS PA") || message.includes("Guess ぱ")){
                guess = pa;
            }
            else if(message.toUpperCase().includes("GUESS PI") || message.includes("Guess ぴ")){
                guess = pi;
            }
            else if(message.toUpperCase().includes("GUESS PE") || message.includes("Guess ぺ")){
                guess = pe;
            }
            else if(message.toUpperCase().includes("GUESS PO") || message.includes("Guess ぽ")){
                guess = po;
            }

            else if(message.toUpperCase().includes("GUESS MA") || message.includes("Guess ま")){
                guess = ma;
            }
            else if(message.toUpperCase().includes("GUESS MI") || message.includes("Guess み")){
                guess = mi;
            }
            else if(message.toUpperCase().includes("GUESS MU") || message.includes("Guess む")){
                guess = mu;
            }
            else if(message.toUpperCase().includes("GUESS ME") || message.includes("Guess め")){
                guess = me;
            }
            else if(message.toUpperCase().includes("GUESS MO") || message.includes("Guess も")){
                guess = mo;
            }

            else if(message.toUpperCase().includes("GUESS RA") || message.includes("Guess ら")){
                guess = ra;
            }
            else if(message.toUpperCase().includes("GUESS RI") || message.includes("Guess り")){
                guess = ri;
            }
            else if(message.toUpperCase().includes("GUESS RU") || message.includes("Guess る")){
                guess = ru;
            }
            else if(message.toUpperCase().includes("GUESS RE") || message.includes("Guess れ")){
                guess = re;
            }
            else if(message.toUpperCase().includes("GUESS RO") || message.includes("Guess ろ")){
                guess = ro;
            }

            else if(message.toUpperCase().includes("GUESS YA") || message.includes("Guess や")){
                guess = ya;
            }
            else if(message.toUpperCase().includes("GUESS YU") || message.includes("Guess ゆ")){
                guess = yu;
            }
            else if(message.toUpperCase().includes("GUESS YO") || message.includes("Guess よ")){
                guess = yo;
            }

            else if(message.toUpperCase().includes("GUESS WA") || message.includes("Guess わ")){
                guess = wa;
            }

            else{
                bot.sendMessage({
                    to: channelID,
                    message: "I don't know what I'm trying to guess"
                });;
			}

			if(guess != null){
                var guessInd = Math.floor(Math.random()*myLines.length-1);
                setTimeout(function(){
                    bot.sendMessage({
                        to: channelID,
                        message: guess[guessInd]
                    });;
                }, 1000);
			}
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
						message: "eric_quiz https://pastebin.com/Us0ZXMDr"
					});; 
				}, 5000);
		}
		else if(message.toUpperCase().includes("GAME TIME")){
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'Ok, class!'
					});; 
				}, 1000);
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: "Let's play a game!"
					});; 
				}, 2000);
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: "eric_shiritori"
					});; 
				}, 5000);
		}
		else if(message.toUpperCase().includes("TAZAWA SKIP")){
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'skip'
					});; 
				}, 1000);
		}
		else if(message.toUpperCase().includes("TAZAWA LEAVE")){
			setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'leave'
					});; 
				}, 1000);
		}
		
		else if(message.toUpperCase().includes("OOGA BOOGA")||message.toUpperCase().includes("OOGER BOOGER")){
			if(userID == "133692090432487424" || userID == "149920811275386880"){
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
			else{
				bot.sendMessage({
							to: channelID,
							message: 'access denied, biido'
						});; 
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
		else if(message.toUpperCase().includes("ERIC SETUP 2")){
			if(userID == "133692090432487424" || userID == "149920811275386880"){
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'eric_settings'
						});; 
				}, 200);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '3'
						});; 
				}, 400);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: '8'
						});; 
				}, 600);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'enabled'
						});; 
				}, 800);
				setTimeout(function(){ 
						bot.sendMessage({
							to: channelID,
							message: 'this server'
						});; 
				}, 1000); 
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
						case "270737815141089280": //Annabel
							bot.sendMessage({
							to: channelID,
							message: "How do you do, Alcoholic Ten Year Old Pink Aesthetic Depressed Drug Dealer Kinky Emo Hoe"
							});
							break;
						case "242807193500516363": //Santiago
							bot.sendMessage({
							to: channelID,
							message: "Do you even exist, Santi?"
							});
							break;
						case "483867757037879314": //Ree
							bot.sendMessage({
							to: channelID,
							message: "Yes, Ree?"
							});
							break;
						case "351832832802553874": //Ian
							bot.sendMessage({
							to: channelID,
							message: "Yes, Ian?"
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
		else if(message.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/) && !message.toUpperCase().includes("I SAY")){
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
			var randomWa = Math.floor(Math.random()*4)+1;
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
				case 4:
					setTimeout(function(){ 
					bot.sendMessage({
						to: channelID,
						message: 'WAYAYA'
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