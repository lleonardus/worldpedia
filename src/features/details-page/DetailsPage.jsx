import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  getCountryByName,
  getBorderCountries,
} from "../../services/apiRestCountries";
import { formatNumber } from "../../utils/formatters";

export async function loader({ params }) {
  const country = await getCountryByName(params.countryName);
  const borderCountries = await getBorderCountries(country.borders);

  return { country, borderCountries };
}

export function DetailsPage() {
  const { country, borderCountries } = useLoaderData();
  const navigate = useNavigate();

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div className="mx-auto max-w-[var(--max-width)] px-4 pt-10 sm:px-10">
      <button
        className="mb-14 space-x-3 rounded-sm bg-elements px-6 py-1.5 font-light shadow"
        onClick={() => navigate(-1)}
      >
        <span>&larr;</span>
        <span>Back</span>
      </button>
      <div className="grid lg:grid-cols-[minmax(400px,_600px)_auto] lg:grid-rows-[minmax(0,_1fr)_auto] lg:gap-x-24 xl:gap-x-36">
        <div className="max-h-[600px] w-full min-w-[250px]">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:w-full lg:justify-self-center lg:pt-14">
          <h2 className="pb-5 pt-10 text-xl font-extrabold md:text-2xl lg:pt-0 lg:text-3xl">
            {country.name.common}
          </h2>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-x-32 lg:justify-between lg:gap-10">
            <ul className="flex flex-col gap-3">
              <li>
                <span className="font-semibold">Native Name: </span>
                <span className="font-light">
                  {country.name.nativeName
                    ? Object.values(country.name.nativeName)
                        .map((name) => name.common)
                        .join(", ")
                    : "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold">Population: </span>
                <span className="font-light">
                  {formatNumber(country.population)}
                </span>
              </li>
              <li>
                <span className="font-semibold">Region: </span>
                <span className="font-light">{country.region}</span>
              </li>
              <li>
                <span className="font-semibold">Sub Region: </span>
                <span className="font-light">{country.subregion}</span>
              </li>
              <li>
                <span className="font-semibold">Capital: </span>
                <span className="font-light">{country.capital.join(", ")}</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="font-semibold">Top Level Domain: </span>
                <span className="font-light">
                  {country.tld ? country.tld[0] : "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold">Currencies: </span>
                <span className="font-light">
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold">Languages: </span>
                <span className="font-light">
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A"}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 lg:col-span-2">
          <h3 className="pb-5 text-lg font-semibold">Border Countries:</h3>
          <ul className="flex flex-wrap gap-x-3 gap-y-5">
            {borderCountries.length > 0 ? (
              borderCountries.map((borderCountry, i) => (
                <li key={i}>
                  <Link
                    to={`/country/${borderCountry.name.common}`}
                    className="rounded-sm bg-elements px-3 py-1.5 font-light shadow"
                  >
                    {borderCountry.name.common}
                  </Link>
                </li>
              ))
            ) : (
              <li>No bordering countries.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
