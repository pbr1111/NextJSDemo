const NextI18Next = require("next-i18next").default;

const options = {
  defaultLanguage: "es",
  otherLanguages: ["en"],
  localePath: 'src/locales'
};
module.exports = new NextI18Next(options);
