import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PastPapersScreen = () => {
  const { toast } = useToast();

  const handleDownload = (paper: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${paper}...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            ← Back
          </Button>
          <h1 className="text-2xl font-bold">Past Exam Papers</h1>
        </div>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Python Programming</h2>
          <div className="space-y-2">
            {[
              "2023 Midterm Paper",
              "2023 Final Paper",
              "Practice Questions"
            ].map((paper, index) => (
              <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>{paper}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownload(paper)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Button 
          className="w-full"
          onClick={() => handleDownload("all papers")}
        >
          <Download className="mr-2" /> Download All Papers
        </Button>
      </div>
    </div>
  );
};

export default PastPapersScreen;