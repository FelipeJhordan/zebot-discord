import "dotenv/config"

const env = process.env

export const discordConfig = {
    discordToken: env.DISCORD_TOKEN,
    clientId: env.CLIENT_ID,
    preffix: env.PREFFIX || ''
}