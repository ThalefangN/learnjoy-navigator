import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, AlertCircle } from "lucide-react";

const TakeQuizScreen = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      title: "Python Basics",
      completed: true,
      score: 80,
      timeLimit: "30 minutes",
      questions: 20
    },
    {
      title: "Functions & Modules",
      completed: true,
      score: 90,
      timeLimit: "45 minutes",
      questions: 25
    },
    {
      title: "Object-Oriented Programming",
      completed: false,
      timeLimit: "60 minutes",
      questions: 30
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

        <h1 className="text-2xl font-bold mb-6 text-primary">Available Quizzes</h1>

        <div className="space-y-4">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{quiz.title}</h2>
                    {quiz.completed && <CheckCircle className="w-5 h-5 text-green-500" />}
                  </div>
                  
                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {quiz.timeLimit}
                    </span>
                    <span className="flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" /> {quiz.questions} questions
                    </span>
                  </div>

                  {quiz.completed && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Score</span>
                        <span>{quiz.score}%</span>
                      </div>
                      <Progress value={quiz.score} className="h-2" />
                    </div>
                  )}
                </div>
                <Button variant={quiz.completed ? "outline" : "default"}>
                  {quiz.completed ? "Retake Quiz" : "Start Quiz"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakeQuizScreen;