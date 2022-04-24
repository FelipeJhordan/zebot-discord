import { CommandAbstract } from "../../../../domain/model/Command";
import { IDefaultParams } from "../../../protocols/IDefaultParams";
import { allCategories } from "./categories";
import { IHelpText } from "./protocols/IHelpText";

class Help  extends CommandAbstract{
    async run({args, message}: IDefaultParams): Promise<void> {
        try {
            let messageText: string = `-----Comandos Lista-----\n`
            if(args?.length > 0 ) {
                const promise = (args as string[]).map( async arg => {
                    let module
              
                    module = await import(`./categories/${arg}.help.category`)
                    messageText+= `\n${arg.toUpperCase()}`
                    await module.default.helpTexts.forEach(t => messageText+= `\nComando: \t${t.command}\t\t\t-- Descrição: \t${t.description}`)
                
                })
    
                await Promise.all(promise)
                await message.reply(messageText)
                return
            }
    
               Object.entries(allCategories).forEach((obj: any) => {
               messageText+=" \n\nCategoria:\t"+obj[0]
               const category = obj[1] as IHelpText[]
                    category.forEach(t => messageText+= `\nComando: \t${t.command.padEnd(34-t.command.length+1)}\t\t\t-- Descrição: \t${t.description}`)
               })
    
               message.reply(messageText)
        } catch(e) {
            message.reply("Não existe uma categoria para esse comando.")
        }


    }
    
}

export default new Help()