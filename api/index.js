const express = require('express');
const app = express();
const path = require('path');
var multer = require('multer')
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

// Databse Connection
const db_connection = require('./config/database').promise();

app.use(cors());
app.use(bodyParser.json() ); 
app.use(bodyParser.urlencoded({extended:true}));


app.post('/loginGoogle', async (req, res) => {	
	try {
		let date_today = new Date();

		const [sql] = await db_connection.execute("SELECT * FROM users WHERE email = ? AND password = ?",[req.body.email, req.body.googleId]);
		if (sql.length > 0) {
			return res.status(200).json({success: true, usersid:sql[0].name});
		}else { 
			const [rows] = await db_connection.execute("INSERT INTO `users` (`name`,`email`,`password`,`givenName`,`imageUrl`,`familyName`,`date`) VALUES(?, ?, ?, ?, ?, ?, ?)",[req.body.name,req.body.email,req.body.googleId,req.body.givenName,req.body.imageUrl,req.body.familyName,date_today]);
			if (rows.affectedRows === 1) {
				return res.json({ success: true, usersid:rows.insertId, name: rows.name}) 
			}	
		}
	} catch (err) {console.log(err)}
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))