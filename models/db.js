const mongoose = require("mongoose");
var url = ""
var conn = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const Schema = new mongoose.Schema({
TEST: {type:String}
})
 
module.exports = conn.model("TEST", Schema);

conn.once('open', () => console.log('Connected to the database')).catch(err =>  process.exit(1));
