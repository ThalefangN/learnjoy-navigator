import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const PastPapersScreen = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDownload = (paper: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${paper}...`,
    });
  };

  const subjects = [
    {
      name: "Mathematics",
      papers: [
        "2023 BGCSE Paper 1",
        "2023 BGCSE Paper 2",
        "2022 BGCSE Paper 1",
        "2022 BGCSE Paper 2"
      ]
    },
    {
      name: "Science",
      papers: [
        "2023 BGCSE Biology Paper",
        "2023 BGCSE Chemistry Paper",
        "2023 BGCSE Physics Paper",
        "2022 BGCSE Combined Science"
      ]
    },
    {
      name: "English",
      papers: [
        "2023 BGCSE English Language",
        "2023 BGCSE Literature",
        "2022 BGCSE English Language",
        "2022 BGCSE Literature"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <h1 className="text-2xl font-bold">BGCSE Past Papers</h1>
        </div>

        {subjects.map((subject, index) => (
          <Card key={index} className="p-4">
            <h2 className="text-lg font-semibold mb-4">{subject.name}</h2>
            <div className="space-y-2">
              {subject.papers.map((paper, paperIndex) => (
                <div key={paperIndex} 
                  className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>{paper}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDownload(paper)}
                    className="hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}

        <Button 
          className="w-full gap-2"
          onClick={() => handleDownload("all BGCSE papers")}
        >
          <Download className="h-4 w-4" /> Download All Papers
        </Button>
      </div>
    </div>
  );
};

export default PastPapersScreen;