import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center py-16">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page not found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg">
          Go back home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;