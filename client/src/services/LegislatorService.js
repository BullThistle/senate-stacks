/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class LegislatorService {
  getLegislatorsFromState(states, callback) {
    axios
      .get(`/${states}`)
      .then((response) => {
        callback(response.data);
      })
      .catch(() => {
        callback(null);
      });
  }

  getLegislator(cid, callback) {
    axios
      .get(`/legislator/${cid}`)
      .then((response) => {
        callback(response.data.response.summary['@attributes']);
      })
      .catch(() => {
        callback(null);
      });
  }

  getLegislativeContributor(cid, callback) {
    axios
      .get(`/legislativeContributor/${cid}`)
      .then((response) => {
        callback(response.data.response.contributors.contributor);
      })
      .catch(() => {
        callback(null);
      });
  }
}
