import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Text, Box } from '@chakra-ui/react';
import usePeople from '../../queries/usePeople';
import { NUM_PEOPLE } from '../../constants/people';
import LoadingText from '../../components/LoadingText';
import PersonCard from '../../components/PersonCard';

type DetailsViewParams = {
  id: string;
};

export default function DetailsView() {
  const { id } = useParams<DetailsViewParams>();
  const idx = Number.parseInt(id, 10);
  const { isLoading, isError, data: people } = usePeople(NUM_PEOPLE);

  if (!id) {
    return <Redirect to="/" />;
  }

  if (!people || isLoading) {
    return <LoadingText loadingText="people" />;
  }

  if (isError) {
    return (
      <Box>
        <Text>An error occurred</Text>
      </Box>
    );
  }

  if (people && idx >= people.length) {
    return <Redirect to="/" />;
  }

  return <PersonCard person={people[idx]} />;
}
