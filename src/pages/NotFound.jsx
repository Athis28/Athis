
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-space-deep-blue text-white p-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8">Page not found</p>
      <p className="text-white/70 text-center max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
