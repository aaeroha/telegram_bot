import vars from "./variables/var.js";
import getHtml from "./functions/getHtml.js";
import parse from "./functions/parse.js";
import poster from "./functions/poster.js";

console.log("BOT STARTED >>>>");

setInterval(async () => {
  console.log("CHECK INTERVAL >>>>");
  if (new Date().getHours() == 08 || new Date().getHours() == 8) {
    let html = await getHtml(vars.url);
    await parse(html);
    poster();
  }
}, 15 * 60000);
