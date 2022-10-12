const db = require('mongoose');
const Model = require('../models/client.model');

const uri = process.env.API_KEY;
db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('[Services] DB Conectada con exito');

function addClient(client){
  const myClient = new Model(client);
  myClient.save();
};

async function getClients(){
  const clients = await Model.find();
  return clients
};

module.exports = {
  add: addClient,
  list:getClients
}
