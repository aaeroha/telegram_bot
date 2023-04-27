import TelegramBot from "node-telegram-bot-api";
import vars from "../variables/var.js";
import parseObj from "../variables/parseObj.js";

const bot = new TelegramBot(vars.token, { polling: true });

// bot.on("message", (msg) => {
export default () => {
  // * GREET:
  setTimeout(() => {
    bot.sendMessage(vars.id, `${parseObj.greetings}`, {
      parse_mode: "Markdown",
    });
  }, 3000);

  // * TODAY
  setTimeout(() => {
    bot.sendMessage(
      vars.id,
      `${parseObj.leadText}`,
      {
        parse_mode: "Markdown",
      },
      5000
    );

    // * BLOCK ONE
    setTimeout(() => {
      bot.sendMessage(
        vars.id,
        `${parseObj.blockOne.title}\n\n${parseObj.blockOne.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 7000);
    setTimeout(() => {
      // * BLOCK TWO

      bot.sendMessage(
        vars.id,
        `${parseObj.blockTwo.title}\n\n${parseObj.blockTwo.subBlockOne.title}\n${parseObj.blockTwo.subBlockOne.list}\n\n${parseObj.blockTwo.subBlockTwo.title}\n${parseObj.blockTwo.subBlockTwo.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 9000);
    setTimeout(() => {
      // * BLOCK THREE
      bot.sendMessage(
        vars.id,
        `${parseObj.blockThree.title}\n\n${parseObj.blockThree.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 11000);

    // * BLOCK FOUR
    setTimeout(() => {
      bot.sendMessage(
        vars.id,
        `${parseObj.blockFour.title}\n\n${parseObj.blockFour.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 13000);

    // * BLOCK FIVE
    setTimeout(() => {
      bot.sendMessage(
        vars.id,
        `${parseObj.blockFive.title}\n\n${parseObj.blockFive.list}`,
        {
          parse_mode: "Markdown",
        }
      );
    }, 15000);
  });
};

// });
