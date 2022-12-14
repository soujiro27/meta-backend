const boom = require('@hapi/boom');
const services = require('../services/client.services');


function createClient(
  name,
  firstName,
  lastName,
  address,
  age,
  phone,
  email
){
  if(!name || !firstName || !lastName){
    throw boom.badData("Datos incompletos");
  }
  const client = {
    name,
    firstName,
    lastName,
    address,
    age,
    phone,
    email
  }
  services.add(client);
  return client
};


function getClients(){
  return services.list()
}

module.exports = {
  createClient,
  getClients
}
