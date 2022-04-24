import { CommandAbstract } from "../../../../domain/model/Command";
import { httpClient } from "../../../../infra/http/httpFetchImpl";
import { getLink, SLUGS } from "../../../config/apis.config";
import { IDefaultParams } from "../../../protocols/IDefaultParams";
import { IDefaultResponse } from "../../../protocols/IDefaultResponse";

// interface IChuckApiResponse {
//     categories: string[],
//     created_at: string,
//     icon_url: string,
//     value: string,
//     id: string
// }

class ChuckNorris extends CommandAbstract {
    private slug = SLUGS.API_CHUCKNORRIS
    async run(params: IDefaultParams): Promise<void | IDefaultResponse> {
        const link = await getLink(this.slug)
        let chuckApiResponse: IDefaultResponse
        if(params.args?.includes("us")) {
            chuckApiResponse = await httpClient.get({
                url: link.url + "/random"
            }) 
            params.message.reply(chuckApiResponse.data.value)
            return
        } 

        chuckApiResponse = await httpClient.get({
            url: link.url + "/random"
        }) 

        if(!chuckApiResponse || !chuckApiResponse.data.id) {
            params.message.reply("Deu algo de errado com o fornecedor de piadas do deus chuck norris...",)
        } 


        params.message.reply(chuckApiResponse.data.value)
    }
}

export default new ChuckNorris()