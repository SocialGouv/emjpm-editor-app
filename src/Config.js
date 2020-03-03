import React from "react";
import queryString from "query-string";
import { useFormik } from "formik";
import { Box } from "rebass";
import { Input, Button } from "@socialgouv/emjpm-ui-core";

import { APP_URL } from "./constants";

function Config() {
  const formik = useFormik({
    initialValues: {
      editorSecret: "53tes5gy1zk",
      editorId: "1",
      redirectUrl: "https://emjpm-editor-demo.netlify.com/",
      appUrl: APP_URL,
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

  return (
    <Box bg="#f2f5f9">
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
              placeholder={`Url de l'app de démo (default: ${APP_URL})`}
              onChange={formik.handleChange}
              value={formik.values.appUrl}
            />
          </Box>
          <Box mb="2">
            <Input
              id="redirectUrl"
              name="redirectUrl"
              type="text"
              placeholder="Url de redirection (default: https://emjpm-editor-demo.netlify.com)"
              onChange={formik.handleChange}
              value={formik.values.redirectUrl}
            />
          </Box>
          <Button type="submit">Connexion eMJPM</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Config;
