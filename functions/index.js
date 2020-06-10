const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

const url = `https://api.forecast.io/forecast/${functions.config().darksky.key}/`;

exports.darksky = functions.https.onRequest((req, res) => {
  if (req.method !== 'GET') {
    return res.status(403).send('Forbidden!');
  }

  return cors(req, res, () => {
    return axios
      .get(`${url}${req.query.lat},${req.query.lng}?exclude=minutely`)
      .then(response => res.send(response.data))
      .catch(err =>
        res.status(500).json({
          error: err,
        })
      );
  });
});
