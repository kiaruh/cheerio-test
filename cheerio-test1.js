const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.infobae.com/opinion/2023/03/06/no-vuelvas-messi/";

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    console.log($);
    console.log("------");

    $("h2").each((i, el) => {
      console.log($(el).text());
    });
  }
});
