/*import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';

import PersonListFAPI from '../src/container/PersonListF';

it('PersonListF API test case', async function () {
  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return {Id: 1};
        },
      });
    });
    return p;
  });

  const response = await PersonListFAPI.all(); //this.state.persons
  console.log('-----------API');
  console.log(response.name);
  console.log(await PersonListFAPI.all());
  console.log('-----------E');

  expect(response.id).toBe(1);
});
*/
/*import axios from 'axios';
//import PersonListAPI from '../src/container/PersonList';
import PersonListFAPI from '../PersonListF';

jest.mock('axios');

test('PersonListF API test case', () => {
  const persons = [{name: 'Luke Skywalkeuu'}];
  const response = {data: persons};
  axios.get.mockResolvedValue(response);
  console.log('------------S');
  //console.log(PersonListAPI.componentDidMount());
  console.log('--------------E');
  console.log(Promise.resolve(PersonListFAPI.all()));
  PersonListFAPI.all().then((data) => console.log(data.results));
  console.log('--------------E2');
  /*return PersonListFAPI.all().then((data) =>
    expect(data.results).toEqual(persons),
  );*/ /*
  //return PersonListAPI.
});*/

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
/* mock
  .onGet(
    'https://70c7859a-69e5-4de6-aa70-e6c14e5bd8e4.mock.pstmn.io/starwar/people',
    {params: {searchText: '1'}},
  )
  .reply(200, {
    users: [{id: '1'}],
  });

axios
  .get(
    'https://70c7859a-69e5-4de6-aa70-e6c14e5bd8e4.mock.pstmn.io/starwar/people',
  )
  .then(function (response) {
    console.log(response.data);
  }); */
