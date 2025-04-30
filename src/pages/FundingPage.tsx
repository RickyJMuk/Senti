import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, DollarSign, Calendar, Tag, ArrowUpDown, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { fundingOpportunities } from '../data/mockData';

const FundingPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'deadline' | 'amount'>('deadline');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Get all unique tags from funding opportunities
  const allTags = Array.from(
    new Set(fundingOpportunities.flatMap(opportunity => opportunity.tags))
  );
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }
  
  // Filter opportunities based on search query and selected categories
  const filteredOpportunities = fundingOpportunities.filter(opportunity => {
    const matchesSearch = 
      searchQuery === '' || 
      opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = 
      selectedCategories.length === 0 || 
      opportunity.tags.some(tag => selectedCategories.includes(tag));
    
    return matchesSearch && matchesCategories;
  });
  
  // Sort opportunities
  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    if (sortBy === 'deadline') {
      const dateA = new Date(a.deadline).getTime();
      const dateB = new Date(b.deadline).getTime();
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    } else {
      // Sort by amount (removing $ and commas)
      const amountA = parseInt(a.amount.replace(/[$,]/g, ''));
      const amountB = parseInt(b.amount.replace(/[$,]/g, ''));
      return sortDirection === 'asc' ? amountA - amountB : amountB - amountA;
    }
  });
  
  const toggleSort = (field: 'deadline' | 'amount') => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Funding Opportunities</h1>
          <p className="text-gray-600 mt-1">Discover grants, investments, and funding opportunities for your social enterprise</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button>
            Submit New Opportunity
          </Button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant={sortBy === 'deadline' ? 'primary' : 'outline'} 
              onClick={() => toggleSort('deadline')}
              size="sm"
              className="flex items-center"
            >
              <Calendar className="mr-1 h-4 w-4" />
              Deadline
              {sortBy === 'deadline' && (
                <ArrowUpDown className="ml-1 h-4 w-4" />
              )}
            </Button>
            
            <Button 
              variant={sortBy === 'amount' ? 'primary' : 'outline'} 
              onClick={() => toggleSort('amount')}
              size="sm"
              className="flex items-center"
            >
              <DollarSign className="mr-1 h-4 w-4" />
              Amount
              {sortBy === 'amount' && (
                <ArrowUpDown className="ml-1 h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        
        {showFilters && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedCategories.includes(tag) ? 'primary' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => toggleCategory(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedOpportunities.map(opportunity => (
          <Card key={opportunity.id} className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{opportunity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-gray-600 font-medium">{opportunity.organization}</p>
                <div className="flex items-center gap-2 mt-1">
                  <DollarSign className="h-4 w-4 text-primary-600" />
                  <span className="font-bold text-primary-700">{opportunity.amount}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span className="text-gray-600 text-sm">
                    Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">
                {opportunity.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.tags.map(tag => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button size="sm">
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {sortedOpportunities.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No funding opportunities found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default FundingPage;