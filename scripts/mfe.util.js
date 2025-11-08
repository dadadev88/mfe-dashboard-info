const path = require('path');
const fs = require('fs');

const getRemotesEntryUrl = ({env}) => {
  const envFilePath = path.resolve('../mfe-dashboard-shell/manifests/', `${env}.manifest.json`);
  console.log(`Manifest file: ${envFilePath}`);
  const json = fs.readFileSync(envFilePath, 'utf-8');

  const remotes = {};
  JSON.parse(json).forEach(remote => {
    remotes[remote.module] = `${remote.module}@${remote.remoteEntryUrl}`;
  });
  return remotes;
}

printHeaders = () => {
  console.log('*********** MF-UTIL ***********');

  console.log('=== APP CONFIGURATION ===');
  console.log('Environment:', process.env.ENVIRONMENT_APP);

  console.log('=== WEBPACK CONFIGURATION ===');
  console.log('Mode:', process.env.WEBPACK_MODE);
  console.log('Dev port:', process.env.WEBPACK_DEV_PORT);
  console.log('Public path:', `${process.env.APP_PUBLIC_PATH}`);
  console.log(`\n`);
}

module.exports = {
  getRemotesEntryUrl,
  printHeaders,
};
