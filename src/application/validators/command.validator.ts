import { Message } from "discord.js";
import { discordConfig } from "../config/discord.config";
import { commandValidatorResult } from "./protocols/message.validator";


export const commandValidator = (message: Message): commandValidatorResult|void => {
    const BLANK_SPACE = ' '
    const PREFIX = discordConfig.preffix || "-"
    
    if(message.author.bot) return
    if(message.channel.type == 'DM') return;
    if(!message.content.toLowerCase().startsWith(PREFIX.toLowerCase())) return;

    const inputWithoutPreffix = message.content.trim().slice(PREFIX.length)
    const [command, args ] = inputWithoutPreffix.split(BLANK_SPACE, 2)
    return {
        args,
        command
    }
}