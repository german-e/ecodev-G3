const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/header.html'));
})

app.listen(3030, () => {
    console.log('Servidor en puerto 3030');
})
