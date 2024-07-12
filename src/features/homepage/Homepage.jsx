import { CountriesForm } from "./CountriesForm";
import { CountriesList } from "./CountriesList";
import { getCountries } from "../../services/apiRestCountries";

export async function loader({ params, request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  let countries = await getCountries(params.region);
  countries = countries.filter((country) =>
    country.name.common.toLowerCase().match(q?.toLowerCase() || ""),
  );

  return { countries, q };
}

export function Homepage() {
  return (
    <div className="pt-4">
      <div className="mx-auto max-w-[var(--max-width)] px-4 sm:px-10">
        <CountriesForm />
        <CountriesList />
      </div>
    </div>
  );
}
