const fill = (n, f) => new Array(n).fill(undefined).map((_, i) => f(i));
const randomInt = ({ min = 0, max }) => Math.floor(min + Math.random() * (max - min));
const sample = values => values[randomInt({ max: values.length })];
const randomChar = (vowels = 0.5) => sample(Array.from(Math.random() < vowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz'));
const randomString = () => fill(randomInt({ min: 5, max: 32 }), () => randomChar()).join('');

const randomName = () => fill(randomInt({ min: 1, max: 4 }), () => randomString()).join(' ');

module.exports = () => {
  const data = {
    "aliases": [
      { "id": 10000, "sanctionId": 100, "alias": "KCST" },
      { "id": 10001, "sanctionId": 100, "alias": "Committee for Space Technology" },
      { "id": 10002, "sanctionId": 100, "alias": "DPRK Committee for Space Technology" },
      { "id": 10003, "sanctionId": 100, "alias": "Department of Space Technology of the DPRK" },
      { "id": 10004, "sanctionId": 100, "alias": "Korean Committee for Space Technology" },
      { "id": 10100, "sanctionId": 101, "alias": "Aran Modern Devices" },
      { "id": 10101, "sanctionId": 101, "alias": "AMD" },
      { "id": 10200, "sanctionId": 102, "alias": "Abou Ali" },
      { "id": 10201, "sanctionId": 102, "alias": "Abu Ali" },
      { "id": 10202, "sanctionId": 102, "alias": "Saddam Hussein Al-Tikriti" },
      { "id": 10300, "sanctionId": 103, "alias": "Abou Ali" },
      { "id": 10301, "sanctionId": 103, "alias": "Faycal" },
      { "id": 10302, "sanctionId": 103, "alias": "Noureddine Ben Ali Ben Belkassem Al-Drissi" },
      { "id": 10303, "sanctionId": 103, "alias": "Noureddine Drissi" },
      { "id": 10400, "sanctionId": 104, "alias": "Popular Credit Bank" },
      { "id": 10401, "sanctionId": 104, "alias": "Banca Populară de Credit" },
      { "id": 10500, "sanctionId": 105, "alias": "Malek Ashtar University" },
      { "id": 10501, "sanctionId": 105, "alias": "Malek Ashtar universitetas" },
      { "id": 10502, "sanctionId": 105, "alias": "Malek Ashtar-Universität" },
      { "id": 10503, "sanctionId": 105, "alias": "Universidade Malek Ashtar" },
      { "id": 10504, "sanctionId": 105, "alias": "Universitatea Malek Ashtar" },
      { "id": 10505, "sanctionId": 105, "alias": "Università Malek Ashtar" },
      { "id": 10506, "sanctionId": 105, "alias": "Università Malek Ashtar" },
      { "id": 10507, "sanctionId": 105, "alias": "Univerza za obrambno tehnologijo Malek Ashtar" },
      { "id": 10508, "sanctionId": 105, "alias": "Univerzita Malek Ashtar" },
      { "id": 10509, "sanctionId": 105, "alias": "Univerzita Maleka Aštara" },
      { "id": 10510, "sanctionId": 105, "alias": "Πανεπιστήμιο Malek Ashtar" },
      { "id": 10511, "sanctionId": 105, "alias": "Университет Malek Ashtar" },
      { "id": 10512, "sanctionId": 105, "alias": "Université Malek Ashtar" },
      { "id": 10600, "sanctionId": 106, "alias": "AAS" },
      { "id": 10601, "sanctionId": 106, "alias": "Al-Kaida na Półwyspie Arabskim" },
      { "id": 10602, "sanctionId": 106, "alias": "Al-Kaida organizacije Džihad z Arabskega polotoka," },
      { "id": 10603, "sanctionId": 106, "alias": "Al-Kaida w południowej części Półwyspu Arabskiego" },
      { "id": 10604, "sanctionId": 106, "alias": "Al-Kaida z južnega dela Arabskega polotoka" },
      { "id": 10605, "sanctionId": 106, "alias": "Al-Qa'ida van het zuidelijk Arabisch Schiereiland" },
      { "id": 10606, "sanctionId": 106, "alias": "Al-Qa'ida-organisatie van het Arabisch Schiereiland" },
      { "id": 10607, "sanctionId": 106, "alias": "Al-Qa‘ida van het Arabisch Schiereiland" },
      { "id": 10608, "sanctionId": 106, "alias": "Al-Qaeda en la península arábiga" },
      { "id": 10609, "sanctionId": 106, "alias": "Al-Qaid a de l’organisation du Djihad dans la péninsule arabique" },
      { "id": 10610, "sanctionId": 106, "alias": "Al-Qaida dans la péninsule arabique" },
      { "id": 10611, "sanctionId": 106, "alias": "Al-Qaida din Peninsula Arabia de Sud" },
      { "id": 10612, "sanctionId": 106, "alias": "Al-Qaida din Yemen" },
      { "id": 10613, "sanctionId": 106, "alias": "Al-Qaida fil-Peniżola Għarbija" },
      { "id": 10614, "sanctionId": 106, "alias": "Al-Qaida i den sydlige del af Den Arabiske Halvø" },
      { "id": 10615, "sanctionId": 106, "alias": "Al-Qaida in the Arabian Peninsula" },
      { "id": 10616, "sanctionId": 106, "alias": "Al-Qaida in Yemen" },
      { "id": 10617, "sanctionId": 106, "alias": "Al-Qaida Organization in the Arabian Peninsula" },
      { "id": 10618, "sanctionId": 106, "alias": "Al-Qaida på Den Arabiske Halvø" },
      { "id": 10619, "sanctionId": 106, "alias": "Al-Qaida tal-Jihad Organization fil-Peniżola Għarbija," },
      { "id": 10620, "sanctionId": 106, "alias": "Al-Qaida στην Νότια Αραβική Χερσόνησο" },
      { "id": 10621, "sanctionId": 106, "alias": "Al-Qaida της οργάνωσης Jihad στην Αραβική Χερσόνησο" },
      { "id": 10622, "sanctionId": 106, "alias": "AQAP" },
      { "id": 10623, "sanctionId": 106, "alias": "AQPA" },
      { "id": 10624, "sanctionId": 106, "alias": "AQY" },
      { "id": 10625, "sanctionId": 106, "alias": "Organizacja dżihadu na Półwyspie arabskim Al-Kaida," },
      { "id": 10626, "sanctionId": 106, "alias": "Organizația Al-Qaida din Peninsula Arabia" },
      { "id": 10627, "sanctionId": 106, "alias": "Tanzim Qa'idat al-Jihad fi Jazirat al-Arabm" },
      { "id": 10628, "sanctionId": 106, "alias": "οργάνωση Al-Qaida στην Αραβική Χερσόνησο" }
    ],
    "sanctions": [
      { "id": 100, "primaryName": "KCST", "issued": "2006-06-12T22:24:11.602Z" },
      { "id": 101, "primaryName": "Aran Modern Devices", "issued": "2013-01-22T22:24:11.602Z" },
      { "id": 102, "primaryName": "Abou Ali", "issued": "2001-10-27T22:24:11.602Z" },
      { "id": 103, "primaryName": "Abou Ali", "issued": "2003-03-01T22:24:11.602Z" },
      { "id": 104, "primaryName": "Popular Credit Bank", "issued": "2010-10-31T22:24:11.602Z" },
      { "id": 105, "primaryName": "Université Malek Ashtar", "issued": "2015-11-27T22:24:11.602Z" },
      { "id": 106, "primaryName": "οργάνωση Al-Qaida στην Αραβική Χερσόνησο", "issued": "1990-08-02T22:24:11.602Z"  }
    ]
  };

  const now = new Date();
  const randomDate = () => new Date(randomInt({ max: now.getTime() }));
  for (let id = 0; id < 50; id++) {
    const aliases = fill(randomInt({ min: 1, max: 5 }), randomName);
    const issued = randomDate();
    const ended = randomDate();

    data.sanctions.push({
      id,
      primaryName: aliases[0],
      issued: issued.toISOString(),
      ended: issued < ended ? ended : undefined
    });

    aliases.forEach((alias, i) => data.aliases.push({ id, sanctionId: (id * 100) + i, alias }));
  }

  return data;
}