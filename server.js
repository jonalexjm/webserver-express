const express = require('express')
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public'));

const port = process.env.PORT || 3000;

//express HBS engine
//hbs.registerPartial(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {    
  res.render('home', {
      nombre : 'john alexander',
      anio : new Date().getFullYear()
  })
}); 
 
app.listen(port, ()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
})