const { dirname } = require('path');
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);