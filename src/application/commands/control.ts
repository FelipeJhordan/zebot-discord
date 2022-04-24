import { IDefaultParams } from "../protocols/IDefaultParams";
import help from "./actions/help/help";
import chuckNorrisJokes from "./actions/jokes/chuck-norris-jokes";
import sendBallCat from "./actions/jokes/send-ball-cat";
import sendHello from "./actions/send-hello";

type CommandType = string | string[]

interface GenericInterface {
    [key: string]: Function
}

const commandsConditionalObject: GenericInterface  = {
    "send-hello": sendHello.run,
    "fish":   sendBallCat.run,
    "jokes-chuck": chuckNorrisJokes.run.bind(chuckNorrisJokes),
    "help": help.run
}

const invalidParam = async (value: IDefaultParams) => await value.message.reply("Opção Inválida, tente novamente seu bobão!") 

export  const control = async (command: CommandType, params: IDefaultParams ) =>  {
    try {
        if(typeof(command) == "string") {
            await commandsConditionalObject[command](params) 
        } else if(command.length > 1) {
            const promises = command.map( c => commandsConditionalObject[c](params))
    
            await Promise.all(promises)
        }
    } catch(e) {
        await invalidParam(params)
    }
}