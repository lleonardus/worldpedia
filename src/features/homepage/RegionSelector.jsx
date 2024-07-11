import { useState } from "react";
import { Link } from "react-router-dom";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export function RegionSelector() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative max-w-56 space-y-1 *:px-8 *:py-4 *:shadow-md sm:w-56">
      <button
        className="flex w-full items-center justify-between gap-2 rounded-md bg-elements text-left"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span>Filter by Region</span>
        <span className="h-4">
          <ion-icon
            name={`chevron-${isOpen ? "down" : "up"}-outline`}
          ></ion-icon>
        </span>
      </button>
      <ul
        className={`absolute flex w-full flex-col gap-2.5 rounded-md bg-elements ${isOpen ? "block" : "hidden"}`}
      >
        {regions.map((region) => (
          <li key={region}>
            <Link to={`/region/${region}`}>{region}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
