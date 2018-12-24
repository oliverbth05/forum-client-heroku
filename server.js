const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('listening');
})  