import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from 'lucide-react';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 px-4 py-8">
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          className="mb-8 -ml-2 animate-fade-in group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-gray-600">Back</span>
        </Button>
        
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-gray-500">Join our learning community today</p>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full py-6 relative hover:scale-[1.02] transition-all duration-300 bg-white/50 backdrop-blur-sm border-gray-200"
              onClick={() => console.log('Google sign up')}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="w-5 h-5"
                />
              </div>
              <span>Continue with Google</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full py-6 relative hover:scale-[1.02] transition-all duration-300 bg-white/50 backdrop-blur-sm border-gray-200"
              onClick={() => console.log('Facebook sign up')}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <img 
                  src="https://www.facebook.com/favicon.ico" 
                  alt="Facebook" 
                  className="w-5 h-5"
                />
              </div>
              <span>Continue with Facebook</span>
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gradient-to-b from-primary/5 to-secondary/5 px-2 text-gray-500">
                  Or continue with email
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 px-4 bg-white/50 backdrop-blur-sm border-gray-200 focus:scale-[1.02] transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 px-4 bg-white/50 backdrop-blur-sm border-gray-200 focus:scale-[1.02] transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="h-12 px-4 bg-white/50 backdrop-blur-sm border-gray-200 focus:scale-[1.02] transition-all duration-300"
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-medium hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Sign Up
            </Button>
          </form>
        </div>
        
        <p className="mt-8 text-center text-gray-600 animate-fade-in">
          Already have an account?{' '}
          <Button
            variant="link"
            className="text-primary font-medium p-0"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;