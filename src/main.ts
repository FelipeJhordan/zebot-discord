import { Client, Intents } from "discord.js";
import "dotenv/config";
import { Message } from "../node_modules/discord.js/typings/index";
import { discordConfig } from "./application/config/discord.config";
import { messageListener } from "./application/listeners/message/message.listener";

const init = async () => {
  try {
    const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]});

    client.once("ready", () => {
      console.log("Ready!");
    });
    
     client.on('messageCreate',async (message: Message) =>  await messageListener({client, message}));
     client.login(discordConfig.discordToken)

    
      
  } catch (e) {
      console.error("App Init error!");
      console.error(JSON.stringify(e));
  }
};

init()