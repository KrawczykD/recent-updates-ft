/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Generate file array for upload base on verison
 *
 *
 */

function getReleaseFilesByVersion(version) {
  if (!version) {
    version = require('../../package.json').version;
  }

  var filesArray = [
    {
      name: `index.${version}.min.js`
    },
    {
      name: `vendor.${version}.min.js`
    },
    {
      name: `index.${version}.min.css`
    },
    {
      name: `index.html`
    }
  ];
  return filesArray;
}

/**
 * Claudinary config file and claudinary patch
 *
 */

var cdnConfig = {
  cloud_name: 'bouncycastlenetwork',
  api_key: '944295946387486',
  api_secret: 'D8hFxtIb5LPARllb9oQd7IA4vUM'
};

// replace cdnPatch with your cdn path path should have / on the end

exports.cdnPath = 'Platform/features/template/bo-vue3-vite-feature/';

exports.getFilesByVersion = getReleaseFilesByVersion;
exports.cdnConfig = cdnConfig;
