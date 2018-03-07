import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import expressBunyan from 'express-bunyan-logger';

import {
  existsOrCreate
} from 'utils/file';

const logsFolder = path.join(__dirname, '../../logs');
const accessLog = path.join(logsFolder, 'access_log.log');
const errorLog = path.join(logsFolder, 'error_log.log');
const wsOptions = { flags: 'a', encoding: 'utf-8' };

mkdirp.sync(logsFolder);

const logger = expressBunyan({
  streams: [{
    level: 'debug',
    stream: process.stdout
  }, {
    level: 'info',
    stream: fs.createWriteStream(accessLog, wsOptions)
  }, {
    level: 'error',
    stream: fs.createWriteStream(errorLog, wsOptions)
  }]
})

export default logger;
