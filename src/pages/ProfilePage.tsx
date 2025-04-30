import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Briefcase, Award, Edit } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    bio: '',
    location: 'Mombasa, Kenya',
    skills: ['Social Impact', 'Community Engagement'],
    interests: ['Education', 'Environment', 'Health'],
    website: '',
    phone: '',
  });
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (user) {
      setProfileData(prev => ({
        ...prev,
        name: user.name,
        email: user.email,
      }));
    }
  }, [isAuthenticated, navigate, user]);
  
  if (!isAuthenticated || !user) {
    return null; // Don't render anything while redirecting
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleAddSkill = (skill: string) => {
    if (skill && !profileData.skills.includes(skill)) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill),
    }));
  };
  
  const handleSaveProfile = () => {
    // In a real app, this would save to the backend
    setIsEditing(false);
  };
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "outline" : "primary"}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
          {!isEditing && <Edit className="ml-2 h-4 w-4" />}
        </Button>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <User className="h-16 w-16" />
                </div>
              )}
              
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">{profileData.name}</h2>
              <p className="text-gray-500 capitalize">{user.role}</p>
              <p className="mt-2 text-gray-600">{profileData.location}</p>
              
              {!isEditing && (
                <>
                  <div className="mt-6 w-full space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-gray-500" />
                      <span className="text-gray-600">{profileData.email}</span>
                    </div>
                    {profileData.phone && (
                      <div className="flex items-center">
                        <Mail className="mr-2 h-5 w-5 text-gray-500" />
                        <span className="text-gray-600">{profileData.phone}</span>
                      </div>
                    )}
                    {profileData.website && (
                      <div className="flex items-center">
                        <Mail className="mr-2 h-5 w-5 text-gray-500" />
                        <a href={profileData.website} className="text-primary-600 hover:underline">
                          {profileData.website}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 w-full">
                    <h3 className="font-medium text-gray-900">Skills</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profileData.skills.map(skill => (
                        <span 
                          key={skill}
                          className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <h3 className="font-medium text-gray-900">Interests</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profileData.interests.map(interest => (
                        <span 
                          key={interest}
                          className="rounded-full bg-secondary-100 px-3 py-1 text-sm text-secondary-700"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
              
              {isEditing && (
                <div className="mt-4 w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Picture
                  </label>
                  <Button variant="outline" className="w-full">
                    Upload Photo
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Main Profile Content */}
        <div className="md:col-span-2">
          {isEditing ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      placeholder="+254..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <Input
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <Input
                      name="website"
                      value={profileData.website}
                      onChange={handleInputChange}
                      placeholder="https://..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about yourself and your social enterprise..."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile} type="button">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  {profileData.bio ? (
                    <p className="text-gray-700">{profileData.bio}</p>
                  ) : (
                    <p className="text-gray-500 italic">
                      No bio added yet. Click "Edit Profile" to add information about yourself.
                    </p>
                  )}
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-primary-600" />
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-primary-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Founder & CEO</h3>
                    <p className="text-primary-600">EcoSolutions Mombasa</p>
                    <p className="text-sm text-gray-500">2022 - Present</p>
                    <p className="mt-2 text-gray-700">
                      Leading a social enterprise focused on sustainable waste management solutions in coastal communities.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Community Coordinator</h3>
                    <p className="text-primary-600">Coastal Conservation Network</p>
                    <p className="text-sm text-gray-500">2020 - 2022</p>
                    <p className="mt-2 text-gray-700">
                      Managed community engagement initiatives for marine conservation projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center">
                  <Award className="mr-2 h-5 w-5 text-primary-600" />
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Social Entrepreneur of the Year Finalist</h3>
                    <p className="text-sm text-gray-500">Kenya Social Enterprise Awards, 2024</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Impact Award</h3>
                    <p className="text-sm text-gray-500">Mombasa County, 2023</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">Climate Action Innovator</h3>
                    <p className="text-sm text-gray-500">East Africa Climate Summit, 2022</p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;