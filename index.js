"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var bot = new telegraf_1.Telegraf("1795377889:AAHpok8JE3r4TZfZFexSCnitWQhSpodEHWE");
bot.command('hello', function (ctx) { return ctx.reply('Hello'); });
bot.launch();
// Enable graceful stop
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
