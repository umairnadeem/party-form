const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (payload, callback) => {
  let query = { firstName: payload.firstName,
    lastName: payload.lastName },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

  Rsvp.findOneAndUpdate(query, payload, options, (err, result) => {
    if (err) {
      return console.error(err);
    }
    callback(null, result);
  });
};
module.exports = {
  findRsvpAndUpdate
};
