import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from 'lucide-react';

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Button
        variant="ghost"
        className="mb-6 animate-fade-in"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </Button>
      
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h1>
        
        <div className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full py-6 relative hover:scale-105 transition-transform duration-300"
            onClick={() => console.log('Google sign in')}
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full py-6 relative hover:scale-105 transition-transform duration-300"
            onClick={() => console.log('Facebook sign in')}
          >
            <img 
              src="https://www.facebook.com/favicon.ico" 
              alt="Facebook" 
              className="w-5 h-5 mr-2"
            />
            Continue with Facebook
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="py-6 transition-all duration-300 focus:scale-105"
            />
            <Input
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="py-6 transition-all duration-300 focus:scale-105"
            />
          </div>
          <Button type="submit" className="w-full py-6 text-lg hover:scale-105 transition-transform duration-300">
            Sign In
          </Button>
        </form>
      </div>
      
      <p className="mt-6 text-center text-gray-600 animate-fade-in">
        Don't have an account?{' '}
        <Button
          variant="link"
          className="text-primary p-0"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
      </p>
    </div>
  );
};

export default SignInForm;