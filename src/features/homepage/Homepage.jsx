import { CountriesForm } from "./CountriesForm";

export function Homepage() {
  return (
    <div className="pt-4">
      <div className="mx-auto max-w-[var(--max-width)] px-4 sm:px-10">
        <CountriesForm />
      </div>
    </div>
  );
}
