const express = require('express');
const controller = require('../controllers/client.controller');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const {name,
    firstName,
    lastName,
    address,
    age,
    phone,
    email
  } = req.body;

  try{
    const newClient = await controller.createClient(
      name,
      firstName,
      lastName,
      address,
      age,
      phone,
      email);
    res.status(201).json(newClient)
  }catch(e){
    console.error(e)
    next(e)
  }
})

router.get('/', async (req, res) => {
  try{
    const clients = await controller.getClients();
    res.status(200).json(clients)
  }catch(e){
    console.error(e)
  }
})

module.exports = router


