const express = require('express');
const hbs = require('hbs');
const fs=require('fs');

const port = process.env.PORT|| 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');




app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n',(err)=>{
    if(err){
      console.log('Unable to append to server.log')
    }
  });
 
  next();
});

//app.use((req,res,next)=>{
 // res.render('maintenance.hbs')
//});


app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});
app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
  	pageTitle:'Home Page',
  	welcomeMessage: 'Welcome to my Website'
  	
  });
});

app.get('/about', (req, res) => {
  //res.send('About Page');
  res.render('about.hbs',{
  	pageTitle:'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs',{
    pageTitle:'Projects'
  });
});
// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port,()=>{
	console.log(`Serve is up on port ${ port }`);
});


/*
//Advanced Templete--Partial
const express = require('express');

const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});
app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
  	pageTitle:'Home Page',
  	welcomeMessage: 'Welcome to my Website'
  	
  });
});

app.get('/about', (req, res) => {
  //res.send('About Page');
  res.render('about.hbs',{
  	pageTitle:'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000,()=>{
	console.log('Serve is up on port 3000');
});
*/

/*
//Dynamic passing of data from a page to other
const express = require('express');

const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
  	pageTitle:'Home Page',
  	welcomeMessage: 'Welcome to my Website',
  	currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  //res.send('About Page');
  res.render('about.hbs',{
  	pageTitle:'About Page',
  	currentYear: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000,()=>{
	console.log('Serve is up on port 3000');
});*/
/*
//load html text
const express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Hillul',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000,()=>{
	console.log('Serve is up on port 3000');
});
*/
/*
//basics on Server
const express = require('express');

var app = express();

app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
*/