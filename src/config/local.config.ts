// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getTags } = require('../support/bddTags');
const baseConfig = require('./base.config');

exports.config = {
  ...baseConfig,
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 4,
      browserName: 'chrome',
      platform: 'WINDOWS',
      acceptInsecureCerts: true,
     'goog:chromeOptions': { 
         args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
      }
   }],
};
