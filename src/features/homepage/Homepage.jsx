import { CountriesForm } from "./CountriesForm";
import { CountriesList } from "./CountriesList";
import { getCountries } from "../../services/apiRestCountries";

export async function loader({ params }) {
  const countries = await getCountries(params.region);
  return { countries };
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
