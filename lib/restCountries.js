/**
 * Fetches a list of countries from the REST Countries API.
 * @param {RequestCache} [cache="no-store"]
 */
export async function fetchCountries(cache = "no-store") {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    { cache }
  );

  if (!res.ok) {
    throw new Error(`Failed to load countries (${res.status})`);
  }

  return res.json();
}

/**
 * Fetches a single country by alpha code from the REST Countries API.
 * @param {string} code
 * @param {RequestCache} [cache="no-store"]
 */
export async function fetchCountryByCode(code, cache = "no-store") {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps`,
    { cache }
  );

  if (!res.ok) {
    throw new Error(`Failed to load country (${res.status})`);
  }

  const data = await res.json();
  return Array.isArray(data) ? data[0] || null : data;
}
