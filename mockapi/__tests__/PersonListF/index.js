import axios from 'axios';
export default class PersonListF {
  static all() {
    return axios
      .get(
        'https://70c7859a-69e5-4de6-aa70-e6c14e5bd8e4.mock.pstmn.io/starwar/people',
      )
      .then((resp) => resp.data);
  }
}
