#!/usr/bin/env node

'use strict';

const fs = require('fs');
const util = require('./util');

// Only register hook if installed directly by a package
if (util.isSubModule()) {
  return;
}

util
  .findGitDirectory()
  .catch(util.errorHandler);
