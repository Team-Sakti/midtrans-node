const Api = require('../api');
const circular = require('circular-json');

exports.getTransactionStatus = async (transactionID) => {
  try {
    const response = await Api.get(`${transactionID}/status`);
    let res = circular.stringify(response);
    return res;
  } catch (error) {
    let err = circular.stringify(error);
    return err;
  }
}