import express from 'express';
import connectDatabase from './config/db.js';

//Intialize express application
const app = express();


//Connect to the database
connectDatabase();

//Configure Middleware
app.use(express.json());


//API endpoints
/*
GET
*/
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

/*
POST api/users
Register user
*/
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});



//Connection listener
app.listen(3000, () => console.log ('Express server running on port 3000'));