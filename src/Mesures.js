import useSWR from 'swr';
import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import { Button } from '@socialgouv/emjpm-ui-core';
import { MesureListItem } from '@socialgouv/emjpm-ui-components';

import { API_URL } from './constants';

function Mesures(props) {
  const { token } = props;

  const { data, error, mutate } = useSWR(
    token ? `${API_URL}/editors/mesures?status=en_cours` : null,
    (url) =>
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((r) => r.json())
  );

  const handleDelete = async (id) => {
    mutate(
      { ...data, mesures: data.mesures.filter((m) => m.id !== id) },
      false
    );
    await fetch(`${API_URL}/editors/mesures/${id}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    mutate();
  };

  if (error) {
    return <Box>{error}</Box>;
  }

  console.log('data', data);

  return (
    <Box mt='6'>
      <Heading mb='5'>Mesures</Heading>
      {data &&
        data.mesures &&
        data.mesures.map((mesure) => (
          <Flex key={mesure.id} alignItems='center'>
            <MesureListItem mesure={mesure} />
            <Button ml='2' mb='2' onClick={() => handleDelete(mesure.id)}>
              Supprimer
            </Button>
          </Flex>
        ))}
    </Box>
  );
}

export default Mesures;
