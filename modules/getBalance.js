const getAction = require("../actions/get");
const sleep = require("./sleep");
const config = require("../config.json");
const logger = require("../logger");

async function getBalance(token, ua) {
  let retry = 0;
  let data = null;
  while (retry < config.retryCount) {
    if (!!data) {
      break;
    }
    data = await getBalanceInternal(token, ua);
    retry++;
  }

  return data;
}

async function getBalanceInternal(token, ua) {
  try {
    const response = await getAction(token, "balance/get", ua);
    return response.data.data.data;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;

      if (status >= 500) {
        console.log("Lost connect, auto connect after 5s, retry to die");
        logger.error(`getBalanceInternal error ${status}`, "error");
        await sleep(5);
        return null;
      } else if (status === 401) {
        console.log(`\nToken loi hoac het han roi\n`);
        logger.error(
          `getBalanceInternal error Token loi hoac het han roi`,
          "error"
        );
        process.exit(1);
      } else if (status === 400) {
        logger.error(
          `getBalanceInternal error ${error.response.data.error_code}`,
          "error"
        );
        return error.response.data;
      } else {
        logger.error(`getBalanceInternal error ${status} undefined`, "error");
        await sleep(5);
        return null;
      }
    } else if (error.request) {
      console.log("request", error.request);
      console.log("Lost connect, auto connect after 3s, retry to die");
      logger.error(
        `getBalanceInternal error request ${error.request}`,
        "error"
      );
      await sleep(3);
      return null;
    } else {
      console.log("error", error.message);
      console.log("Lost connect, auto connect after 3s, retry to die");
      logger.error(`getBalanceInternal ${error.message}`, "error");
      await sleep(3);
      return null;
    }
  }
}

module.exports = getBalance;
