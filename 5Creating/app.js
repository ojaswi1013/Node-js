const path = require('path');
//const rootDir = require('./util/path');
//can use either rootdir or path
//totally upto us

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine' , 'pug');
//app.set('view' , 'view');  //use if the folder name is not views
//which is not the case right now

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//can use rootdir or path
//totally upto us

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);