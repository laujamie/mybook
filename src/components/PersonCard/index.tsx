import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import Card from '../Card';
import { Person } from '../../types/Person';

type PersonCardProps = {
  person: Person;
};

export default function PersonCard({ person }: PersonCardProps) {
  const { name, email, phone, cell, location } = person;
  const { first, last } = name;
  const { street, city, state, country, postcode } = location;
  const { name: streetName, number: streetNumber } = street;

  return (
    <Card p="4">
      <Heading>
        {first} {last}
      </Heading>
      <Text>
        <b>Email:</b> <a href={`mailto:${email}`}>{email}</a>
      </Text>
      <Text>
        <b>Phone:</b> <a href={`tel:${phone}`}>{phone}</a>
      </Text>
      <Text>
        <b>Cell:</b> <a href={`tel:${cell}`}>{cell}</a>
      </Text>
      <Text>
        <b>Address:</b> {streetNumber} {streetName}, {city}, {state}, {country}{' '}
        {postcode}
      </Text>
    </Card>
  );
}
