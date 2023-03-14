const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.mercadolibre.com.ar/";

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
