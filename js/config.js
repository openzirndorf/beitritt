// Vereinsdaten, Beträge und Links für das Beitrittsformular.
// Werte mit spitzen Klammern <...> sind Platzhalter und MÜSSEN vor dem
// Livegang durch echte Daten ersetzt werden.

export const CONFIG = {
  vereinsname: "OpenZirndorf i. G.",
  anschrift: "Erich-Kästner-Weg 33, 90513 Zirndorf",
  postanschrift: "OpenZirndorf i. G., Erich-Kästner-Weg 33, 90513 Zirndorf",
  email: "vorstand@openzirndorf.de",

  // Gläubiger-Identifikationsnummer für SEPA-Lastschriften.
  glaeubigerId: "DE68ZZZ00002940464",

  // IBAN des Vereins, für den Hinweistext bei Zahlung per Überweisung.
  vereinsIban: "DE38830654080007024878",

  satzungUrl: "https://openzirndorf.de/static/docs/satzung.pdf",
  beitragsordnungUrl: "https://openzirndorf.de/static/docs/beitragsordnung.pdf",

  // Nextcloud-Forms-Link, über den Antragstellende Name/E-Mail eingeben und
  // ihr unterschriebenes PDF anhängen. Das Passwort ist bewusst zusammen mit
  // dem Link öffentlich sichtbar (kein Backend, das es geheim halten könnte)
  // – es filtert nur blind das offene Netz absuchende Bots heraus, keine
  // gezielte Einsicht. Leer lassen, falls das Formular kein Passwort hat.
  uploadUrl: "https://cloud.openzirndorf.de/apps/forms/s/kdk38HXHmWBxi77T6FyYY87f",
  uploadPasswort: "",

  faelligkeitText: "1. Februar",
  // Monat, auf den der jährliche Beitragseinzug fällt (1 = Januar … 12 = Dezember).
  faelligkeitMonat: 2,

  mitgliedschaftsarten: [
    {
      id: "ordentlich",
      label: "Ordentliche Mitgliedschaft",
      kurztext: "24 € pro Jahr",
      mindestbetrag: 24,
      brauchtOrganisation: false
    },
    {
      id: "foerder_privat",
      label: "Fördermitgliedschaft – natürliche Person",
      kurztext: "mindestens 42 € pro Jahr",
      mindestbetrag: 42,
      brauchtOrganisation: false
    },
    {
      id: "foerder_organisation",
      label: "Fördermitgliedschaft – Verein, Initiative, Schule oder gemeinnützige Organisation",
      kurztext: "mindestens 50 € pro Jahr",
      mindestbetrag: 50,
      brauchtOrganisation: true
    },
    {
      id: "foerder_unternehmen",
      label: "Fördermitgliedschaft – Unternehmen oder sonstige juristische Person",
      kurztext: "mindestens 100 € pro Jahr",
      mindestbetrag: 100,
      brauchtOrganisation: true
    }
  ]
};

export function findMitgliedschaftsart(id) {
  return CONFIG.mitgliedschaftsarten.find((art) => art.id === id) || null;
}
