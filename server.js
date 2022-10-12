const express = require('express');
const cors = require('cors');
require('dotenv').config();
const whitelist = require('./config/whitelist')
const routerApi = require('./routes');
const { boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 8000;

 const options = {
  origin:(origin, cb) => {

    if(whitelist.includes(origin)  ){
      cb(null, true)
    } else {
      cb(new Error('Not Access'))
    }
  }
};

app.use(express.json());
app.use(cors());

routerApi(app);
app.use(boomErrorHandler)

app.listen(port, () => {
  console.log('Runinng in port: ' + port);
});
