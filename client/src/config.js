let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:8001';
}

exports.API_ROOT = `${backendHost}/${apiVersion}`;
