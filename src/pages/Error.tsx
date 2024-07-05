import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mx-auto flex min-h-96 w-1/2 flex-col justify-center">
      <h2 className="mb-3 text-3xl font-semibold">Error loading the page</h2>
      <p className="text-secondaryGray">
        The page you are trying to access does not exist or your you have a
        problem with your internet connection
      </p>
      <p className="mt-6 text-lg">
        Return to{" "}
        <Link to="/" className="text-sandDark">
          Home page
        </Link>
      </p>
    </div>
  );
};

export default Error;
