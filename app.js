const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://ramez_chreide:f38LNOtKYzMQpudR@cluster0.vzhlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(result => {
    app.listen(3000);
    console.log('Server listening on port 3000...');
  })
  .catch(err => console.error(err));
