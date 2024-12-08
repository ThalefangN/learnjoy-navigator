import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, FileText, MessageSquare, Book, Grid } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 mb-4 bg-white/80 backdrop-blur animate-fade-in">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
        <Grid className="text-primary" /> Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Code, label: "Start Course", path: "/courses" },
          { icon: FileText, label: "Take Quiz", path: "/quizzes" },
          { icon: Book, label: "Past Papers", path: "/past-papers" },
          { icon: MessageSquare, label: "AI Chat", path: "/ai-chat" }
        ].map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-primary/5"
            onClick={() => navigate(action.path)}
          >
            <action.icon className="h-6 w-6 text-primary" />
            <span className="text-sm text-center">{action.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;