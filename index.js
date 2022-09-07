const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();
const DATABASE_URL =  process.env.DATABASE_URL || `postgresql://planner:Dikgang@localhost:5432/price_plan`

const config = {
    connectionString: DATABASE_URL
}

const db = pgp(config)


//Sets our app to use the handlebars engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/', (req,res)=>{

    res.render('index',{})
    // console.log(db);
});

app.post('/calc_bill',(req,res)=>{
    
});

app.get('/price_plans',(req,res)=>{
    
});

app.get('/price_plans/:id',(req,res)=>{
    
});

app.get('/link_user',(req,res)=>{
    
});

app.post('/link_user',(req,res)=>{
    
});

const port = process.env.PORT || 3010;
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`)
})