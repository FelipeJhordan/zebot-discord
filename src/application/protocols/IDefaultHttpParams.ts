
type keyString = {
    [key: string]: string
}

export interface IDefaultHttpParams {
    body?: any,
    headers?: keyString,
    params?: keyString,
    url: string,
    query?: string[]
}