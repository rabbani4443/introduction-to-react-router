import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div > 
            <h1 className="text-6xl font-bold text-center py-6"> Oops!  </h1>
            <p className="text-center" >
              {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;