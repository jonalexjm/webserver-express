const express = require('express')
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public'));

//express HBS engine
//hbs.registerPartial(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {    
  res.render('home', {
      nombre : 'john alexander',
      anio : new Date().getFullYear()
  })
}); 
 
app.listen(3000, ()=>{
    console.log('escuchando peticiones en el puerto 3000');
})