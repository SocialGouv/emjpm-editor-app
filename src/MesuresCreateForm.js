import React from 'react';
import { SquaredCross } from '@styled-icons/entypo/SquaredCross';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import moment from 'moment';
import {
  Input,
  Button,
  Field,
  InlineError,
  Select,
} from '@socialgouv/emjpm-ui-core';
import { Box, Heading, Flex, Card, Text } from 'rebass';

import {
  API_URL,
  CIVILITY,
  ANTENNE_OPTIONS,
  LIEU_VIE_OPTIONS,
  NATURE_MESURE_OPTIONS,
  CAUSES_SORTIE,
  REVISION,
} from './constants';

const COUNTRIES = [
  {
    label: 'France',
    value: 'FR',
  },
];

function MesuresCreate(props) {
  const { token, setMesureFormVisible } = props;

  const formik = useFormik({
    initialValues: {
      numero_rg: '',
      numero_dossier: '',
      annee: '',
      tribunal_siret: '',
      civilite: '',
      antenne: '',
      cause_sortie: '',
      date_fin_mesure: '',
      date_nomination: '',
      date_premier_mesure: '',
      date_protection_en_cours: '',
      etats: [
        {
          date_changement_etat: moment().format('yyyy-MM-DD'),
          ville: '',
          code_postal: '',
          pays: 'FR',
          lieu_vie: '',
        },
      ],
    },
    onSubmit: async (values) => {
      const payload = {
        annee_naissance: values.annee,
        antenne_id: values.antenne
          ? Number.parseInt(values.antenne.value)
          : null,
        tribunal_cabinet: '',
        cause_sortie: values.cause_sortie.value || null,
        civilite: values.civilite.value,
        date_fin_mesure: values.date_fin_mesure || null,
        date_nomination: values.date_nomination || null,
        date_premier_mesure: values.date_premier_mesure || null,
        date_protection_en_cours: values.date_protection_en_cours || null,
        numero_dossier: values.numero_dossier,
        numero_rg: values.numero_rg,
        resultat_revision: values.resultat_revision.value || null,
        tribunal_siret: values.tribunal_siret || null,
        etats: values.etats,
        ressources: {},
      };

      console.log(payload);
      debugger;

      const res = await fetch(`${API_URL}/editors/mesures`, {
        body: JSON.stringify(payload),
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      const json = await res.json();

      console.log(json);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Heading mb='5'>Informations de la mesure</Heading>
      <form onSubmit={formik.handleSubmit}>
        <Flex>
          <Box mr={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.numero_rg}
                id='numero_rg'
                name='numero_rg'
                hasError={formik.errors.numero_rg && formik.touched.numero_rg}
                onChange={formik.handleChange}
                placeholder='Numéro RG'
              />
              {formik.touched.numero_rg && (
                <InlineError
                  message={formik.errors.numero_rg}
                  fieldId='numero_rg'
                />
              )}
            </Field>
          </Box>
          <Box ml={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.numero_dossier}
                id='numero_dossier'
                name='numero_dossier'
                hasError={
                  formik.errors.numero_dossier && formik.touched.numero_dossier
                }
                onChange={formik.handleChange}
                placeholder='Numero de dossier'
              />
              {formik.touched.numero_dossier && (
                <InlineError
                  message={formik.errors.numero_dossier}
                  fieldId='numero_dossier'
                />
              )}
            </Field>
          </Box>
        </Flex>

        <Flex>
          <Box mr={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.tribunal_siret}
                id='tribunal_siret'
                name='tribunal_siret'
                hasError={
                  formik.errors.tribunal_siret && formik.touched.tribunal_siret
                }
                onChange={formik.handleChange}
                placeholder='Tribunal (siret)'
              />
              {formik.touched.tribunal_siret && (
                <InlineError
                  message={formik.errors.tribunal_siret}
                  fieldId='tribunal_siret'
                />
              )}
            </Field>
          </Box>
          <Box ml={2} width={1 / 2}>
            <Field>
              <Select
                id='antenne'
                name='antenne'
                placeholder='Antenne'
                value={formik.values.antenne}
                hasError={formik.errors.antenne && formik.touched.antenne}
                onChange={(option) => formik.setFieldValue('antenne', option)}
                options={ANTENNE_OPTIONS}
              />
              {formik.touched.antenne && (
                <InlineError
                  message={formik.errors.antenne}
                  fieldId='antenne'
                />
              )}
            </Field>
          </Box>
        </Flex>

        <Field>
          <Select
            id='resultat_revision'
            name='resultat_revision'
            placeholder='Résultat révision'
            value={formik.values.resultat_revision}
            hasError={
              formik.errors.resultat_revision &&
              formik.touched.resultat_revision
            }
            onChange={(option) =>
              formik.setFieldValue('resultat_revision', option)
            }
            options={REVISION}
          />
          {formik.touched.resultat_revision && (
            <InlineError
              message={formik.errors.resultat_revision}
              fieldId='resultat_revision'
            />
          )}
        </Field>

        <Flex>
          <Box mr={2} width={1 / 2}>
            <Field>
              <Select
                id='civilite'
                name='civilite'
                placeholder='Civilité'
                value={formik.values.civilite}
                hasError={formik.errors.civilite && formik.touched.civilite}
                onChange={(option) => formik.setFieldValue('civilite', option)}
                options={CIVILITY}
              />
              {formik.touched.civilite && (
                <InlineError
                  message={formik.errors.civilite}
                  fieldId='civilite'
                />
              )}
            </Field>
          </Box>
          <Box ml={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.annee}
                id='annee'
                name='annee'
                type='number'
                hasError={formik.errors.annee && formik.touched.annee}
                onChange={formik.handleChange}
                placeholder='année de naissance'
              />
              {formik.touched.annee && (
                <InlineError message={formik.errors.annee} fieldId='type' />
              )}
            </Field>
          </Box>
        </Flex>

        <Box width={1 / 2}>
          <Heading>Dates de la mesure</Heading>
        </Box>

        <Flex mt={4}>
          <Box mr={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.date_protection_en_cours}
                id='date_protection_en_cours'
                name='date_protection_en_cours'
                type='date'
                hasError={
                  formik.errors.date_protection_en_cours &&
                  formik.touched.date_protection_en_cours
                }
                onChange={formik.handleChange}
                placeholder='Date protection en cours'
              />
              {formik.touched.date_protection_en_cours && (
                <InlineError
                  message={formik.errors.date_protection_en_cours}
                  fieldId='date_protection_en_cours'
                />
              )}
            </Field>
          </Box>
          <Box ml={2} width={1 / 2}></Box>
        </Flex>

        <Flex>
          <Box mr={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.date_premier_mesure}
                id='date_premier_mesure'
                name='date_premier_mesure'
                type='date'
                hasError={
                  formik.errors.date_premier_mesure &&
                  formik.touched.date_premier_mesure
                }
                onChange={formik.handleChange}
                placeholder='LABEL A DEFINIR (date_premier_mesure)'
              />
              {formik.touched.date_premier_mesure && (
                <InlineError
                  message={formik.errors.date_premier_mesure}
                  fieldId='date_premier_mesure'
                />
              )}
            </Field>
          </Box>
          <Box ml={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.date_nomination}
                id='date_nomination'
                name='date_nomination'
                type='date'
                hasError={
                  formik.errors.date_nomination &&
                  formik.touched.date_nomination
                }
                onChange={formik.handleChange}
                placeholder='Date nomination'
              />
              {formik.touched.date_nomination && (
                <InlineError
                  message={formik.errors.date_nomination}
                  fieldId='date_nomination'
                />
              )}
            </Field>
          </Box>
        </Flex>

        <Flex>
          <Box mr={2} width={1 / 2}>
            <Field>
              <Input
                value={formik.values.date_fin_mesure}
                id='date_fin_mesure'
                name='date_fin_mesure'
                type='date'
                hasError={
                  formik.errors.date_fin_mesure &&
                  formik.touched.date_fin_mesure
                }
                onChange={formik.handleChange}
                placeholder='Date de fin de mesure'
              />
              {formik.touched.date_fin_mesure && (
                <InlineError
                  message={formik.errors.date_fin_mesure}
                  fieldId='date_fin_mesure'
                />
              )}
            </Field>
          </Box>
          <Box ml={2} width={1 / 2}>
            <Field>
              <Select
                id='cause_sortie'
                name='cause_sortie'
                placeholder='Cause de sortie'
                value={formik.values.cause_sortie}
                hasError={
                  formik.errors.cause_sortie && formik.touched.cause_sortie
                }
                onChange={(option) =>
                  formik.setFieldValue('cause_sortie', option)
                }
                options={CAUSES_SORTIE}
              />
              {formik.touched.cause_sortie && (
                <InlineError
                  message={formik.errors.cause_sortie}
                  fieldId='cause_sortie'
                />
              )}
            </Field>
          </Box>
        </Flex>

        <FieldArray
          name='etats'
          render={(arrayHelpers) => (
            <div>
              <Flex my={4} alignItems='center'>
                <Box width={1 / 2}>
                  <Heading>Etats de la mesure</Heading>
                </Box>
                <Box textAlign='right' width={1 / 2}>
                  <Button
                    type='button'
                    onClick={() =>
                      arrayHelpers.push({
                        date_changement_etat: moment().format('yyyy-MM-DD'),
                      })
                    }
                  >
                    Ajouter un état
                  </Button>
                </Box>
              </Flex>

              {formik.values.etats &&
                formik.values.etats.map((etat, index) => {
                  console.log('etat', etat);
                  return (
                    <Card mb={4} sx={{ position: 'relative' }} key={index}>
                      <Box
                        sx={{
                          position: 'absolute',
                          right: 2,
                          cursor: 'pointer',
                        }}
                      >
                        <SquaredCross
                          width={'20px'}
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      </Box>
                      <Text mb={4} fontWeight='bold' fontSize={'20px'}>
                        {`# ${index + 1}`}
                      </Text>

                      <Field>
                        <Input
                          type='date'
                          value={etat.date_changement_etat}
                          id={`etats[${index}].date_changement_etat`}
                          name={`etats[${index}].date_changement_etat`}
                          hasError={
                            formik.errors.etats &&
                            formik.touched.etats &&
                            formik.errors.etats[`${index}`]
                              .date_changement_etat &&
                            formik.touched.etats[`${index}`]
                              .date_changement_etat
                          }
                          onChange={(event) => {
                            console.log('value', event.target.value);
                          }}
                          placeholder="Date de changement d'état"
                        />
                        {formik.errors.etats &&
                          formik.touched.etats &&
                          formik.touched.etats[`${index}`]
                            .date_changement_etat && (
                            <InlineError
                              message={
                                formik.errors.etats[`${index}`]
                                  .date_changement_etat
                              }
                              fieldId={`etats[${index}].date_changement_etat`}
                            />
                          )}
                      </Field>

                      <Flex>
                        <Box mr={2} width={1 / 2}>
                          <Field>
                            <Input
                              value={etat.ville}
                              id={`etats[${index}].ville`}
                              name={`etats[${index}].ville`}
                              // hasError={
                              //   formik.errors.etats[`${index}`].ville &&
                              //   formik.touched.etats[`${index}`].ville
                              // }
                              onChange={formik.handleChange}
                              placeholder='Ville'
                            />
                            {formik.errors.etats &&
                              formik.touched.etats &&
                              formik.touched.etats[`${index}`].ville && (
                                <InlineError
                                  message={
                                    formik.errors.etats[`${index}`].ville
                                  }
                                  fieldId='ville'
                                />
                              )}
                          </Field>
                        </Box>
                        <Box ml={2} width={1 / 2}>
                          <Field>
                            <Input
                              value={etat.code_postal}
                              id={`etats[${index}].code_postal`}
                              name={`etats[${index}].code_postal`}
                              hasError={
                                formik.errors.etats &&
                                formik.touched.etats &&
                                formik.errors.etats[`${index}`].code_postal &&
                                formik.touched.etats[`${index}`].code_postal
                              }
                              onChange={formik.handleChange}
                              placeholder='Code postal'
                            />
                            {formik.errors.etats &&
                              formik.touched.etats &&
                              formik.touched.etats[`${index}`].code_postal && (
                                <InlineError
                                  message={
                                    formik.errors.etats[`${index}`].code_postal
                                  }
                                  fieldId='code_postal'
                                />
                              )}
                          </Field>
                        </Box>
                      </Flex>

                      <Field>
                        <Select
                          id={`etats[${index}].pays`}
                          name={`etats[${index}].pays`}
                          placeholder='Pays'
                          value={COUNTRIES.find((c) => c.value === etat.pays)}
                          hasError={
                            formik.errors.etats &&
                            formik.touched.etats &&
                            formik.errors.etats[`${index}`].pays &&
                            formik.touched.etats[`${index}`].pays
                          }
                          onChange={(option) =>
                            formik.setFieldValue(
                              `etats[${index}].pays`,
                              option.value
                            )
                          }
                          options={COUNTRIES}
                        />
                        {formik.errors.etats &&
                          formik.errors.etats[`${index}`].pays && (
                            <InlineError
                              message={formik.errors.etats[`${index}`].pays}
                              fieldId={`etats[${index}].pays`}
                            />
                          )}
                      </Field>

                      <Field>
                        <Select
                          id={`etats[${index}].nature_mesure`}
                          name={`etats[${index}].nature_mesure`}
                          placeholder='Nature mesure'
                          value={NATURE_MESURE_OPTIONS.find(
                            (v) => v.value === etat.nature_mesure
                          )}
                          hasError={
                            formik.errors.etats &&
                            formik.touched.etats &&
                            formik.errors.etats[`${index}`].nature_mesure &&
                            formik.touched.etats[`${index}`].nature_mesure
                          }
                          onChange={(option) =>
                            formik.setFieldValue(
                              `etats[${index}].nature_mesure`,
                              option.value
                            )
                          }
                          options={NATURE_MESURE_OPTIONS}
                        />
                        {formik.touched.nature_mesure && (
                          <InlineError
                            message={
                              formik.errors.etats[`${index}`].nature_mesure
                            }
                            fieldId={`etats[${index}].nature_mesure`}
                          />
                        )}
                      </Field>

                      <Field>
                        <Select
                          id={`etats[${index}].lieu_vie`}
                          name={`etats[${index}].lieu_vie`}
                          placeholder='Lieu de vie'
                          value={LIEU_VIE_OPTIONS.find(
                            (v) => v.value === etat.lieu_vie
                          )}
                          hasError={
                            formik.errors.etats &&
                            formik.touched.etats &&
                            formik.errors.etats[`${index}`].lieu_vie &&
                            formik.touched.etats[`${index}`].lieu_vie
                          }
                          onChange={(option) =>
                            formik.setFieldValue(
                              `etats[${index}].lieu_vie`,
                              option.value
                            )
                          }
                          options={LIEU_VIE_OPTIONS}
                        />
                        {formik.touched.etats &&
                          formik.errors.etats[`${index}`] &&
                          formik.touched.etats[`${index}`].lieu_vie && (
                            <InlineError
                              message={formik.errors.etats[`${index}`].lieu_vie}
                              fieldId={`etats[${index}].lieu_vie`}
                            />
                          )}
                      </Field>
                    </Card>
                  );
                })}
            </div>
          )}
        />

        {/* <Field>
          <Select
            id='residence'
            name='residence'
            placeholder='Type de residence'
            value={formik.values.residence}
            hasError={formik.errors.residence && formik.touched.residence}
            onChange={(option) => formik.setFieldValue('residence', option)}
            options={RESIDENCE}
          />
          {formik.touched.residence && (
            <InlineError
              message={formik.errors.residence}
              fieldId='residence'
            />
          )}
        </Field>
        <Field>
          <Input
            value={formik.values.postcode}
            id='postcode'
            name='postcode'
            hasError={formik.errors.postcode && formik.touched.postcode}
            onChange={formik.handleChange}
            placeholder='Code postal'
          />
          {formik.touched.annee && (
            <InlineError message={formik.errors.annee} fieldId='postcode' />
          )}
        </Field>
        <Field>
          <Input
            value={formik.values.latitude}
            id='latitude'
            name='latitude'
            hasError={formik.errors.latitude && formik.touched.latitude}
            onChange={formik.handleChange}
            placeholder='Latitude'
          />
          {formik.touched.latitude && (
            <InlineError message={formik.errors.latitude} fieldId='latitude' />
          )}
        </Field>
        <Field>
          <Input
            value={formik.values.longitude}
            id='longitude'
            name='longitude'
            hasError={formik.errors.longitude && formik.touched.longitude}
            onChange={formik.handleChange}
            placeholder='Longitude'
          />
          {formik.touched.longitude && (
            <InlineError
              message={formik.errors.longitude}
              fieldId='longitude'
            />
          )}
        </Field>
        <Field>
          <Input
            value={formik.values.department_id}
            id='department_id'
            name='department_id'
            hasError={
              formik.errors.department_id && formik.touched.department_id
            }
            onChange={formik.handleChange}
            placeholder='Department ID'
          />
          {formik.touched.department_id && (
            <InlineError
              message={formik.errors.department_id}
              fieldId='department_id'
            />
          )}
        </Field> */}
        <Flex justifyContent='flex-end' alignItems='center'>
          <Button
            mr='2'
            variant='outline'
            onClick={() => {
              setMesureFormVisible(false);
              formik.resetForm();
            }}
          >
            Annuler
          </Button>
          <Box>
            <Button
              type='submit'
              disabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
            >
              Enregistrer
            </Button>
          </Box>
        </Flex>
      </form>
    </FormikProvider>
  );
}

export default MesuresCreate;
