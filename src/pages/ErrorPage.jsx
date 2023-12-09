import { useRouteError } from "react-router-dom";
import Button from "../components/Button"
import("../style/ErrorPage.css");

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="button" label="Clique ici" />
    </div>
  );
}
export default ErrorPage