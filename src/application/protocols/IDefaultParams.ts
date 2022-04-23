import { Client, Message } from "discord.js";

export interface IDefaultParams {
    client: Client,
    message: Message,
    args?: string | string[]
}