const NextI18Next = require("next-i18next").default;

const options = {
  defaultLanguage: "es",
  otherLanguages: ["en"],
  localePath: 'src/static/locales'
};
module.exports = new NextI18Next(options);
