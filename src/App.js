import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { Box, Flex, Heading, Link, Image } from "rebass";
import { BoxWrapper, Button, Card, Text } from "@socialgouv/emjpm-ui-core";

import Mesures from "./Mesures";
import MesuresCreateForm from "./MesuresCreateForm";
import Config from "./Config";

const emjpmApiUrl =
  process.env.REACT_APP_API_EMJPM_URL ||
  "https://api-v25-21-0-emjpm.dev.fabrique.social.gouv.fr/api/v2";

function App() {
  const [token, setToken] = useState(null);
  const [mesureFormIsVisible, setMesureFormVisible] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    if (localToken) {
      setToken(localToken);
      return;
    }

    const newToken = queryString.parse(window.location.search).token;

    if (newToken) {
      localStorage.setItem("token", newToken);
      window.location.replace(window.location.origin);
    }
  }, [setToken]);

  return (
    <Box bg="#f2f5f9">
      <Flex px={4} color="black" bg="white" alignItems="center">
        <Text p={4} fontWeight="bold">
          <Image src="/logo_emjpm_num.png" width="320px" alt="" />
        </Text>
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Profile
        </Link>
      </Flex>
      <BoxWrapper mt={6} px={2}>
        <Heading mb="5">eMJPM - Application métier - api test</Heading>
        {token ? (
          <Box>
            <Heading mb="2">Token utilisateur</Heading>
            <Card sx={{ overflow: "scroll", bg: "white" }}>
              <pre>
                <code width="80%">{token}</code>
              </pre>
            </Card>
            <Box mb="4">
              <Button
                mt="2"
                mr="2"
                onClick={() => {
                  setToken(null);
                  localStorage.removeItem("token");
                }}
              >
                Supprimer le token utilisateur
              </Button>
              <Button
                mt="2"
                onClick={() => setMesureFormVisible(!mesureFormIsVisible)}
              >
                Ajouter une mesure
              </Button>
            </Box>
            {mesureFormIsVisible && (
              <MesuresCreateForm token={token} apiUrl={emjpmApiUrl} setMesureFormVisible={setMesureFormVisible} />
            )}
            <Mesures token={token} />
          </Box>
        ) : (
          <Config setToken={setToken} />
        )}
      </BoxWrapper>
    </Box>
  );
}

export default App;
