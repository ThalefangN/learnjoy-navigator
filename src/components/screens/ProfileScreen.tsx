import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { User, ArrowLeft, Award, Clock, BookOpen, Star } from "lucide-react";

const ProfileScreen = () => {
  const navigate = useNavigate();

  const achievements = [
    { title: "Python Guru", description: "Completed all Python courses" },
    { title: "Consistent Learner", description: "30-day study streak" },
    { title: "Quiz Master", description: "Perfect score in 5 quizzes" }
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
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Tlhalefang</h1>
              <p className="text-gray-600">Student</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-gray-600">Certificates</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Progress</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </Card>

        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-4 flex items-center gap-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;