import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { BookOpen, Play } from "lucide-react";

const CurrentCourse = () => {
  return (
    <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
        <BookOpen className="text-primary" /> Your Current Course
      </h2>
      <p className="text-gray-700 mb-2">📘 Advanced Python Programming</p>
      <div className="mb-2">
        <Progress value={80} className="h-2" />
        <p className="text-sm text-gray-500 mt-1">80% Complete</p>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        🕒 Next Lesson: Object-Oriented Programming - Today at 3:00 PM
      </p>
      <Button 
        className="w-full flex items-center justify-center gap-2"
      >
        <Play className="h-4 w-4" /> Continue Learning
      </Button>
    </Card>
  );
};

export default CurrentCourse;