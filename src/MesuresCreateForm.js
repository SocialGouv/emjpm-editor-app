import React from "react";
import { useFormik } from "formik";
import { Input, Button, Field, InlineError, Select } from "@socialgouv/emjpm-ui-core";
import { Box, Heading, Flex } from "rebass";

import { CIVILITY, MESURE_TYPE_LABEL_VALUE, RESIDENCE, TRIBUNAL_LIST, ANTENNE_OPTIONS } from "./constants";

function MesuresCreate(props) {
  const { token, apiUrl, setMesureFormVisible } = props;

  const formik = useFormik({
    initialValues: {
      annee: "",
      antenne: "",
      civilite: "",
      postcode: "",
      date_ouverture: "",
      numero_dossier: "",
      numero_rg: "",
      tribunal: "",
      department_id: "",
      city: "",
      latitude: "",
      longitude: "",
      residence: "",
      type: ""
    },
    onSubmit: async values => {
      const payload = {
        annee: values.annee.toString(),
        antenne_id: values.antenne ? Number.parseInt(values.antenne.value) : null,
        civilite: values.civilite.value,
        code_postal: values.postcode,
        ville: values.city,
        latitude: values.latitude,
        longitude: values.longitude,
        date_ouverture: values.date_ouverture,
        department_id: values.department_id,
        numero_dossier: values.numero_dossier,
        numero_rg: values.numero_rg,
        residence: values.residence.value,
        ti_id: values.tribunal.value,
        type: values.type.value
      };

      const res = await fetch(`${apiUrl}/editors/mesures`, {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        }
      });

      const json = await res.json();

      console.log(json);
    },
  });

  return (
    <Box>
      <Heading mb="5">Nouvelle mesure</Heading>
      <form onSubmit={formik.handleSubmit}>
      <Field>
        <Input
          value={formik.values.numero_rg}
          id="numero_rg"
          name="numero_rg"
          hasError={formik.errors.numero_rg && formik.touched.numero_rg}
          onChange={formik.handleChange}
          placeholder="Numéro RG"
        />
        {formik.touched.numero_rg && (
          <InlineError message={formik.errors.numero_rg} fieldId="numero_rg" />
        )}
      </Field>
      <Field>
        <Select
          id="tribunal"
          name="tribunal"
          placeholder="Tribunal"
          value={formik.values.tribunal}
          options={TRIBUNAL_LIST}
          hasError={formik.errors.tribunal && formik.touched.tribunal}
          onChange={option => formik.setFieldValue("tribunal", option)}
        />
        {formik.touched.tribunal && (
          <InlineError message={formik.errors.tribunal} fieldId="tribunal" />
        )}
      </Field>
      <Field>
        <Input
          value={formik.values.numero_dossier}
          id="numero_dossier"
          name="numero_dossier"
          hasError={formik.errors.numero_dossier && formik.touched.numero_dossier}
          onChange={formik.handleChange}
          placeholder="Numero de dossier"
        />
        {formik.touched.numero_dossier && (
          <InlineError message={formik.errors.numero_dossier} fieldId="numero_dossier" />
        )}
      </Field>
      <Field>
        <Select
          id="antenne"
          name="antenne"
          placeholder="Antenne"
          value={formik.values.antenne}
          hasError={formik.errors.antenne_id && formik.touched.antenne_id}
          onChange={option => formik.setFieldValue("antenne", option)}
          options={ANTENNE_OPTIONS}
        />
        {formik.touched.antenne_id && (
          <InlineError message={formik.errors.antenne_id} fieldId="antenne" />
        )}
      </Field>
      <Field>
        <Input
          value={formik.values.date_ouverture}
          id="date_ouverture"
          type="date"
          name="date_ouverture"
          hasError={formik.errors.date_ouverture && formik.touched.date_ouverture}
          onChange={formik.handleChange}
          placeholder="Date d'ordonnance"
        />
        {formik.touched.date_ouverture && (
          <InlineError message={formik.errors.date_ouverture} fieldId="date_ouverture" />
        )}
      </Field>
      <Field>
        <Select
          id="type"
          name="type"
          placeholder="Type de mesure"
          value={formik.values.type}
          hasError={formik.errors.type && formik.touched.type}
          onChange={option => formik.setFieldValue("type", option)}
          options={MESURE_TYPE_LABEL_VALUE}
        />
        {formik.touched.type && <InlineError message={formik.errors.type} fieldId="type" />}
      </Field>
      <Field>
        <Select
          id="civilite"
          name="civilite"
          placeholder="Civilité"
          value={formik.values.civilite}
          hasError={formik.errors.civilite && formik.touched.civilite}
          onChange={option => formik.setFieldValue("civilite", option)}
          options={CIVILITY}
        />
        {formik.touched.civilite && (
          <InlineError message={formik.errors.civilite} fieldId="civilite" />
        )}
      </Field>
      <Field>
        <Input
          value={formik.values.annee}
          id="annee"
          name="annee"
          type="number"
          hasError={formik.errors.annee && formik.touched.annee}
          onChange={formik.handleChange}
          placeholder="année de naissance"
        />
        {formik.touched.annee && <InlineError message={formik.errors.annee} fieldId="type" />}
      </Field>
      <Field>
        <Select
          id="residence"
          name="residence"
          placeholder="Type de residence"
          value={formik.values.residence}
          hasError={formik.errors.residence && formik.touched.residence}
          onChange={option => formik.setFieldValue("residence", option)}
          options={RESIDENCE}
        />
        {formik.touched.residence && (
          <InlineError message={formik.errors.residence} fieldId="residence" />
        )}
      </Field>
      <Field>
        <Input
          value={formik.values.city}
          id="city"
          name="city"
          hasError={formik.errors.city && formik.touched.city}
          onChange={formik.handleChange}
          placeholder="Ville"
        />
        {formik.touched.city && <InlineError message={formik.errors.city} fieldId="city" />}
      </Field>
      <Field>
        <Input
          value={formik.values.postcode}
          id="postcode"
          name="postcode"
          hasError={formik.errors.postcode && formik.touched.postcode}
          onChange={formik.handleChange}
          placeholder="Code postal"
        />
        {formik.touched.annee && <InlineError message={formik.errors.annee} fieldId="postcode" />}
      </Field>
      <Field>
        <Input
          value={formik.values.latitude}
          id="latitude"
          name="latitude"
          hasError={formik.errors.latitude && formik.touched.latitude}
          onChange={formik.handleChange}
          placeholder="Latitude"
        />
        {formik.touched.latitude && <InlineError message={formik.errors.latitude} fieldId="latitude" />}
      </Field>
      <Field>
        <Input
          value={formik.values.longitude}
          id="longitude"
          name="longitude"
          hasError={formik.errors.longitude && formik.touched.longitude}
          onChange={formik.handleChange}
          placeholder="Longitude"
        />
        {formik.touched.longitude && <InlineError message={formik.errors.longitude} fieldId="longitude" />}
      </Field>
      <Field>
        <Input
          value={formik.values.department_id}
          id="department_id"
          name="department_id"
          hasError={formik.errors.department_id && formik.touched.department_id}
          onChange={formik.handleChange}
          placeholder="Department ID"
        />
        {formik.touched.department_id && <InlineError message={formik.errors.department_id} fieldId="department_id" />}
      </Field>
      <Flex justifyContent="flex-end" alignItems="center">
        <Button
          mr="2"
          variant="outline"
          onClick={() => {
            setMesureFormVisible(false);
            formik.resetForm();
          }}
        >
          Annuler
        </Button>
        <Box>
          <Button type="submit" disabled={formik.isSubmitting} isLoading={formik.isSubmitting}>
            Enregistrer
          </Button>
        </Box>
      </Flex>

      </form>
    </Box>
  );
}

export default MesuresCreate;
