const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: '1-sem-Eksamen-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

