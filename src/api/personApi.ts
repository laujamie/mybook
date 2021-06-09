import axios from 'axios';
import { Person } from '../types/Person';

const BASE_URL = 'https://randomuser.me/api';

export type PeopleResponse = {
  results: Person[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

export async function getPeople(numPeople: number = 1): Promise<Person[]> {
  const response = await axios.get<PeopleResponse>(`${BASE_URL}`, {
    params: { results: numPeople },
  });
  return response.data.results;
}
