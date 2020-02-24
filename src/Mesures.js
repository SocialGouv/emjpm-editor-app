import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "rebass";
import { Button } from "@socialgouv/emjpm-ui-core";
import { MesureListItem } from "@socialgouv/emjpm-ui-components";

const emjpmApiUrl =
  process.env.REACT_APP_API_EMJPM_URL ||
  "https://api-v25-21-0-emjpm.dev.fabrique.social.gouv.fr/api/v2";
const emjpmApiMesuresUrl = `${emjpmApiUrl}/editors/mesures?status=Mesure en cours`;

function Mesures(props) {
  const { token } = props;
  const [mesures, setMesures] = useState(null);

  const handleDelete = async (id) => {
    await fetch(`${emjpmApiUrl}/editors/mesures/${id}`, {
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
      const res = await fetch(emjpmApiMesuresUrl, {
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
