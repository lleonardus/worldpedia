const API_URL = "https://restcountries.com/v3.1";

export async function getCountries(region) {
  const url = region ? `${API_URL}/region/${region}` : `${API_URL}/all`;

  const response = await fetch(
    `${url}?fields=flags,name,population,region,capital`,
  );

  const data = await response.json();

  if (!data.length) throw new Error("Region not found 🗺️");

  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
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

    return data
      .map((country) => country.name.common)
      .sort((a, b) => a.localeCompare(b));
  } else {
    return [];
  }
}
