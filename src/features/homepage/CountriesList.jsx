import { Link, useLoaderData } from "react-router-dom";
import { formatNumber } from "../../utils/formatters";

export function CountriesList() {
  const { countries } = useLoaderData();

  return (
    <ul className="grid gap-10 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-20 xl:gap-y-20">
      {countries.map((country, id) => (
        <li className="overflow-hidden rounded-md bg-elements shadow" key={id}>
          <Link to={`/country/${country.name.official}`}>
            <div className="sm:h-44 sm:w-full">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="w-full sm:h-full sm:object-cover"
              />
            </div>
            <div className="px-7 pt-4">
              <h2 className="text-lg font-extrabold">{country.name.common}</h2>
              <div className="space-y-1 pb-10 pt-3">
                <p>
                  <span className="font-bold">Population: </span>
                  <span className="font-light">
                    {formatNumber(country.population)}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Region: </span>
                  <span className="font-light">{country.region}</span>
                </p>
                <p>
                  <span className="font-bold">Capital: </span>
                  <span className="font-light">{country.capital}</span>
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
