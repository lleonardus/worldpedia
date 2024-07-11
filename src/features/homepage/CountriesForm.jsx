import { Form } from "react-router-dom";
import { RegionSelector } from "./RegionSelector";

export function CountriesForm() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
      <Form className="relative flex max-w-[35rem] grow">
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full overflow-ellipsis rounded-md bg-elements py-3 pl-20 pr-10 font-semibold text-input shadow-sm focus:outline-none"
        />
        <span className="absolute left-10 top-[55%] translate-y-[-50%]">
          <ion-icon name="search-sharp" size="small"></ion-icon>
        </span>
      </Form>
      <RegionSelector />
    </div>
  );
}
