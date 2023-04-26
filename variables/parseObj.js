import sym from "./symbols.js";

export default {
  greetings: `*Доброго утрeчка  ${sym.morning}  Династовцы  ${sym.morningFamely}*`,
  lead: "",
  blockOne: { title: "", list: [] },
  blockTwo: {
    title: "",
    subBlockOne: {
      title: `*Мужские имена* ${sym.male}`,
      list: "",
    },
    subBlockTwo: {
      title: `*Женские имена* ${sym.female}`,
      list: "",
    },
  },
  blockThree: {
    title: `*День памяти православных святых* ${sym.cross}`,
    list: [],
  },
  blockFour: {
    title: `*Сегодняшний день в мировой истории:* ${sym.WorldHistory}`,
    list: [],
  },
  blockFive: {
    title: `*В этот день родились:* ${sym.bearthday}`,
    list: [],
  },
};
