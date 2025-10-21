# YTMDesktop Locales Repository

This repository is intended to store all locale files for different languages.

- Translators may make pull requests for translations into this repository.

- Users can get up-to-date translation files via github raw links.

## Current Supported Languages

| Language              | Language in local characters | Filename |
| ----------------------| -----------------------------| -------- |
| Arabic                | عربى                         | ar.json |
| Catalan               | Català                       | ca.json |
| Czech                 | čeština                      | cs.json |
| Danish                | dansk                        | da.json |
| German                | Deutsche                     | de.json |
| Greek                 | Ελληνικά                     | el.json |
| English               | English                      | en.json |
| Spanish               | Español                      | es.json |
| French                | Français                     | fr.json |
| Hungarian             | Magyar                       | hu.json |
| Indonesian            | Indonesia                    | id.json |
| Italian               | Italiano                     | it.json |
| Japanese              | 日本語                       | ja.json |
| Korean                | 한국어                       | ko.json |
| Kazakh                | Қазақша                      | kz.json |
| Dutch                 | Nederlands                   | nl.json |
| Norwegian             | Norsk                        | no.json |
| Polish                | Polskie                      | pl.json |
| Portuguese            | Português                    | pt.json |
| Portuguese (Brazil)   | Português (Brasil)           | pt-BR.json |
| Russian               | Pусский                      | ru.json |
| Swedish               | Svenska                      | se.json |
| Thai                  | ไทย                          | th.json |
| Turkish               | Türkçe                       | tr.json |
| Ukrainian             | Український                  | uk.json |
| Chinese(Simplified)   | 简体中文                     | zh.json |
| Slovak                | Slovenčina                   | sk.json |

## To Contribute

To create translations for this repository, you'll need [Git](https://git-scm.com/downloads) installed on your computer. *Additionally NodeJS is required if you are adding new Translation strings for all languages so you can run the script*

From your command line:

```sh
git clone https://github.com/ytmdesktop/ytmdesktop-locales.git
cd ytmdesktop-locales
```

### Creating a new Locale
After cloning, duplicate `scaffold.json` and rename it to your locale code, (e.g. `zh.json` for Simplified Chinese) and add a row in README.md for it to visually show in the table above.

### Adding new Strings
After cloning, add the new String into the `scaffold.json` and run the npm script with either `npm run` or `node NormalizeLocale.js`

This will add the string into all of the other languages to make it clear what is missing for new people to contribute later. Go into whatever language you know Natively and add the information into it, this includes `en.json` for English. 😄

## Final notes
It would be even better you could watch this repo to help us improve the translation upon new feature introduced.

## License
CC0 1.0
