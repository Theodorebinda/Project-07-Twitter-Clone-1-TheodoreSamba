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
      <p className="content-error">
        <i>{error.statusText || error.message}</i>
      </p>
      <Button className="button-error" label="Clique ici" /*onClick=()*/ /> 
    </div>
  );
}
export default ErrorPage