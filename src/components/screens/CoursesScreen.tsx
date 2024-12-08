import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft, Clock, CheckCircle } from "lucide-react";

const CoursesScreen = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Advanced Python Programming",
      progress: 80,
      nextLesson: "Object-Oriented Programming",
      time: "Today at 3:00 PM",
      completed: 4,
      total: 5
    },
    {
      title: "Web Development Fundamentals",
      progress: 60,
      nextLesson: "CSS Layouts",
      time: "Tomorrow at 2:00 PM",
      completed: 3,
      total: 5
    },
    {
      title: "Data Science Basics",
      progress: 30,
      nextLesson: "Data Visualization",
      time: "Wednesday at 4:00 PM",
      completed: 2,
      total: 6
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

        <h1 className="text-2xl font-bold mb-6 text-primary">My Courses</h1>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow animate-fade-in">
              <h2 className="text-lg font-semibold mb-3">{course.title}</h2>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="text-sm text-gray-600 space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Next: {course.nextLesson}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{course.completed} of {course.total} modules completed</span>
                </div>
              </div>

              <Button className="w-full">Continue Learning</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;