import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, MessageSquare, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AIChatScreen = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!message.trim()) return;
    // Add chat functionality here
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="max-w-lg mx-auto h-screen flex flex-col">
        <div className="flex items-center gap-2 p-4 border-b bg-white/80 backdrop-blur">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <MessageSquare className="text-primary" /> AI Chat Tutor
            </h1>
            <p className="text-sm text-gray-500">Your personal learning assistant</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
            <p>Hi! I'm your AI tutor. How can I help you with your studies today?</p>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] ml-auto">
            <p>Can you help me understand Python loops?</p>
          </div>

          <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
            <p>Of course! Python loops are used to repeat a block of code multiple times. The two main types are:</p>
            <ul className="list-disc ml-4 mt-2">
              <li>for loops - used when you know how many times to repeat</li>
              <li>while loops - used when you want to repeat until a condition is met</li>
            </ul>
            <p className="mt-2">Would you like to see some examples?</p>
          </div>
        </div>

        <div className="p-4 bg-white/80 backdrop-blur border-t">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatScreen;