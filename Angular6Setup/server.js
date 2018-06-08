const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.listen(port);
console.log('Server started! At http://localhost:' + port);

const intervalList = [
    {id: 1, startDate: '1/1/18', endDate: '1/2/18', position: '37.00777N', interval: '24.00, 11.66, 270.20', master: 266.00, diff: -9.70, wind: '4, SW', swell: '0.4, sw', dayConsideration: 'good day'},
    {id: 1, startDate: '1/1/18', endDate: '1/2/18', position: '37.00777N', interval: '24.00, 11.66, 270.20', master: 266.00, diff: -9.70, wind: '4, SW', swell: '0.4, sw', dayConsideration: 'good day'},
    {id: 1, startDate: '1/1/18', endDate: '1/2/18', position: '37.00777N', interval: '24.00, 11.66, 270.20', master: 266.00, diff: -9.70, wind: '4, SW', swell: '0.4, sw', dayConsideration: 'good day'}
];

app.get('/api/intervals', function(req, res) {
    res.send(intervalList);
});

app.post('/api/addIntervals', function(req, res) {
    intervalList.push(req.body);
    setTimeout((function() {res.send('Add an Interval')}), 2000);
});
