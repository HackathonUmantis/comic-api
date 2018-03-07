require('dotenv').config();

const path = require('path');

try {
  require(path.join('..', '/build/bundle.js'));
} catch (err) {
  console.error(err);
}
