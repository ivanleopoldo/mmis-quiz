import { useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="min-h-svh flex w-full">
      <p>{error?.toString()}</p>
    </div>
  );
}
