const Api = require('../api');

exports.getTransactionStatus = async (transactionID) => {
  try {
    const response = await Api.get(`${transactionID}/status`);
    return response;
  } catch (error) {
    return error;
  }
}