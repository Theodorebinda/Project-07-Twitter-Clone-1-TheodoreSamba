import { useRouteError } from "react-router-dom";
import Button from "../components/Button"
import("../style/ErrorPage.css");

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <h1 className="title-error">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <span className="content-error">
        <i>{error.statusText || error.message}</i>
      </span>
      <button className="button-error" label="Clique ici" />
    </div>
  );
}
export default ErrorPage