import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useFormik } from "formik";
import { Box, Flex, Heading, Link, Image } from "rebass";
import { BoxWrapper, Input, Button, Card, Text } from "@socialgouv/emjpm-ui-core";
import { MesureListItem } from "@socialgouv/emjpm-ui-components";
import MesuresCreateForm from "./MesuresCreateForm";

const emjpmApiUrl =
  process.env.REACT_APP_API_EMJPM_URL ||
  "https://api-v25-21-0-emjpm.dev.fabrique.social.gouv.fr/api/v2";
const emjpmApiMesuresUrl = `${emjpmApiUrl}/editors/mesures?status=Mesure en cours`;

function App() {
  const [token, setToken] = useState(null);
  const [mesures, setMesures] = useState(null);
  const [mesureFormIsVisible, setMesureFormVisible] = useState(false);

  const handleDelete = async (id) => {
    await fetch(`${emjpmApiUrl}/editors/mesures/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      editorSecret: "g5vg4muu46s",
      editorId: "1",
      redirectUrl: "http://localhost:3001",
      appUrl: "https://v25-21-0-emjpm.dev.fabrique.social.gouv.fr",
    },
    onSubmit: values => {
      const emjpmAuthQueryString = queryString.stringify({
        editor_id: values.editorId,
        editor_secret: values.editorSecret,
        redirect_url: values.redirectUrl,
      });

      const emjpmAuthUrl = `${values.appUrl}/application/authorization?${emjpmAuthQueryString}`;

      window.location.replace(emjpmAuthUrl);
    },
  });

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

  useEffect(() => {
    if (!token) {
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
                  setMesures(null);
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
            {mesures && (
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
            )}
          </Box>
        ) : (
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Box mb="2">
                <Input
                  id="editorSecret"
                  name="editorSecret"
                  type="text"
                  placeholder="Editor secret"
                  onChange={formik.handleChange}
                  value={formik.values.editorSecret}
                />
              </Box>
              <Box mb="2">
                <Input
                  id="editorId"
                  name="editorId"
                  type="text"
                  placeholder="Editor id"
                  onChange={formik.handleChange}
                  value={formik.values.editorId}
                />
              </Box>
              <Box mb="2">
                <Input
                  id="appUrl"
                  name="appUrl"
                  type="text"
                  placeholder="Url de l'app de démo (default: https://v25-21-0-emjpm.dev.fabrique.social.gouv.fr)"
                  onChange={formik.handleChange}
                  value={formik.values.appUrl}
                />
              </Box>
              <Box mb="2">
                <Input
                  id="redirectUrl"
                  name="redirectUrl"
                  type="text"
                  placeholder="Url de redirection (default: http://localhost:3001)"
                  onChange={formik.handleChange}
                  value={formik.values.redirectUrl}
                />
              </Box>
              <Button type="submit">Connexion eMJPM</Button>
            </form>
          </Box>
        )}
      </BoxWrapper>
    </Box>
  );
}

export default App;
