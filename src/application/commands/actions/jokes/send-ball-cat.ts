import { CommandAbstract } from "../../../../domain/model/Command";
import { IDefaultParams } from "../../../protocols/IDefaultParams";

class SendBallCat  extends CommandAbstract{
    async run({message}: IDefaultParams): Promise<void> {
        await message.reply("ball-cat")
    }
    
}

export default new SendBallCat()