import fetch from "node-fetch";
import { statusCode } from "../../application/config/constants/statusCode";
import { AbstractHttpHelper } from "../../application/protocols/adapters/AbstractHttpHelper";
import { IDefaultHttpParams } from "../../application/protocols/IDefaultHttpParams";
import { IDefaultResponse } from "../../application/protocols/IDefaultResponse";

 class HttpFetchImp extends AbstractHttpHelper {
    private PARAM_PREFIX = ":"
    private QUERY_PREFIX = "?"
    private QUERY_SEPARATOR = "&"
    async get(params: IDefaultHttpParams): Promise<IDefaultResponse> {
    try {
            let url = params.url
            url = this.applyQueryAndParams(params)

            const response = await fetch(url, {
                headers: {...params.headers  },
                method: "GET"
            })

            const responseJson = await response.json()

            return {
                status: statusCode.OK,
                data: responseJson
            }
        } catch(e) {
            console.error(e)
            return {
                status: statusCode.SERVICE_UNAVAILABLE, 
            }
        }
    }

    private applyQuery(url: string, query:string[]) {
        
        let urlFormated = url+this.QUERY_PREFIX
        query.forEach(q =>urlFormated =  urlFormated+q+this.QUERY_SEPARATOR)
        urlFormated = urlFormated.substring(0, urlFormated.length-1)
        return urlFormated
    }

    private applyParams(url: string, params: any) {
        let urlFormated = url
        Object.keys(params).forEach(p => {
            urlFormated = urlFormated.replace(this.PARAM_PREFIX+p, params[p])
        });

        return urlFormated
    }

    private applyQueryAndParams(defaultParams: IDefaultHttpParams): string {
        let url = defaultParams.url

        if(defaultParams.query && defaultParams.query?.length > 0) {
            url = this.applyQuery(url, defaultParams.query)
        }

        if(defaultParams.params && Object.keys(defaultParams.params)?.length > 0) {
            url = this.applyParams(url, defaultParams.params)
        }
        return url

    }
}

export const httpClient =  new HttpFetchImp()