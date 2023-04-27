import vars from "./variables/var.js";
import getHtml from "./functions/getHtml.js";
import parse from "./functions/parse.js";
import poster from "./functions/poster.js";

console.log("BOT STARTED >>>>");

// (async () => {
//   await parse(html);
//   console.log("PARSE COMPLETE >>>>");
// })();

setInterval(() => {
  console.log("CHECK INTERVAL >>>>");
  if (new Date().getHours() == 12) {
    console.log(true);
    let html = getHtml(vars.url);
    parse(html);
    poster();
  }
}, 30000);
