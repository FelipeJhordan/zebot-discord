import { control } from "../../commands/control";
import { IDefaultParams } from "../../protocols/IDefaultParams";
import { commandValidator } from "../../validators/command.validator";
import { commandValidatorResult } from "../../validators/protocols/message.validator";

export const  messageListener = async ({message, client, args}: IDefaultParams) => {
    const filterResult = await commandValidator(message)

    if(!filterResult) {
        return
    }

    if(!filterResult?.command) {
        await message.reply("Têm alguma coisa de errada ai.")
        return
    } 
    const {command, args:argsInput} = filterResult as commandValidatorResult
    await control(command, {
        client, message, args:argsInput
    })

}