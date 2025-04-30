import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Users, DollarSign, BarChart3 } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="relative bg-white pb-20">
      {/* Hero Section */}
      <div className="relative bg-primary-50">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Empowering Social</span>
                <span className="block mt-1 text-primary-600">Entrepreneurs in Mombasa</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-gray-600">
                Senti connects social entrepreneurs with the funding, mentorship, and market networks they need to create sustainable impact in Mombasa County.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/register">
                  <Button size="lg" className="animate-slide-up">Get Started</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="animate-slide-up">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Social entrepreneurs collaborating"
                className="absolute inset-0 h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Senti Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our platform provides the tools and connections social entrepreneurs need to succeed.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Connect</h3>
              <p className="mt-2 text-center text-gray-600">
                Find mentors and partners that align with your mission and vision.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Fund</h3>
              <p className="mt-2 text-center text-gray-600">
                Access grants, investments, and other funding opportunities.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Grow</h3>
              <p className="mt-2 text-center text-gray-600">
                Expand your business through strategic partnerships and market access.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100 text-success-700">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Measure</h3>
              <p className="mt-2 text-center text-gray-600">
                Track your impact and show investors the change you're making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              See how social entrepreneurs are creating change with Senti.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Success Story 1 */}
            <div className="bg-white overflow-hidden rounded-xl shadow-sm transition duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/7658366/pexels-photo-7658366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Urban farming project"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Green Urban Farms</h3>
                <p className="mt-2 text-gray-600">
                  A sustainable urban farming initiative that secured $50,000 in funding through Senti's platform.
                </p>
                <Link
                  to="/stories/green-urban-farms"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Read their story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white overflow-hidden rounded-xl shadow-sm transition duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/6203797/pexels-photo-6203797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Women in tech workshop"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">TechHer Mombasa</h3>
                <p className="mt-2 text-gray-600">
                  A coding academy for young women that found mentors and expanded to three locations.
                </p>
                <Link
                  to="/stories/techher-mombasa"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Read their story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white overflow-hidden rounded-xl shadow-sm transition duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team meeting in a startup office"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">OceanClean</h3>
                <p className="mt-2 text-gray-600">
                  A plastic recycling business that connected with international buyers through our network.
                </p>
                <Link
                  to="/stories/ocean-clean"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Read their story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-2xl bg-primary-600 px-6 py-10 sm:px-12 sm:py-16 md:flex md:items-center md:justify-between lg:px-16">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to grow your social enterprise?
              </h2>
              <p className="mt-3 max-w-md text-lg text-primary-100 md:mt-2">
                Join our community of changemakers and access the resources you need.
              </p>
            </div>
            <div className="mt-8 flex justify-center md:mt-0">
              <Link to="/register">
                <Button
                  variant="secondary"
                  size="lg"
                  className="animate-pulse"
                >
                  Join Senti Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;