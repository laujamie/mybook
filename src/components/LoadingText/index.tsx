import React from 'react';
import { Box, Spinner, Text, BoxProps } from '@chakra-ui/react';

type LoadingTextProps = {
  loadingText?: string;
} & BoxProps;

export default function LoadingText({
  loadingText,
  ...props
}: LoadingTextProps) {
  const internalText = loadingText ? loadingText : 'data';
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Spinner mr="4" />
      <Text>Loading {internalText}...</Text>
    </Box>
  );
}
