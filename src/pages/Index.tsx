import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    
    if (!hasSeenOnboarding) {
      navigate("/onboarding");
    } else {
      // Check if user is logged in
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      
      if (isLoggedIn) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
