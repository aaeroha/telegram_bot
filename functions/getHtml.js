import axios from "axios";
import cheerio from "cheerio";

export default async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      console.log("GET HTML >>>>");
      return cheerio.load(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
