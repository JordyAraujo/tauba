import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';

export function Example() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <>
      <Container>
        {isLoading ? (
          <ActivityIndicator
            color="white"
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            size="large"
          />
        ) : (
          <Title>Example Title</Title>
        )}
      </Container>
    </>
  );
}
