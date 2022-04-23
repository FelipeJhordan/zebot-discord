import { CommandAbstract } from "../../../../domain/model/Command";
import { IDefaultParams } from "../../../protocols/IDefaultParams";

class FriendJoke1  extends CommandAbstract{
    async run({args, message}: IDefaultParams): Promise<void> {
        if(args?.includes("denilson")) {
            message.reply("É um bobão")
        } else if(args?.includes("alcides")) {
            message.reply("É um nerdola, querendo ou não.")
        } else if(args?.includes("nerdola")) {
            message.reply("Beijinho no ombro que o recalque passa longe.")
        }
    }
    
}

export default new FriendJoke1()