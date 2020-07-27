export const MESURE_STATUS_LABEL_VALUE = [
  {
    label: 'Toutes les mesures',
    value: null,
  },
  {
    label: 'Mesure éteinte',
    value: 'Eteindre mesure',
  },
  {
    label: 'Mesure en cours',
    value: 'Mesure en cours',
  },
];

export const TYPES_ETABLISSEMENT = [
  {
    label: 'Etablissement pour les personnes handicapées',
    value: 'etablissement_handicapes',
  },
  {
    label: 'Autre etablissement',
    value: 'autre_etablissement_s_ms',
  },
  {
    label: 'Etablissement hospitalier',
    value: 'etablissement_hospitalier',
  },
  {
    label: 'Etablissement psychiatrique',
    value: 'etablissement_psychiatrique',
  },
];

export const CHAMP_MESURE = [
  {
    label: 'aux biens',
    value: 'protection_bien',
  },
  {
    label: 'aux biens et à la personne',
    value: 'protection_bien_personne',
  },
  {
    label: 'à la personne',
    value: 'protection_personne',
  },
];

export const REVISION = [
  {
    label: 'aggravation',
    value: 'aggravation',
  },
  {
    label: 'allègement',
    value: 'allegement',
  },
  {
    label: "dessaisissement en faveur d'autre mjpm",
    value: 'dessaisissement_autre_mjpm',
  },
  {
    label: 'dessaisissementen faveur de la famille',
    value: 'dessaisissement_famille',
  },
  {
    label: 'mainlevée',
    value: 'mainlevee',
  },
  {
    label: 'reconduction',
    value: 'reconduction',
  },
];

export const MESURE_TYPE_LABEL_VALUE = [
  {
    label: 'Curatelle',
    value: 'Curatelle',
  },
  {
    label: 'Curatelle renforcée',
    value: 'Curatelle renforcée',
  },
  {
    label: 'Curatelle renforcée à la personne',
    value: 'Curatelle renforcée à la personne',
  },
  {
    label: 'Curatelle renforcée aux biens',
    value: 'Curatelle renforcée aux biens',
  },
  {
    label: 'Curatelle renforcée aux biens et à la personne',
    value: 'Curatelle renforcée aux biens et à la personne',
  },
  {
    label: 'Curatelle simple',
    value: 'Curatelle simple',
  },
  {
    label: 'Curatelle simple à la personne',
    value: 'Curatelle simple à la personne',
  },
  {
    label: 'Curatelle simple aux biens',
    value: 'Curatelle simple aux biens',
  },
  {
    label: 'Curatelle simple à la personne',
    value: 'Curatelle simple à la personne',
  },
  {
    label: 'Curatelle simple aux biens et à la personne',
    value: 'Curatelle simple aux biens et à la personne',
  },
  {
    label: 'MAJ',
    value: 'MAJ',
  },
  {
    label: 'Mandat de protection future',
    value: 'Mandat de protection future',
  },
  {
    label: 'Mesure ad hoc',
    value: 'Mesure ad hoc',
  },
  {
    label: 'Sauvegarde de justice',
    value: 'Sauvegarde de justice',
  },
  {
    label: 'Sauvegarde de justice avec mandat spécial',
    value: 'Sauvegarde de justice avec mandat spécial',
  },
  {
    label: 'Subrogé curateur',
    value: 'Subrogé curateur',
  },
  {
    label: 'Subrogé tuteur',
    value: 'Subrogé tuteur',
  },
  {
    label: 'Tutelle',
    value: 'Tutelle',
  },
  {
    label: 'Tutelle à la personne',
    value: 'Tutelle à la personne',
  },
  {
    label: 'Tutelle aux biens',
    value: 'Tutelle aux biens',
  },
  {
    label: 'Tutelle aux biens et à la personne',
    value: 'Tutelle aux biens et à la personne',
  },
];

export const RESIDENCE = [
  { label: 'A Domicile', value: 'A Domicile' },
  { label: 'En établissement', value: 'En établissement' },
  {
    label: 'En établissement avec conservation du domicile',
    value: 'En établissement avec conservation du domicile',
  },
  { label: 'SDF', value: 'SDF' },
  { label: 'Autres', value: 'Autres' },
];

export const CIVILITY = [
  { label: 'Femme', value: 'madame' },
  { label: 'Homme', value: 'monsieur' },
];

export const CABINET = [
  '1',
  '1A',
  '1B',
  '1C',
  '2',
  '2A',
  '2B',
  '3',
  '3A',
  '3B',
  '4',
  '4A',
  '4B',
  '5A',
  '5B',
  '6A',
  '6B',
];

export const IS_URGENT = [
  { label: "oui, c'est une demande urgente", value: true },
  { label: "non, ce n'est pas une demande urgente", value: false },
];

export const TRIBUNAL_LIST = [
  {
    label: "Tribunal judiciaire d'Arras",
    value: 1,
  },
  {
    label: 'Tribunal judiciaire de Boulogne-sur-Mer',
    value: 9,
  },
  {
    label: 'Tribunal judiciaire de Béthune',
    value: 8,
  },
  {
    label: 'Tribunal judiciaire de Saint-Omer',
    value: 7,
  },
  {
    label: 'Tribunal judiciaire de Calais',
    value: 6,
  },
  {
    label: 'Tribunal judiciaire de Lens',
    value: 19,
  },
];

export const CAUSES_SORTIE = [
  {
    label: 'caducité',
    value: 'caducite',
  },
  {
    label: 'décès',
    value: 'deces',
  },
  {
    label: "dessaisissement en faveur d'un autre MJPM",
    value: 'dessaisissement_autre_mjpm',
  },
  {
    label: 'dessaisissement en faveur de la famille',
    value: 'dessaisissement_famille',
  },
  {
    label: 'mainlevée',
    value: 'mainlevee',
  },
];

export const NATURE_MESURE_OPTIONS = [
  {
    label: 'curatelle renforcée',
    value: 'curatelle_renforcee',
  },
  {
    label: 'curatelle simple',
    value: 'curatelle_simple',
  },
  {
    label: 'mandatat de protection future',
    value: 'mandat_protection_future',
  },
  {
    label: "mesure d'accompagnement judiciaire",
    value: 'mesure_accompagnement_judiciaire',
  },
  {
    label: "mesure ad'hoc",
    value: 'mesure_ad_hoc',
  },
  {
    label: 'sauvegarde de justice',
    value: 'sauvegarde_justice',
  },
  {
    label: 'subrogé curateur',
    value: 'subroge_curateur',
  },
  {
    label: 'subrogé tuteur',
    value: 'subroge_tuteur',
  },
  {
    label: 'tutelle',
    value: 'tutelle',
  },
];

export const LIEU_VIE_OPTIONS = [
  {
    label: 'domicile',
    value: 'domicile',
  },
  {
    label: 'en établissement',
    value: 'etablissement',
  },
  {
    label: 'en établissement avec conservation du domicile',
    value: 'etablissement_conservation_domicile',
  },
  {
    label: 'SDF',
    value: 'sdf',
  },
];

export const ANTENNE_OPTIONS = [];

export const APP_URL =
  process.env.REACT_APP_EMJPM_URL ||
  'https://apitest-emjpm.dev.fabrique.social.gouv.fr';

export const API_URL =
  process.env.REACT_APP_API_EMJPM_URL ||
  'https://api-apitest-emjpm.dev.fabrique.social.gouv.fr/api';
