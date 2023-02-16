/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const https = require('https');
const jp = require('jsonpath');
let fsexe = require('fs-extra');
import { assert } from 'chai';
let response = '';

const getCall = (callName: string): void => {
  let data = fsexe.readFileSync('src/testData/apidata/' + callName + '.json', 'utf8');
  let apiData = JSON.parse(data);
  response = browser.call(() => {
    return axios({
      method: 'get',
      url: apiData.url,
      responseType: 'stream',
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  });
};

const postCall = (callName: string, scenarioType: string): void => {
  let data = fsexe.readFileSync('src/testData/apidata/' + callName + '.json', 'utf8');
  let apiData = JSON.parse(data);
  response = browser.call(() => {
    return axios({
      method: 'post',
      url: apiData.url,
      data: apiData.data,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  });
};

const validateStatus = (expectedStatus: string): void => {
  assert.equal(expectedStatus, response.status);
};

const validateData = (jsonQuery: string, value: string): void => {
  let apiResponse = response.data;
  // json query need to be passed from step to filter results from json file. Go through https://www.npmjs.com/package/jsonpath for more details.
  var actualValue = jp.query(apiResponse, jsonQuery);
  console.log('Actual Value : ', actualValue);
  assert.equal(value, actualValue);
};

export { postCall, getCall, validateStatus, validateData };
