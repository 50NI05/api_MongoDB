const express = require('express')
const bodyParser = require('body-parser')
const Users = require('./api/users-api')

const app = express()
require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/users', Users);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})