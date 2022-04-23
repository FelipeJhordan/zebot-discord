import { IDefaultParams } from "../../application/protocols/IDefaultParams";
import { IDefaultResponse } from "../../application/protocols/IDefaultResponse";

export abstract class CommandAbstract {
    abstract  run(params: IDefaultParams): Promise<IDefaultResponse | void>; 
}