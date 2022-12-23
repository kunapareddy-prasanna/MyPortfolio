const {MongoClient} = require('mongodb');

async function main(){

  const usr = "admin-saiteja";
  const pass = "D4iVDAeVInXecyD8";
  const dbn = "PortfolioManager";

    const uri = `mongodb+srv://${usr}:${pass}@cluster0.0ovsh.mongodb.net/${dbn}?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    module.exports = client;

}

main().catch(console.error);
