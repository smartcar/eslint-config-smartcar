'use strict';

module.exports = {
  branches: [
    { name: 'master' },
    { name: 'next', channel: 'beta', prerelease: 'beta' },
    { name: 'release', channel: 'next', prerelease: 'rc' },
  ],
};
