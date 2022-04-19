import "dotenv/config"

const env = process.env

export const discordConfig = {
    clientId: env.DISCORD_TOKEN
}