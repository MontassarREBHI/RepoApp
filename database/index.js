const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

let repoSchema = mongoose.Schema({
    id: Number,
    name: String,
    user: String,
    forks_url:String,
    forks_count:Number, 
    created_at:Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = async (repo) => {
var repository= await new Repo(repo).save()
console.log(repository)

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;