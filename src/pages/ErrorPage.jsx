import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  //   console.error(error);
  const custom_class = {
    backgroundImage:
      "repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),linear-gradient(90deg, hsl(194,74%,56%),hsl(266,74%,56%),hsl(338,74%,56%),hsl(50,74%,56%),hsl(122,74%,56%))",
  };

  return (
    <div
      style={custom_class}
      id="error-page"
      className="h-[100vh] flex justify-center items-center text-center font-bold text-2xl custom_class"
    >
      <div>
        {error.status === 404 || (
          <div className="text-white">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
              <button className="btn btn-primary text-white capitalize mt-4">
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
        {error.status === 404 && (
          <div className="text-white">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <h3>404 page {error.statusText || error.message}</h3>
            <p className="mt-8"></p>
            <Link to="/">
              <button className="btn btn-primary text-white capitalize">
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
