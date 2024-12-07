import { Button } from "@/components/ui/button";
import { Search, BookOpen, Code, Palette, Music, ChevronRight, Play, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

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
    image: "photo-1487058792275-0ad4aaf24ca7",
    rating: 4.8,
    students: 1234
  },
  {
    title: "UI/UX Design Basics",
    instructor: "Jane Smith",
    duration: "6 weeks",
    image: "photo-1488590528505-98d2b5aba04b",
    rating: 4.9,
    students: 856
  },
  {
    title: "Web Development Bootcamp",
    instructor: "Mike Johnson",
    duration: "12 weeks",
    image: "photo-1498050108023-c5249f4df085",
    rating: 4.7,
    students: 2341
  }
];

const popularInstructors = [
  {
    name: "Sarah Wilson",
    expertise: "Digital Marketing",
    image: "photo-1581091226825-a6a2a5aee158",
    students: 5600
  },
  {
    name: "David Chen",
    expertise: "Data Science",
    image: "photo-1581092795360-fd1ca04f0952",
    students: 4800
  }
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCategoryClick = (category: string) => {
    toast({
      title: "Category Selected",
      description: `Exploring ${category} courses...`,
    });
  };

  const handleCourseClick = (courseTitle: string) => {
    toast({
      title: "Course Selected",
      description: `Opening ${courseTitle}...`,
    });
  };

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
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8 animate-fade-in">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((Category, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => handleCategoryClick(Category.name)}
              >
                <Category.icon className="h-6 w-6 mb-2" />
                <span className="text-sm">{Category.name}</span>
                <span className="text-xs text-gray-500">{Category.courses} courses</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8 animate-fade-in">
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
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => handleCourseClick(course.title)}
              >
                <div className="flex space-x-4">
                  <img
                    src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=200`}
                    alt={course.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">by {course.instructor}</p>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm text-yellow-500">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        {course.rating}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    <p className="text-sm text-primary mt-1">{course.students.toLocaleString()} students</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 animate-fade-in">
          <h2 className="text-lg font-semibold mb-4">Popular Instructors</h2>
          <div className="grid grid-cols-2 gap-4">
            {popularInstructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <img
                  src={`https://images.unsplash.com/${instructor.image}?auto=format&fit=crop&w=150`}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                />
                <h3 className="text-center font-semibold text-sm">{instructor.name}</h3>
                <p className="text-center text-xs text-gray-500">{instructor.expertise}</p>
                <p className="text-center text-xs text-primary mt-1">
                  {instructor.students.toLocaleString()} students
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;