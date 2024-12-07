import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from 'lucide-react';

const VerificationScreen = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
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
      
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Verify Your Email</h1>
      <p className="text-gray-600 mb-8">
        We've sent a verification code to your email address. Please enter it below.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Enter verification code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="py-6 text-center text-2xl tracking-widest"
            maxLength={6}
          />
        </div>
        <Button type="submit" className="w-full py-6 text-lg">
          Verify
        </Button>
      </form>
      
      <Button
        variant="link"
        className="w-full mt-4 text-primary"
        onClick={() => setCode('')}
      >
        Resend Code
      </Button>
    </div>
  );
};

export default VerificationScreen;