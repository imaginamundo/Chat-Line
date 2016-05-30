// load the things we need
var express = require('express'),
	exphbs  = require('express-handlebars'),

	app = express();

// set handlebars as view engine
app.set('view engine', 'handlebars');

// set defaultLayout to main
app.engine('handlebars',
	exphbs({
		defaultLayout:'main'
	})
);

// static files
app.use('/public', express.static('public'));

// index
app.get('/', function (req, res) {
	res.render('pages/home');
});

// register
app.get('/login', function (req, res) {
	res.render('pages/login');
});

// group
app.get('/g/groupName', function (req, res) {
	res.render('pages/group');
});

// search
app.get('/search', function (req, res) {
	res.render('pages/search');
});

// errors
app.use(function(req,res){
	res.render('pages/404');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
// Run Locally
// app.listen(8080);
// console.log('http://localhost:8080/');