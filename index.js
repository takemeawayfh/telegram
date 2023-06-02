const { Telegraf, Markup } = require('telegraf');
const fetch = require('node-fetch');

const bot = new Telegraf('6120918205:AAFznT8E2JgtkkufL6Od86tLthbPqk6ub5s');

bot.start((ctx) => {
    ctx.reply('Я бот, наберите /help чтобы увидеть доступные команды');
});

bot.command('help', (ctx) => {
    ctx.reply('Список доступных команд: \n\n' +
        '/hello - поздороваться \n' +
        '/joke - пошутить \n' +
        '/R - Я'

    );
});

bot.command('hello', (ctx) => {
    ctx.reply('Привет');
});
bot.command('joke', async (ctx) => {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();

        ctx.reply(data.setup + '\n\n' + data.punchline);
    } catch (error) {
        console.log(error);
        ctx.reply('Произошла ошибка. Попробуйте еще раз позже.');
    }
});

bot.command('R', (ctx) => {
    let arr = ['красивый', 'умный', 'важный', 'хороший', 'глупый', 'дерево', 'мыло', 'огурец', 'дом', 'сестра', 'друг', 'ворона', 'огонь', 'ПИВО'];
    function getRandomNumber(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    ctx.reply('я - ' + getRandomNumber(arr));
})

bot.launch();