import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Search,
  BookOpen,
  Code,
  Play,
  Download,
  Send,
  Calendar,
  Bell,
  Trophy,
  Book,
  ClipboardList,
  User,
  Home,
  Flame,
  MessageSquare,
  FileText,
  Grid,
  Award,
  Link,
  Video
} from 'lucide-react';

const HomeScreen = () => {
  const { toast } = useToast();

  const handleActionClick = (action: string) => {
    toast({
      title: "Action Triggered",
      description: `${action} action was clicked`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 pb-20">
      <div className="max-w-lg mx-auto px-4">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold text-primary mb-2">🎓 Welcome to BotsEdu Learn 🎓</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a course..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* User Greeting */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold">Hello, Tlhalefang!</h2>
          <p className="flex items-center gap-2">
            Today's Learning Streak: <Flame className="text-orange-500" /> 5 days in a row
          </p>
        </Card>

        {/* Current Course */}
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
            onClick={() => handleActionClick("Continue Learning")}
            className="w-full flex items-center justify-center gap-2"
          >
            <Play className="h-4 w-4" /> Continue Learning
          </Button>
        </Card>

        {/* Quick Actions */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Grid className="text-primary" /> Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Code, label: "Start New Course" },
              { icon: FileText, label: "Take a Quiz" },
              { icon: ClipboardList, label: "View Assignments" },
              { icon: Trophy, label: "View Achievements" }
            ].map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-primary/5"
                onClick={() => handleActionClick(action.label)}
              >
                <action.icon className="h-6 w-6 text-primary" />
                <span className="text-sm text-center">{action.label}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Past Papers */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <FileText className="text-primary" /> Past Exam Papers
          </h2>
          <div className="space-y-2">
            {[
              "Python - 2023 Midterm Paper",
              "Java Basics - 2023 Final Paper",
              "Data Structures - Practice Questions"
            ].map((paper, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-left"
                onClick={() => handleActionClick(`Download ${paper}`)}
              >
                • {paper}
              </Button>
            ))}
            <Button 
              className="w-full mt-2 flex items-center justify-center gap-2"
              onClick={() => handleActionClick("Download All Papers")}
            >
              <Download className="h-4 w-4" /> Download All Papers
            </Button>
          </div>
        </Card>

        {/* AI Chat Tutor */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <MessageSquare className="text-primary" /> AI Chat Tutor
          </h2>
          <p className="text-gray-600 mb-3">
            "Hi Tlhalefang! How can I help you today? Ask me about your courses, assignments, or anything else!"
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your question here..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button onClick={() => handleActionClick("Send Message")}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Calendar className="text-primary" /> Upcoming Events
          </h2>
          <div className="space-y-2">
            <p>🕒 Python Quiz: Opens Friday</p>
            <p>📂 Submit Project: Data Science Basics - Due Tomorrow</p>
            <p>📢 Webinar: "Mastering AI Tools" - Thursday</p>
          </div>
        </Card>

        {/* Resource Links */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Link className="text-primary" /> Resource Links
          </h2>
          <div className="space-y-2">
            {[
              { icon: Book, label: "E-Books Library" },
              { icon: Code, label: "Coding Practice Challenges" },
              { icon: Video, label: "Video Tutorials" }
            ].map((resource, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-left"
                onClick={() => handleActionClick(resource.label)}
              >
                <resource.icon className="h-4 w-4 mr-2" />
                {resource.label}
              </Button>
            ))}
          </div>
        </Card>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="max-w-lg mx-auto flex justify-between items-center">
            {[
              { icon: Home, label: "Home" },
              { icon: Book, label: "Courses" },
              { icon: ClipboardList, label: "Assignments" },
              { icon: User, label: "Profile" }
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col items-center gap-1"
                onClick={() => handleActionClick(item.label)}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;