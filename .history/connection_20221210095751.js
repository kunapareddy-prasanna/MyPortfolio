const {MongoClient} = require('mongodb');

async function main(){

  const usr = "prasanna_1010";
  const pass = "nUQoAayX0X0nVL89";
  const dbn = "PortfolioManager";

    const uri = `mongodb+srv://prasanna_1010:${pass}@cluster0.akwwrkw.mongodb.net/test`;

    const client = new MongoClient(uri);

    module.exports = client;

}

main().catch(console.error);
