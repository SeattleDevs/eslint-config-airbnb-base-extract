const { ESLint } = require('eslint');
const fs = require('fs');

const eslint = new ESLint({
  baseConfig: {
    extends: 'airbnb-base',
  },
  useEslintrc: false,
});

async function createConfigFile() {
  const config = await eslint.calculateConfigForFile('path/to/your/file.js');
  fs.writeFileSync('airbnb-config.json', JSON.stringify(config, null, 2));
  console.log('Airbnb config successfully extracted to airbnb-config.json');
}

createConfigFile();