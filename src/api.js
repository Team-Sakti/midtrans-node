const axios = require('axios');

const BASE_URL = process.env.NODE_ENV == 'production' ? 'api.midtrans.com' : 'api.sandbox.midtrans.com';
const TOKEN = process.env.MIDTRANS_KEY;
const ENCODE_TOKEN = Buffer.from(TOKEN).toString('base64');

const Api = axios.create({
  baseURL: `https://${BASE_URL}/v2/`,
  headers: {
    'Authorization' : `Basic ${ENCODE_TOKEN}`
  }
});

module.exports = Api;