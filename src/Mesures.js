import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "rebass";
import { Button } from "@socialgouv/emjpm-ui-core";
import { MesureListItem } from "@socialgouv/emjpm-ui-components";

import { API_URL } from "./constants";

function Mesures(props) {
  const { token } = props;
  const [mesures, setMesures] = useState(null);

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/editors/mesures/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  };

  useEffect(() => {
    if (!token) {
      setMesures(null);
      return;
    }

    const fetchMesures = async () => {
      const res = await fetch(`${API_URL}/editors/mesures?status=Mesure en cours`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { mesures } = await res.json();

      setMesures(mesures);
    };

    fetchMesures();
  }, [token]);

  if (!mesures) {
    return null;
  }

  return (
    <Box mt="6">
      <Heading mb="5">Mesures</Heading>
      {mesures.map(mesure => (
        <Flex key={mesure.id} alignItems="center">
          <MesureListItem mesure={mesures} />
          <Button ml="2" mb="2" onClick={() => handleDelete(mesure.id)}>
            Supprimer
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export default Mesures;
