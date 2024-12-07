import { Button } from "@/components/ui/button";
import { Search, BookOpen, Code, Palette, Music, ChevronRight } from 'lucide-react';

const categories = [
  { icon: Code, name: "Programming", courses: 120 },
  { icon: Palette, name: "Design", courses: 85 },
  { icon: Music, name: "Music", courses: 65 },
  { icon: BookOpen, name: "Languages", courses: 200 },
];

const featuredCourses = [
  {
    title: "Learn Python Programming",
    instructor: "John Doe",
    duration: "8 weeks",
    image: "photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "UI/UX Design Basics",
    instructor: "Jane Smith",
    duration: "6 weeks",
    image: "photo-1488590528505-98d2b5aba04b"
  },
];

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white p-6 pb-12 rounded-b-[40px]">
        <h1 className="text-2xl font-bold mb-6">Hello, Learner! 👋</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full py-4 pl-12 pr-4 rounded-xl bg-white text-gray-900"
          />
        </div>
      </div>

      <div className="px-6 -mt-6">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((Category, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 hover:border-primary hover:text-primary"
              >
                <Category.icon className="h-6 w-6 mb-2" />
                <span className="text-sm">{Category.name}</span>
                <span className="text-xs text-gray-500">{Category.courses} courses</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Featured Courses</h2>
            <Button variant="ghost" className="text-primary">
              See All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex items-center space-x-4 shadow-sm"
              >
                <img
                  src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=200`}
                  alt={course.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">by {course.instructor}</p>
                  <p className="text-sm text-primary">{course.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;