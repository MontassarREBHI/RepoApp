const express = require('express');
const {save} = require('../database/index')
let app = express();
const {getReposByUsername} =require('../helpers/github.js')
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.userName,(data,err)=>{
    if(data){
      data.items.map(repo=>save({
      id: repo.id,
      name: repo.name,
      user:repo.owner.login,
      forks_url:repo.forks_url,
      forks_count:repo.forks_count, 
      created_at:repo.created_at
    }))
    res.json(data.items)
  }
  else{res.send(err)}
  
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});
})
app.get('/repos', function (req, res) {
  getReposByUsername('MontassarREBHI');
  res.send('test');
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

