import { IDefaultHttpParams } from "../IDefaultHttpParams";
import { IDefaultResponse } from "../IDefaultResponse";

export abstract class AbstractHttpHelper {
    abstract get(params: IDefaultHttpParams): Promise<IDefaultResponse>;
    
}