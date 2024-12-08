import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { User, ArrowLeft, Award, Clock, BookOpen, Star, Settings, LogOut, Moon, Globe } from "lucide-react";

const ProfileScreen = () => {
  const navigate = useNavigate();

  const enrolledCourses = [
    { name: "Python for Beginners", status: "In Progress", progress: 60 },
    { name: "Web Development Basics", status: "Completed", progress: 100 },
    { name: "AI Fundamentals", status: "Not Started", progress: 0 }
  ];

  const achievements = [
    { title: "100% Course Completion", course: "Python for Beginners" },
    { title: "90% Completion", course: "Web Development Basics" }
  ];

  const certificates = [
    { name: "Python for Beginners", date: "March 2024" },
    { name: "Web Development Basics", date: "February 2024" }
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

        <Card className="p-6 mb-6 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
              <User className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Tlhalefang Ntshilane</h1>
              <p className="text-gray-600">tlhalefang@example.com</p>
              <p className="text-gray-600">+26712345678</p>
              <p className="text-gray-600">Botho University</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">Enrolled Courses</h2>
              {enrolledCourses.map((course, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{course.name}</span>
                    <span className="text-sm text-gray-600">{course.status}</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-3 flex items-center gap-3">
                    <Award className="text-yellow-400" />
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-gray-600">{achievement.course}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Certificates</h2>
              <div className="space-y-3">
                {certificates.map((certificate, index) => (
                  <Card key={index} className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="text-primary" />
                      <div>
                        <p className="font-medium">{certificate.name}</p>
                        <p className="text-sm text-gray-600">{certificate.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2" /> Account Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Moon className="mr-2" /> Dark Mode
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="mr-2" /> Language: English
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                <LogOut className="mr-2" /> Log Out
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;