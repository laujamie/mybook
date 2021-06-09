import axios from 'axios';
import { getPeople, PeopleResponse } from './personApi';
import { Person } from '../types/Person';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const dummyPerson: Person = {
  gender: 'male',
  name: {
    first: 'John',
    last: 'Doe',
    title: 'mr',
  },
  location: {
    street: {
      number: 1,
      name: 'sesame st',
    },
    city: 'kilcoole',
    state: 'waterford',
    postcode: '93027',
    country: 'united states of america',
  },
  email: 'johndoe@example.com',
  phone: '416-967-1111',
  cell: '416-439-0000',
};

const data: PeopleResponse = {
  results: [dummyPerson],
  info: {
    seed: '0',
    results: 1,
    page: 1,
    version: '1.0',
  },
};

describe('getPeople', () => {
  it('fetches people data successfully', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    await expect(getPeople()).resolves.toEqual([dummyPerson]);
  });

  it('throws error correctly from API', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getPeople()).rejects.toThrow(errorMessage);
  });
});
