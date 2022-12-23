const {MongoClient} = require('mongodb');

async function main(){

  const usr = "prasanna_1010";
  const pass = "Q97w4CNyTtfOM9V9";
  const dbn = "PortfolioManager";

    const uri = `mongodb+srv://prasanna-1010:${pass}@cluster0.akwwrkw.mongodb.net/test`;

    const client = new MongoClient(uri);

    module.exports = client;

}

main().catch(console.error);
