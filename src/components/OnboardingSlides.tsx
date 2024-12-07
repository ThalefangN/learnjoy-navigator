import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Learn Anywhere, Anytime",
    description: "Access thousands of courses from expert instructors at your fingertips",
    image: "photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed progress tracking",
    image: "photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Join Our Community",
    description: "Connect with millions of learners from around the world",
    image: "photo-1498050108023-c5249f4df085"
  }
];

const OnboardingSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/signup');
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-transform duration-300 ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img
              src={`https://images.unsplash.com/${slide.image}?auto=format&fit=crop&w=800`}
              alt={slide.title}
              className="w-64 h-64 object-cover rounded-2xl mb-8"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {slide.title}
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-xs">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
        <Button
          className="w-full py-6 text-lg"
          onClick={handleNext}
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingSlides;