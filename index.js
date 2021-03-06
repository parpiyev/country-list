const express = require('express');
const countryRoute = require('./router/roure')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Country', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDBga ulanish hosil qilindi...');
    })
    .catch((err) => {
        console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
    });
mongoose.set('useFindAndModify', false);

app.use(express.json());
app.use('/country', countryRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${port}chi portni eshitishni boshladim...`);
});