const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (query,callback) => {
  console.log(query)
  let options = {
    url: `https://api.github.com/users/${query}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
  axios.get(options.url,options).then(response=>callback(response.data,null)).catch(err=>callback(null,err))

}

module.exports.getReposByUsername = getReposByUsername;