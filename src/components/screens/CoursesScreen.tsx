import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft, Clock, BookOpen, Star, Filter } from "lucide-react";

const CoursesScreen = () => {
  const navigate = useNavigate();

  const categories = [
    "Python Programming",
    "Data Science",
    "Web Development",
    "Artificial Intelligence"
  ];

  const featuredCourses = [
    {
      title: "Python for Beginners",
      difficulty: "Easy",
      duration: "6 weeks",
      instructor: "John Doe",
      rating: 4.8
    },
    {
      title: "Data Science Basics",
      difficulty: "Medium",
      duration: "8 weeks",
      instructor: "Jane Smith",
      rating: 4.9
    },
    {
      title: "Java Programming",
      difficulty: "Medium",
      duration: "10 weeks",
      instructor: "Mike Johnson",
      rating: 4.7
    },
    {
      title: "AI Fundamentals",
      difficulty: "Hard",
      duration: "12 weeks",
      instructor: "Sarah Wilson",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 p-4 pb-20">
      <div className="max-w-lg mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/home")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Button>

        <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 rounded-lg mb-6 z-10">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <Input 
              placeholder="Search for a course..." 
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-1" /> Category
            </Button>
            <Button variant="outline" size="sm">Level</Button>
            <Button variant="outline" size="sm">Difficulty</Button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="p-4 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
              >
                <BookOpen className="mb-2 text-primary" />
                <p className="font-medium">{category}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Featured Courses</h2>
          <div className="space-y-4">
            {featuredCourses.map((course, index) => (
              <Card 
                key={index}
                className="p-4 hover:shadow-lg transition-all cursor-pointer animate-fade-in transform hover:scale-105"
                onClick={() => navigate("/start-course")}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <Badge variant="secondary">{course.difficulty}</Badge>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Button className="w-full mt-4">
                  Enroll Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;