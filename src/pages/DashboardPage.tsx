import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, DollarSign, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

// Mock funding opportunities
const fundingOpportunities = [
  {
    id: 1,
    title: 'Clean Ocean Initiative Grant',
    organization: 'Marine Conservation Alliance',
    amount: '$25,000',
    deadline: '2025-06-15',
    tags: ['Environment', 'Conservation'],
  },
  {
    id: 2,
    title: 'Women in Business Fund',
    organization: 'Mombasa Chamber of Commerce',
    amount: '$10,000',
    deadline: '2025-05-30',
    tags: ['Women', 'Business'],
  },
];

// Mock upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: 'Social Enterprise Networking Breakfast',
    date: '2025-05-20',
    time: '08:00 - 10:00',
    location: 'Mombasa Business Hub',
  },
  {
    id: 2,
    title: 'Grant Writing Workshop',
    date: '2025-05-25',
    time: '14:00 - 17:00',
    location: 'Virtual',
  },
];

// Mock resources
const latestResources = [
  {
    id: 1,
    title: 'Guide to Impact Measurement',
    type: 'PDF',
    category: 'Impact',
  },
  {
    id: 2,
    title: 'Financial Modeling for Social Enterprises',
    type: 'Video',
    category: 'Finance',
  },
];

// Mock mentors
const recommendedMentors = [
  {
    id: 1,
    name: 'Jane Smith',
    role: 'Business Development Consultant',
    expertise: ['Marketing', 'Strategy'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Michael Kimani',
    role: 'Tech Entrepreneur',
    expertise: ['Technology', 'Scaling'],
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated || !user) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="mb-6 text-3xl font-bold">Welcome back, {user.name}</h1>
      
      {/* Quick Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Card className="bg-primary-50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 rounded-full bg-primary-100 p-3">
              <Users className="h-6 w-6 text-primary-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Mentoring Sessions</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary-50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 rounded-full bg-secondary-100 p-3">
              <DollarSign className="h-6 w-6 text-secondary-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Funding Applications</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-accent-50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 rounded-full bg-accent-100 p-3">
              <BookOpen className="h-6 w-6 text-accent-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Resources Saved</p>
              <p className="text-2xl font-semibold text-gray-900">7</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-success-50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 rounded-full bg-success-100 p-3">
              <Calendar className="h-6 w-6 text-success-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Events RSVP'd</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Funding Opportunities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Funding Opportunities</CardTitle>
            <Button variant="link" className="ml-auto">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundingOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{opportunity.title}</h3>
                    <span className="font-medium text-primary-600">{opportunity.amount}</span>
                  </div>
                  <p className="text-sm text-gray-500">{opportunity.organization}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {opportunity.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Events</CardTitle>
            <Button variant="link" className="ml-auto">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">{event.title}</h3>
                  <div className="flex flex-col space-y-1 text-sm text-gray-500">
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      RSVP
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Recommended Mentors */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recommended Mentors</CardTitle>
            <Button variant="link" className="ml-auto">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedMentors.map((mentor) => (
                <div key={mentor.id} className="flex items-start rounded-lg border p-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">{mentor.role}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="primary" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="ml-auto" size="sm">
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest Resources */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Latest Resources</CardTitle>
            <Button variant="link" className="ml-auto">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {latestResources.map((resource) => (
                <div key={resource.id} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="outline" size="sm">
                          {resource.type}
                        </Badge>
                        <Badge variant="primary" size="sm">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;