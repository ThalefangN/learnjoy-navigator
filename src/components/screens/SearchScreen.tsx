import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const SearchScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            ← Back
          </Button>
          <h1 className="text-2xl font-bold">Search Courses</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for a course..."
            className="pl-10 pr-4"
          />
        </div>

        <div className="flex gap-2 mb-4">
          <Button variant="outline" size="sm">Category</Button>
          <Button variant="outline" size="sm">Level</Button>
          <Button variant="outline" size="sm">Duration</Button>
        </div>

        <div className="space-y-4">
          {[
            "Python for Beginners",
            "Advanced Java Programming",
            "Data Science with Python"
          ].map((course, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {course}
                  </h3>
                  <p className="text-sm text-gray-500">Duration: 6 weeks</p>
                </div>
                <Button>Enroll Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;