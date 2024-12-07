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
    <div className="min-h-screen bg-white p-6">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </Button>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Full Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="py-6"
          />
        </div>
        <div>
          <Input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="py-6"
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="py-6"
          />
        </div>
        <Button type="submit" className="w-full py-6 text-lg">
          Sign Up
        </Button>
      </form>
      
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{' '}
        <Button
          variant="link"
          className="text-primary p-0"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </Button>
      </p>
    </div>
  );
};

export default SignUpForm;