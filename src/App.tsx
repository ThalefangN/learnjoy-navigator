import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OnboardingSlides from "./components/OnboardingSlides";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import VerificationScreen from "./components/VerificationScreen";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/screens/SearchScreen";
import PastPapersScreen from "./components/screens/PastPapersScreen";
import AIChatScreen from "./components/screens/AIChatScreen";
import StartCourseScreen from "./components/screens/StartCourseScreen";
import TakeQuizScreen from "./components/screens/TakeQuizScreen";
import CoursesScreen from "./components/screens/CoursesScreen";
import ProfileScreen from "./components/screens/ProfileScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingSlides />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/verify" element={<VerificationScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/past-papers" element={<PastPapersScreen />} />
          <Route path="/ai-chat" element={<AIChatScreen />} />
          <Route path="/start-course" element={<StartCourseScreen />} />
          <Route path="/take-quiz" element={<TakeQuizScreen />} />
          <Route path="/courses" element={<CoursesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;