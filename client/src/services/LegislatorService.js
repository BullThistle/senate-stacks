/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class LegislatorService {
  getLegislatorsFromState(states, callback) {
    axios
      .get(`api/${states}`)
      .then((response) => {
        callback(response.data);
      })
      .catch(() => {
        callback(null);
      });
  }

  getLegislator(cid, callback) {
    axios
      .get(`/api/legislator/${cid}`)
      .then((response) => {
        callback(response.data.response.summary['@attributes']);
      })
      .catch(() => {
        callback(null);
      });
  }

  getLegislativeContributor(cid, callback) {
    axios
      .get(`/api/legislativeContributor/${cid}`)
      .then((response) => {
        callback(response.data.response.contributors.contributor);
      })
      .catch(() => {
        callback(null);
      });
  }
}
