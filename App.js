const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {

  res.send('the end point is /api/bot')

})

app.get('/api/bot', (req, res) => {

  res.sendFile('./bot.json',{ root: __dirname})

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

})

function randomString(length) {

		var result           = '';		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		var charactersLength = characters.length;

		for ( var i = 0; i < length; i++ ) {

		   result += characters.charAt(Math.floor(Math.random() * charactersLength));

		}

		return result;

	 }

function randomNumString(length) {

		var result           = '';

		var characters       = '0123456789';

		var charactersLength = characters.length;

		for ( var i = 0; i < length; i++ ) {

		   result += characters.charAt(Math.floor(Math.random() * charactersLength));

		}

		return result;

	 }

const fs = require('fs')

const newObject = {

  

  BOTusername: randomString(8),

  id: randomNumString(7) 

}
