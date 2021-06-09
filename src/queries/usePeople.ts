import { useQuery } from 'react-query';
import { mergeWithDefaultOptions } from '../util/queryUtil';
import { getPeople } from '../api/personApi';
import { Person } from '../types/Person';

export default function usePeople(numPeople: number = 1) {
  return useQuery<Person[], Error>(
    ['people', numPeople],
    () => getPeople(numPeople),
    mergeWithDefaultOptions()
  );
}
