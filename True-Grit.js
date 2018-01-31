const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log(`I am online!`);
    client.user.setGame(`BEING MADE`);
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
};
//message itself 
client.on('message', msg => {
  if (msg.content === 'hello+') {
    msg.reply('Hi, there!');
  }
});


// Lots of random bull shit right around this area... watch your step!    
if(command === "heyband"){
    message.reply("hey what?");
}
    
if(command === "burn"){
    message.reply("you need some ice?")
}

// Lewd gif comment
if(command === "lewd"){
    message.reply("http://i0.kym-cdn.com/photos/images/original/000/746/820/fed.gif")
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
    
if(command === "dadjoke") {
    var message_options =[
        "What time did the man go to the dentist? Tooth hurt-y",
        " I'm reading a book about anti-gravity. It's impossible to put down!",
        "You're American when you go into the bathroom, and you're American when you come out, but do you know what youa re while you're in there?   European."
    ]
    var random_index = Math.floor(Math.random() * message_options.length)
    var chosen_message = message_options[random_index]
    
message.channel.send(chosen_message)
}   
    

//Ping test for bot 
    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
//const request= require("request")("http://numbersapi.com/random/math?json",)
//function(err, res, body) {
//var data = JSON.parse(body);
//if (data && data.text) {
//msg.channel.sendMessage(data.text)
//}};
});
client.login(config.token);
