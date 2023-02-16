/* eslint-disable @typescript-eslint/no-var-requires */

const envMap = {
  local: {
    'Home Page': `https://www.lloydsbank.com/`,
  },
  bld: {
    'Home Page': `http://home.cp-gaa-dev-ecomm-b2b-services.uc.r.appspot.com`,
  },
  int: {
    'Home Page': `https://www.lloydsbank.com/`,
  },
};

const geturl = (urls): WebdriverIO.Element => {
  return envMap[process.env.ENV][urls];
};

export { geturl };
