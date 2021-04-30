const express = require('express');

const app = express();

const database = {
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

// SIGN IN //
app.post('/signin', (req, res) => {
    res.send('sign-in in progress')
})

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