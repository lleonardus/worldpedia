import { useEffect, useState } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import { RegionSelector } from "./RegionSelector";

export function CountriesForm() {
  const submit = useSubmit();
  const { q } = useLoaderData();
  const [query, setQuery] = useState(q || "");

  useEffect(
    function() {
      if (q !== undefined) {
        setQuery(q);
      }
    },
    [q],
  );

  function handleChange(e) {
    setQuery(e.target.value);
    submit(e.currentTarget.form);
  }

  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
      <Form className="relative flex max-w-[35rem] grow">
        <input
          type="search"
          placeholder="Search for a country..."
          name="q"
          value={query}
          onChange={(e) => handleChange(e)}
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
