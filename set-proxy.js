// This file is just to mask the apiUrl when building the app
const fs = require('fs');
const environment = require('./src/environments/environment.node.js');

let splitUrl = environment.apiUrl.split('default/');
const proxyConfig = {
    "/personalInfo": {
      "target": splitUrl[0],
      "secure": true,
      "pathRewrite": {
        "^/personalInfo": 'default/' + splitUrl[1]
      },
      "changeOrigin": true,
      "logLevel": "debug"
    }
  };

fs.writeFileSync('./proxy.conf.json', JSON.stringify(proxyConfig, null , 2));