const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../database/controllers/rsvp');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/rsvps', (req, res) => {
  console.log(req.body)
  controllers.findRsvpAndUpdate(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send(result);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
