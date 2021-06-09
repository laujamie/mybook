import { render } from '@testing-library/react';
import { Person } from '../../types/Person';
import PersonCard from '.';

const firstName = 'John';
const lastName = 'Doe';
const dummyPerson: Person = {
  gender: 'male',
  name: {
    first: firstName,
    last: lastName,
    title: 'mr',
  },
  location: {
    street: {
      number: 9278,
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

describe('PersonCard test', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PersonCard person={dummyPerson} />);
    expect(getByText(/John/)).toBeInTheDocument();
    expect(getByText(/Doe/)).toBeInTheDocument();
    expect(getByText(/416-967-1111/)).toBeInTheDocument();
  });
});
