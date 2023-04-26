import TelegramBot from "node-telegram-bot-api";
import vars from "../variables/var.js";
import parseObj from "../variables/parseObj.js";

const bot = new TelegramBot(vars.token, { polling: true });

// bot.on("message", (msg) => {
export default () => {
  setTimeout(() => {
    // * GREET:
    bot.sendMessage(vars.id, `${parseObj.greetings}`, {
      parse_mode: "Markdown",
    });
  }, 3000);
  setTimeout(() => {
    // * TODAY

    bot.sendMessage(
      vars.id,
      `${parseObj.lead}`,
      {
        parse_mode: "Markdown",
      },
      4000
    );
    setTimeout(() => {
      // * BLOCK ONE

      bot.sendMessage(
        vars.id,
        `${parseObj.blockOne.title}\n\n${parseObj.blockOne.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 5000);
    setTimeout(() => {
      // * BLOCK TWO

      bot.sendMessage(
        vars.id,
        `${parseObj.blockTwo.title}\n\n${parseObj.blockTwo.subBlockOne.title}\n${parseObj.blockTwo.subBlockOne.list}\n\n${parseObj.blockTwo.subBlockTwo.title}\n${parseObj.blockTwo.subBlockTwo.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 6000);
    setTimeout(async () => {
      // * BLOCK THREE
      bot.sendMessage(
        vars.id,
        `${parseObj.blockThree.title}\n\n${parseObj.blockThree.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 7000);
    setTimeout(async () => {
      // * BLOCK FOUR
      bot.sendMessage(
        vars.id,
        `${parseObj.blockFour.title}\n\n${parseObj.blockFour.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 8000);

    setTimeout(async () => {
      // * BLOCK FIVE
      bot.sendMessage(
        vars.id,
        `${parseObj.blockFive.title}\n\n${parseObj.blockFive.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 9000);
  });
};

// });
