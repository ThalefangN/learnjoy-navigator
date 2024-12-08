import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const AIChatScreen = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    // Add chat functionality here
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            ← Back
          </Button>
          <h1 className="text-2xl font-bold">AI Chat Tutor</h1>
        </div>

        <Card className="p-4 h-[calc(100vh-200px)] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
              <p>Hi! How can I help you today with your studies?</p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] ml-auto">
              <p>Can you help me understand Python loops?</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question here..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIChatScreen;