const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const database = {
    // Dummy Database for now//
    users: [
        {
            id: '123',
            name: 'Cole',
            email: 'cole@gmail.com',
            password: 'bit',
            enties: 0,
            joined: new Date()
        },
        {
            id: '619',
            name: 'Chuck',
            email: 'chuck@gmail.com',
            password: 'bits',
            enties: 0,
            joined: new Date()
        },
    ]
}

app.get('/', (req, res) => {
    res.send('this works')
})

// Sign In //
app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json('success');
    }else {
        res.status(400).json('error signing in')
    }
})

// Register //
app.post('/register')

app.listen(3000, ()=> {
    console.log('App running on port 3000');
})


/*
/ Root Route --> res =this works
/ Sign In Route --> POST Request (because we're posting JSON) (success/fail)
/ Register --> POST Request (return new created user)
/Profile/:userID --> GET Request = user
/image --> PUT --> user
*/