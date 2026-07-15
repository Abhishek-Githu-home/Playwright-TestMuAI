require('dotenv').config();

const wsEndpoint = process.env.TESTMUI_WS_ENDPOINT;

if (!wsEndpoint) {
  throw new Error(
    'Missing TESTMUI_WS_ENDPOINT environment variable. Copy .env.example to .env and set TESTMUI_WS_ENDPOINT to your TestMuAi cloud WebSocket URL.'
  );
}

module.exports = { wsEndpoint };