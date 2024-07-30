const API_URL = "https://restcountries.com/v3.1";

const defaultCountries = [
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
    },
    capital: "Berlin",
    region: "Europe",
    population: 83240525,
    flags: {
      svg: "https://flagcdn.com/de.svg",
      png: "https://flagcdn.com/w320/de.png",
    },
  },
  {
    name: {
      common: "United States",
      official: "United States of America",
    },
    capital: "Washington, D.C.",
    region: "Americas",
    population: 329484123,
    flags: {
      svg: "https://flagcdn.com/us.svg",
      png: "https://flagcdn.com/w320/us.png",
    },
  },
  {
    name: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
    },
    region: "Americas",
    capital: "Brasília",
    population: 212559409,
    flags: {
      svg: "https://flagcdn.com/br.svg",
      png: "https://flagcdn.com/w320/br.png",
    },
  },
  {
    name: {
      common: "Iceland",
      official: "Iceland",
    },
    capital: "Reykjavík",
    region: "Europe",
    population: 366425,
    flags: {
      svg: "https://flagcdn.com/is.svg",
      png: "https://flagcdn.com/w320/is.png",
    },
  },
  {
    name: {
      common: "Afghanistan",
      official: "Islamic Republic of Afghanistan",
    },
    capital: "Kabul",
    region: "Asia",
    population: 40218234,
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
  },
  {
    name: {
      common: "Åland Islands",
      official: "Åland Islands",
    },
    capital: "Mariehamn",
    region: "Europe",
    population: 28875,
    flags: {
      svg: "https://flagcdn.com/ax.svg",
      png: "https://flagcdn.com/w320/ax.png",
    },
  },
  {
    name: {
      common: "Albania",
      official: "Republic of Albania",
    },
    region: "Europe",
    capital: "Tirana",
    population: 2837743,
    flags: {
      svg: "https://flagcdn.com/al.svg",
      png: "https://flagcdn.com/w320/al.png",
    },
  },
  {
    name: {
      common: "Algeria",
      official: "People's Democratic Republic of Algeria",
    },
    region: "Africa",
    capital: "Algiers",
    population: 44700000,
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      png: "https://flagcdn.com/w320/dz.png",
    },
  },
];

export async function getCountries(region) {
  if (!region) return defaultCountries;

  const response = await fetch(
    `${API_URL}/region/${region}?fields=flags,name,population,region,capital`,
  );
  const data = await response.json();

  return data;
}

export async function getCountryByName(countryName) {
  const response = await fetch(`${API_URL}/name/${countryName}`);
  const data = await response.json();

  if (!data.length) throw new Error("Country not found 🗺️");

  const country = data.filter(
    (country) =>
      country.name.official === countryName ||
      country.name.common === countryName,
  )[0];

  return country;
}

export async function getBorderCountries(borderCodes) {
  if (borderCodes && borderCodes.length > 0) {
    const response = await fetch(
      `${API_URL}/alpha?codes=${borderCodes.join(",")}`,
    );
    const data = await response.json();

    return data;
  } else {
    return [];
  }
}
