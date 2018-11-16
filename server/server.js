//CONNECTIVITY SETUP
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const moment = require('moment');
const _ = require('lodash');
const nodemailer = require('nodemailer');

const viewsPath = path.join(__dirname, '../views');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muratcem95@gmail.com',
        pass: 'hqkjctddswrplwjm'
    }
});

app.set('views', path.join(__dirname, '../views'));  
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(viewsPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/games', (req, res) => {
    res.render('index.html');
});

app.get('/contactUs', (req, res) => {
    res.render('contactUs.html');
});

app.post('/contactUsForm', (req, res) => {
    var mailOptions = {
        from: 'muratcem95@gmail.com',
        to: 'still57games@gmail.com',
        subject: `Still57 Games: ${req.body.email}`,
        text: `Name: ${req.body.name}, Message: ${req.body.message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        };
    });
});

//IO CONNECTIONS
io.on('connection', (socket) => {
    console.log('New user connected.');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});
    
server.listen(port, () => console.log(`Server is up on port ${port}`));

