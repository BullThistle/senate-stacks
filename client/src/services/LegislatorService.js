/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class LegislatorService {
  getLegislatorsFromState(states, callback) {
    axios
      .get(`http://localhost:6200/${states}`)
      .then((response) => {
        callback(response.data);
      })
      .catch(() => {
        callback(null);
      });
  }

  getLegislator(cid, callback) {
    axios
      .get(`http://localhost:6200/legislator/${cid}`)
      .then((response) => {
        callback(response.data);
      })
      .catch(() => {
        callback(null);
      });
  }

  getLegislativeContributor(cid, callback) {
    axios
      .get(`http://localhost:6200/legislativeContributor/${cid}`)
      .then((response) => {
        callback(response.data);
      })
      .catch(() => {
        callback(null);
      });
  }
}
