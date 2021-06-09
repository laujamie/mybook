import React from 'react';
import { Text, Box, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import usePeople from '../../queries/usePeople';
import { NUM_PEOPLE } from '../../constants/people';
import LoadingText from '../../components/LoadingText';

export default function HomeView() {
  const { isLoading, isError, data: people } = usePeople(NUM_PEOPLE);

  if (isLoading) {
    return <LoadingText loadingText="people" />;
  }

  if (isError) {
    return (
      <Box>
        <Text>An error occurred while trying to load people.</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {people?.map((person, idx) => (
            <Tr
              key={`${person.name.first}-${person.name.last}-${person.email}`}
            >
              <Td>{person.name.first}</Td>
              <Td>{person.name.last}</Td>
              <Td>{person.email}</Td>
              <Td>
                <Link to={`/person/${idx}`}>
                  Details <FontAwesomeIcon icon="arrow-right" />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
