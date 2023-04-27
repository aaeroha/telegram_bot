import sym from "../variables/symbols.js";
import parseObj from "../variables/parseObj.js";
import objCleener from "../functions/objCleener.js";

export default async (html) => {
  objCleener();
  console.log("PARSE HTML >>>>");
  const $ = await html;
  // * BLOCK  ONE
  parseObj.lead = `*${$(".lead").text()}* ${sym.dayToday}`;
  parseObj.blockOne.title = ` *${$(".container .text-center").eq(1).text()}* ${
    sym.holidayList
  }`;
  $(".list-unstyled span").each((i, el) => {
    if ($(el).text().trim() == "") {
      return;
    }
    parseObj.blockOne.list += `${sym.li} _${$(el).text().trim()}_` + "\n";
  });

  // * BLOCK  TWO
  parseObj.blockTwo.title = `*${$(".orthodox-holidays .container")
    .children("h2")
    .first()
    .text()}* ${sym.angelDay}`;

  $(".orthodox-holidays .container").each((i, el) => {
    if ($(".text-primary").text()) {
      // * MAN
      $(".list-inline")
        .first()
        .each((i, el) => {
          parseObj.blockTwo.subBlockOne.list += `${$(el)
            .text()
            .replace(/\s{2,}/g, " ")
            .split(" ")
            .filter((el) => el != "")
            .map((el) => (el = `${sym.maleLi}_${el}_`))
            // .map((el) => (el = `${el}\n`))
            .join("\n")}`;
        });
    }
    if ($(".text-danger").text()) {
      // * WHOMAN
      $(".list-inline")
        .eq(1)
        .each((i, el) => {
          parseObj.blockTwo.subBlockTwo.list += `${$(el)
            .text()
            .replace(/\s{2,}/g, " ")
            .split(" ")
            .filter((el) => el != "")
            .map((el) => (el = `${sym.femaleLi}_${el}_`))
            // .map((el) => (el = `${el}\n`))
            .join("\n")}`;
        });
    }
  });

  // * BLOCK  THREE
  $("h2").each((i, el) => {
    if ($(el).text() === "День памяти православных святых:") {
      parseObj.blockThree.list += `${$(el)
        .next()
        .text()
        .split("\n")
        .map((el) => (el = `${sym.pray} ${el.trim()}`))
        .filter((el) => el != `${sym.pray} `)
        .map((el) => (el = `${el}\n`))
        .join("\n")}`;
      return false;
    }
  });
  console.log(parseObj.blockThree.list);
  $(".container #collapseOne").each((i, el) => {
    parseObj.blockThree.list += `\n${$(el)
      .text()
      .trim()
      .split("\n")
      .filter((el) => el != "")
      .map((el) => (el = `${sym.pray} ${el.trim()}`))
      .map((el) => (el = `${el}\n`))
      .join("\n")}`;
  });

  // * BLOCK FOUR
  $(".main-holidays .container")
    .children("ul")
    .eq(1)
    .each((i, el) => {
      parseObj.blockFour.list += $(el)
        .text()
        .split("\n")
        .map((el) => (el = `${sym.WorldHistoryLI}${el.trim()}`))
        .filter((el) => el != `${sym.WorldHistoryLI}`)
        .map((el) => (el = `${el}\n`))
        .join("\n");
    });

  // * BLOCK FIVE
  $(".persons-born .container").each((i, el) => {
    let res = $(el)
      .text()
      .split("\n")
      .map((el) => (el = `${el.trim()}`))
      .join(" ")
      .split("  ");
    res.shift();
    res.pop();
    res = res.map((el) => (el = `${sym.star} ${el.trim()}\n\n`)).join("");
    parseObj.blockFive.list = res;
  });
  console.log("PARSE COMPLETE >>>>");
};
