var mysql		= require('mysql');
var dotenv		= require('dotenv');
dotenv.config({path:'../.env'});

var connection  = mysql.createConnection({
	host		: process.env.MYSQL_HOST,
	port 		: process.env.MYSQL_PORT,
	user        : process.env.MYSQL_ID,
	password	: process.env.MYSQL_PASSWORD,
	database	: process.env.MYSQL_DATABASE
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting : ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);

});

connection.query({
  sql: 'SELECT * FROM `parrainages_enrichis` WHERE `nom` = ?',
  timeout: 3600000, // 3600s :-) 
  values: ['DUPONT']
}, function (error, results, fields) {
  // error will be an Error if one occurred during the query 
  // results will contain the results of the query 
  // fields will contain information about the returned results fields (if any) 
  console.log('results : '+ results);
});



connection.end(function(err) {
	console.log('The connection is terminated now');
});
