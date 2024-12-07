import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Learn Anywhere, Anytime",
    description: "Access thousands of courses from expert instructors at your fingertips",
    image: "photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed progress tracking",
    image: "photo-1531297484001-80022131f5a1"
  },
  {
    title: "Join Our Community",
    description: "Connect with millions of learners from around the world",
    image: "photo-1483058712412-4245e9b90334"
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
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0 opacity-100' 
                : index < currentSlide 
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={`https://images.unsplash.com/${slide.image}?auto=format&fit=crop&w=2000`}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
              <h2 className="text-3xl font-bold text-white mb-4 text-center animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-white text-center mb-8 max-w-xs animate-fade-in">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 bg-white/90 backdrop-blur-sm z-30">
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
          className="w-full py-6 text-lg transition-all duration-300 hover:scale-105"
          onClick={handleNext}
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight className="ml-2 h-5 w-5 animate-slide-in-right" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingSlides;