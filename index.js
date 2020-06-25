const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();

app.use(express.json({extended: true}));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.listen(PORT, () => console.log(`[START] Сервер запущен на ${PORT} порту.`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();