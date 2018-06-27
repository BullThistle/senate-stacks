const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const apiKey = process.env.OPEN_SECRETS_KEY;

//Legislator information endpoint
router.route('/legislator/:cid').get(function(req, res) {
  const cid = req.params.cid;

  const candUrl = `https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&cycle=2018&apikey=${apiKey}&output=json`;

  request(candUrl, function(err, response, body) {
    if (body === 'Resource not found') {
      res.send({ status: 'Network error' });
      console.log('Api for legislator is not working');
    }
    if (err) {
      console.log('Hit error');
    } else {
      const cand = JSON.parse(body);

      if (cand.response == undefined) {
        console.log('legislators.response is undefined');
      } else {
        console.log(cand);
        res.json(cand);
      }
    }
  });
});

//Contributor information endpoint
router.route('/legislativeContributor/:cid').get(function(req, res) {
  const cid = req.params.cid;

  const contribUrl = `https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&cycle=2018&apikey=${apiKey}&output=json`;

  request(contribUrl, function(err, response, body) {
    if (body === 'Resource not found') {
      res.send({ status: 'Network error' });
      console.log('Api for legislative contributor is not working');
    }
    if (err) {
      console.log('Hit error');
    } else {
      const contribs = JSON.parse(body);

      if (contribs.response == undefined) {
        console.log('legislators.response is undefined');
      } else {
        console.log(contribs);
        res.json(contribs);
      }
    }
  });
});

router.route('/:state').get(function(req, res) {
  console.log('HI THERE');
  const state = req.params.state;
  const url = `https://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${apiKey}&output=json`;

  request(url, function(err, response, body) {
    if (body === 'Resource not found') {
      res.send({ status: 'Network error' });
    } else {
      if (err) {
        res.render('index', {
          legislators: null,
          error: 'Error, please try again'
        });
      } else {
        const legislators = JSON.parse(body);
        if (legislators.response == undefined) {
          res.render('index', {
            legislators: null,
            error: 'Error, please try again'
          });
        } else {
          res.json(legislators);
        }
      }
    }
  });
});

module.exports = router;
