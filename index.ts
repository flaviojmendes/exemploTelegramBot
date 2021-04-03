import { Telegraf } from 'telegraf'

const bot = new Telegraf("1795377889:AAHpok8JE3r4TZfZFexSCnitWQhSpodEHWE")


bot.command('hello', (ctx) => ctx.reply('Hello'!))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))