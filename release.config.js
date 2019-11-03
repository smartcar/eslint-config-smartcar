'use strict';

module.exports = {
  branches: [
    { name: 'master' },
    { name: 'beta', channel: 'beta', prerelease: 'beta' },
    { name: 'next', channel: 'next', prerelease: 'rc' },
  ],
};
