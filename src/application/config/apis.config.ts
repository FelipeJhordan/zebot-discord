import apis from "../../../apis.json"
import { Link } from "../protocols/ILink"

interface IApiJson {
    links: Link[]
}

const getLink = async (slug: string): Promise<Link> => {
    const link = await (apis as IApiJson).links.find(l => l.slug == slug) as Link
    return link
}

const SLUGS = {
    API_CHUCKNORRIS:"chuckNorrisApi"
}

export {
    getLink,
    SLUGS
}

