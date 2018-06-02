const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Random Insult Generator:
function generateRandomInsult() {
	var insultLine1 = ["Artless", "Bawdy", "Beslubbering", "Bootless",
			   "chrlish", "Cockered", "clouted", "craven",
			   "currish", "dankish", "dissembling", "droning",
			   "Errant", "fawning", "fobbing", "froward",
			   "frothy", "Gleeking", "Goatish", "Gorbellied",
			   "Impertinent", "Infectious", "Jarring", "Loggerheaded",
			   "lumpish", "Mammering", "Mangled", "Mewling",
			   "paunchy", "Pribbling", "Puking", "Puny",
			   "Qualling", "Rank", "Reeky", "Rougish",
			   "Ruttish", "Saucy", "Spleeny", "Spongy",
			   "Surly", "Tottering", "Unmuzzled", "Vain",
			   "Venomed", "Villanious", "Warped", "Wayward",
			   "Weedy", "Yeasty"];
	//Is there a better way to be doing this?
	var insultLine2 = ["Base-court", "Bat-fowling", "Beef-witted", "Beetle-headed",
			   "Boil-brained", "Clapper-clawed", "Clay-brained", "Common-kissing",
			   "Crook-pated", "Dismal-dreaming", "Dizzy-eyed", "doghearted",
			   "Dread-bolted", "Earth-vexing", "Elf-skinned", "Fat-kidneyed",
			   "Fen-sucked", "Flap-mouthed", "Fly-bitten", "Folly-fallen",
			   "Fool-born", "Full-gorged", "Guts-griping", "Half-facced",
			   "hasty-witted", "Hedge-born", "hell-hated", "Idle-headed",
			   "Ill-breeding", "Ill-nurtured", "Knotty-pated", "Milk-livered",
			   "Motley-minded", "Onion-eyed", "Plume-plucked", "Pittle-deep",
			   "Pox-marked", "Reeling-ripe", "Rough-hewn", "Rude-growing",
			   "Rump-fed", "Shard-borne", "Sheep-biting", "Spur-galled",
			   "Swag-bellied", "tardy-gaited", "Tickle-brained", "Toad-spotted",
			   "Unchin-snouted", "Weather-bitten"];
	
	var insultLine3 = ["Apple-john", "baggage", "barnacle", "bladder",
			   "boar-pig", "bugbear", "bum-bailey", "canker-blossom",
			   "Clack-dish", "Clotpole", "coxcomb", "codpiece",
			   "Death-token", "Dewberry", "Flap-dragon", "Flax-wench",
			   "Flirt-gill", "Foot-licker", "fustilarian", "giglet",
			   "Gudgeon", "Haggard", "Harpy", "Hedge-pig",
			   "Horn-beast", "Hugger-mugger", "Joithead", "Lewdster",
			   "Lout", "Maggot-pie", "Malt-worm", "Mammet",
			   "Measle", "Minnow", "Miscreant", "Moldwarp",
			   "Mumble-news", "Nut-hook", "Pigeon-egg", "Pignut",
			   "Puttock", "Pumpion", "Ratsbane", "Scut",
			   "Skainsmate", "Strumpet", "Varlot", "Vassal",
			   "Whey-face", "Wagtail"];
	
	var InsultRandom1 = Math.floor(Math.random()* 49);
	var InsultRandom2 = Math.floor(Math.random()* 49);
	var InsultRandom3 = Math.floor(Math.random()* 49);
	var to_send = `${message.mentions.users.first()}, thou art a
                          ${insultLine1[InsultRandom1]} ${insultLine2[InsultRandom2]}
                           ${insultLine3[InsultRandom3]}`;
	
	message.channel.send( to_send );

  return randomInsult;	
}

client.on('you up?', () => {
  console.log(`new phone who dis?`);
    client.user.setGame(`What's this?! True Grit is Evolving!`);
    });
//keeps the bot focused 
client.on("message", async message => {
if(message.author.bot) return;
if(message.content.indexOf(config.prefix) !== 0) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 //this lets the bot delted what you want to say  
    


if(message.author.bot) return;
	
if(command === "say") {
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{});
message.channel.send(sayMessage);
}
//message itself 
client.on('message', msg => {
  if (msg.content === 'hello+') {
    message.author.send('Hi, there!');
  }
});

//Reset warning
	if(command === "reset"){
		message.channel.send("resetting bot please stand by")
	}
//Bot running 
	if(command === "run"){
		message.channel.send("I'm back!")
	}
//Bot sends message to Speciffic user
	if(command === "pm"){
		message.user.send( `I have a suggestion for a dad joke, ${message.mentions.users.first()}`)
	}

// Lots of random bull shit right around this area... watch your step!    
if(command === "heyband"){
    message.author.reply("hey what?");
}

	//tags user who may have been burned
if(command === "burn"){
	message.channel.send(`you need some ice for that, ${message.mentions.users.first()}?`)
}

// Lewd gif comment
if(command === "lewd"){
	message.channel.send("http://i0.kym-cdn.com/photos/images/original/000/746/820/fed.gif, ${message.mentions.users.first()}")
}   

	//billies squirel command    
if(command === "squirrel") {
    var message_options =[
        "There are 265 species of Squirrel world wide with the african pygmy squirrel being the smallest!",
        "Squirrels can find food buried beneath a foot of snow.",
        "A squirrel's front teeth never stop growing.",
        "Squirrels may lose 25% of their buried food to thieves.",
        "Squirrels use a zig zag pattern to escape predators.... Now that's nutty!",
        "Squirrels may pretend to bury a nut to throw off potential thieves",
        "A newborn squirrel is about an inch long",
        "UMBC Squirrels have been known to start anarchy during finals week.",
        "humans introduced squirrels to most of our major city parks.... bastards",
        "squirrls are acrobatic,intelligent and adaptable.",
        "They get fat cause there parents didn't love them enough....",
        "Squirrels don't dig up all of their buried nuts. Cause they're all stupid and can't follow basic Squirrel GPS instructions.",
        "squirrel pirates are terribly ineffective.",
        "AJ hates squirrels. cause they're assholes",
    ]
    var random_index = Math.floor(Math.random() * message_options.length)
    var chosen_message = message_options[random_index]

message.channel.send(chosen_message)
}

//Spawns a random dad joke	
if(command === "dadjoke") {
    var message_options =[
        "What time did the man go to the dentist? Tooth hurt-y",
        " I'm reading a book about anti-gravity. It's impossible to put down!",
        "You're American when you go into the bathroom, and you're American when you come out, but do you know what you are while you're in there?   European."
    ]
    var random_index = Math.floor(Math.random() * message_options.length)
    var chosen_message = message_options[random_index]
    
message.channel.send(chosen_message)
}   
    

//List of all commands available in bot	
if (command === "list"){
	message.channel.send({embed: {
    color: 4196e1,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "List of actions",
    description: "These are all of the commands and actiosn that True-Grit can call to the server! Check back to see if anything had changed or has been added.",
    fields: [{
        name: "hey band",
        value: "TG will respond with Hey What? and tag the user who sent the initial message. The propper input for this command is `;heyband`"
      },
      {
        name: "burn",
        value: "TG wants to check up on all of us here in the server so use the `;burn` command to check on your friends who have been burned."
      },
      {
        name: "lewd",
        value: "Let people know when something they said is `;lewd`"
      },
			 {name: "squirrel",
			 value: "`;squirrel` will send True Grit after his favorite thing. SQUIRREL FACTS!"},
	 {
		 name: "dadjoke",
	 value: "`;dadjoke` Will provide a randomized dad joke provided by other users"}
			],
		
		
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Currated by @lumber_Jones, @Swagull, and @aballan1"
    }
  }
});

}
	
//Ping test for bot 
    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

if (command === "trait" ) {
  var myArray = ["Flame", "Stone", "Air", "Stream"];
  var elemSub = Math.floor(Math.random()* 4);
  message.channel.send(myArray[elemSub]);
}

// New version of insult generator here utlizes the above 'trait' command process. But with a bit more in the array. 
	
if (command === "insult"){
	
	generateRandomInsult();
}
	//const request= require("request")("http://numbersapi.com/random/math?json",)
//function(err, res, body) {
//var data = JSON.parse(body);
//if (data && data.text) {
//msg.channel.sendMessage(data.text)
//}};
});
client.login(config.token);
