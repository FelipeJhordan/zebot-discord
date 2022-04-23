import { CommandAbstract } from "../../../domain/model/Command";
import { IDefaultParams } from "../../protocols/IDefaultParams";

class SendHelloCommand  extends CommandAbstract{
    async run({message}: IDefaultParams): Promise<void> {
        await message.reply("Olá "+ message.author.username)
    }
    
}

export default new SendHelloCommand()