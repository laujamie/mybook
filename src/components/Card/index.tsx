import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export default function Card({ children, ...props }: BoxProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" {...props}>
      {children}
    </Box>
  );
}
