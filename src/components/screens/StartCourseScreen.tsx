import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft, Clock, Users, Star } from "lucide-react";

const StartCourseScreen = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Python for Beginners",
      duration: "6 weeks",
      students: "1.2k",
      rating: "4.8",
      level: "Beginner"
    },
    {
      title: "Web Development Basics",
      duration: "8 weeks",
      students: "980",
      rating: "4.7",
      level: "Beginner"
    },
    {
      title: "Introduction to AI",
      duration: "10 weeks",
      students: "750",
      rating: "4.9",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="max-w-lg mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/home")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Button>

        <h1 className="text-2xl font-bold mb-6 text-primary">Available Courses</h1>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" /> {course.students} students
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" /> {course.rating}
                    </span>
                  </div>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-primary/10 rounded-full">
                    {course.level}
                  </span>
                </div>
                <Button>Enroll Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartCourseScreen;