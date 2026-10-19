# React praktinė užduotis

Praktinis darbas, skirtas React komponentams, JSX, `props`, `useState`,
įvykiams ir formoms pritaikyti.

Viename Vite + React projekte įgyvendintos trys dalys:
užduočių sąrašas, krepšelio sistema ir skaičių spėjimo žaidimas.

## Naudojamos technologijos

- Vite
- React
- JavaScript
- CSS

Naudojami funkciniai komponentai ir `useState`.
Duomenys bei veiksmų funkcijos perduodami per `props`.
Papildomos vykdymo bibliotekos ir `useEffect` nenaudojami.

## Projekto paleidimas

Reikalingi Node.js ir npm.

Atsisiuntus projektą, jo aplanke įdiegti priklausomybes:

```bash
npm install
```

Paleisti kūrimo serverį:

```bash
npm run dev
```

Naršyklėje atidaryti terminale parodytą vietinį adresą.

## A dalis. Užduočių sąrašas

Komponentai: `TaskList`, `TaskForm`, `TaskItem`.

- Pradinis užduočių sąrašas yra tuščias.
- Užduotį galima pridėti mygtuku arba paspaudus Enter.
- Prieš pridėjimą pašalinami teksto kraštų tarpai.
- Tuščias tekstas atmetamas ir parodomas klaidos pranešimas.
- Pridėjus užduotį įvesties laukas išvalomas.
- Pasirinktą užduotį galima pažymėti kaip atliktą.
- Atlikta užduotis vizualiai išskiriama ir rodoma „Atlikta“.
- Atliktos užduoties pažymėjimo mygtukas išjungiamas.
- Galima ištrinti pasirinktą užduotį.
- Tuščiame sąraše rodoma „Užduočių dar nėra.“

Užduočių masyvą ir jo keitimo funkcijas saugo `TaskList`.
Kiekviena užduotis turi `id`, `text` ir `completed` laukus.

## B dalis. Krepšelio sistema

Komponentai: `App`, `ProductList`, `ProductItem`, `Cart`.

- Rodomos trys prekės su unikaliais ID ir teigiamomis kainomis.
- Pradinis krepšelis yra tuščias.
- Pirmą kartą pridėtos prekės kiekis yra 1.
- Pakartotinis pridėjimas didina kiekį vienoje eilutėje.
- Krepšelyje rodoma prekės vieneto kaina, kiekis ir eilutės suma.
- Bendra kaina apskaičiuojama iš krepšelio duomenų.
- Kainos rodomos su dviem skaitmenimis po kablelio.
- Pašalinama visa pasirinktos prekės eilutė.
- Tuščiame krepšelyje rodoma „Krepšelis tuščias.“ ir 0,00 Eur.

Prekių sąrašą ir krepšelį saugo `App`.
Prekės bei pridėjimo funkcija perduodami grandine:
`App → ProductList → ProductItem`.

## C dalis. Skaičių spėjimo žaidimas

Komponentai: `GuessGame`, `GuessForm`, `Message`.

- Slaptas sveikasis skaičius nuo 1 iki 100 generuojamas per
  `useState` pradinės reikšmės funkciją.
- Slaptas skaičius tarp bandymų nekinta ir sąsajoje nerodomas.
- Spėti galima mygtuku arba paspaudus Enter.
- Pradinis bandymų skaičius yra 0.
- Netinkama įvestis parodo klaidą ir nedidina bandymų skaičiaus.
- Kiekvienas tinkamas spėjimas, įskaitant teisingą, įskaičiuojamas.
- Rodomos užuominos „Bandyk mažesnį“ arba „Bandyk didesnį“.
- Atspėjus rodoma „Teisingai!“ ir išjungiami spėjimo valdikliai.
- Naujas žaidimas pradedamas perkraunant puslapį.

Žaidimo būseną ir spėjimų apdorojimą saugo `GuessGame`.

## Duomenų saugojimas

Duomenys saugomi React komponentų būsenoje.
Perkrovus puslapį užduočių sąrašas ir krepšelis išvalomi,
o skaičių spėjimo žaidimas pradedamas iš naujo.

## Projekto patikros

Kodo patikra:

```bash
npm run lint
```

Projekto surinkimas:

```bash
npm run build
```

Surinktos programos vietinė peržiūra:

```bash
npm run preview
```