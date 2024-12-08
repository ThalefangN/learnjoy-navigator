import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Search, Send, Calendar, Book, User, Home, Flame, MessageSquare, Link, Download } from 'lucide-react';
import CurrentCourse from "./home/CurrentCourse";
import QuickActions from "./home/QuickActions";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 pb-20">
      <div className="max-w-lg mx-auto px-4">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold text-primary mb-2">🎓 Welcome to BotsEdu Learn 🎓</h1>
          <Button 
            variant="ghost"
            className="w-full relative"
            onClick={() => navigate("/search")}
          >
            <Search className="absolute left-3 text-gray-400" />
            <span className="pl-6">Search for a course...</span>
          </Button>
        </div>

        {/* User Greeting */}
        <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
          <h2 className="text-lg font-semibold">Hello, Tlhalefang!</h2>
          <p className="flex items-center gap-2">
            Today's Learning Streak: <Flame className="text-orange-500" /> 5 days in a row
          </p>
        </Card>

        <CurrentCourse />
        <QuickActions />

        {/* Past Papers */}
        <Card 
          className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in cursor-pointer hover:bg-white/90 transition-all"
          onClick={() => navigate("/past-papers")}
        >
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            Past Exam Papers
          </h2>
          <div className="space-y-2">
            {[
              "Python - 2023 Midterm Paper",
              "Java Basics - 2023 Final Paper",
              "Data Structures - Practice Questions"
            ].map((paper, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Download className="h-4 w-4" />
                {paper}
              </div>
            ))}
          </div>
        </Card>

        {/* AI Chat Tutor */}
        <Card 
          className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in cursor-pointer hover:bg-white/90 transition-all"
          onClick={() => navigate("/ai-chat")}
        >
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
              readOnly
            />
            <Button>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="max-w-lg mx-auto flex justify-between items-center">
            {[
              { icon: Home, label: "Home", path: "/home" },
              { icon: Book, label: "Courses", path: "/courses" },
              { icon: MessageSquare, label: "Chat", path: "/ai-chat" },
              { icon: User, label: "Profile", path: "/profile" }
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col items-center gap-1"
                onClick={() => navigate(item.path)}
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