const { Telegraf } = require("telegraf");
const TOKEN = "6139307692:AAH7O14oO-juIsdrnKcle632TmYXfGWkU0k";
const bot = new Telegraf(TOKEN);

const web_link = "https://6405bea2ada02800084117e0--stellular-narwhal-b3fe08.netlify.app//";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();