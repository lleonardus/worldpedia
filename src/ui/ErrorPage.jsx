import { useNavigate, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="mx-auto h-screen w-screen max-w-[var(--max-width)] bg-background px-4 pt-10 text-text sm:px-10">
      <button
        className="mb-14 space-x-3 rounded-sm bg-elements px-6 py-1.5 font-light shadow"
        onClick={() => navigate("/")}
      >
        <span>&larr;</span>
        <span>Back</span>
      </button>
      <div className="grid place-items-center space-y-2 text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Oops!
        </h1>
        <p className="md:text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="md:text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
