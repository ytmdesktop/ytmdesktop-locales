const fs = require('fs');
const path = require('path');

const localeFolder = './locales/';

var scaffoldFile      = path.join(localeFolder, "scaffold.json");
const scaffoldRawData = fs.readFileSync(scaffoldFile);
const scaffoldData    = JSON.parse(scaffoldRawData);

for (const [key] of Object.entries(scaffoldData)) {
  scaffoldData[key] = key;
}

fs.readdirSync(localeFolder).forEach(async file => {
  if (file === "scaffold.json") { return; }

  const localePath = path.join(localeFolder, file);
  const rawData    = fs.readFileSync(localePath);
  const localeData = JSON.parse(rawData);

  var fixedData = {...scaffoldData, ...localeData};

  console.log(file, fixedData);

  fs.writeFileSync(
    localePath,
    JSON.stringify(
      fixedData,
      null,
      2
    )
  );
});
