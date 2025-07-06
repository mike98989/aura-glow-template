import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, TrendingUp, Sparkles } from "lucide-react";

const onboardingScreens = [
  {
    id: 1,
    title: "Learn at Your Own Pace",
    description: "Access thousands of courses designed by industry experts whenever you want.",
    icon: BookOpen,
    color: "text-primary",
    bgGradient: "bg-gradient-to-br from-primary/20 to-primary-glow/10"
  },
  {
    id: 2,
    title: "Join a Global Community",
    description: "Connect with learners worldwide and grow together through shared knowledge.",
    icon: Users,
    color: "text-accent",
    bgGradient: "bg-gradient-to-br from-accent/20 to-primary/10"
  },
  {
    id: 3,
    title: "Earn Recognized Certificates",
    description: "Get industry-standard certificates that boost your career prospects.",
    icon: Award,
    color: "text-primary",
    bgGradient: "bg-gradient-to-br from-primary-glow/20 to-accent/10"
  },
  {
    id: 4,
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed analytics and insights.",
    icon: TrendingUp,
    color: "text-accent",
    bgGradient: "bg-gradient-to-br from-accent/20 to-primary-glow/10"
  }
];

export const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < onboardingScreens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onComplete();
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const goToScreen = (index: number) => {
    setCurrentScreen(index);
  };

  const currentData = onboardingScreens[currentScreen];
  const IconComponent = currentData.icon;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto border-primary/20 shadow-glow">
        <div className="p-8 text-center">
          {/* Icon with animated background */}
          <div className={`w-32 h-32 mx-auto mb-8 rounded-full ${currentData.bgGradient} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 animate-glow-pulse bg-gradient-purple opacity-20 rounded-full"></div>
            <IconComponent className={`w-16 h-16 ${currentData.color} relative z-10`} />
            <Sparkles className="absolute top-4 right-4 w-4 h-4 text-primary animate-pulse" />
          </div>

          {/* Content */}
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            {currentData.title}
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {currentData.description}
          </p>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {onboardingScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => goToScreen(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentScreen
                    ? "bg-primary scale-125 shadow-glow"
                    : "bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevScreen}
              disabled={currentScreen === 0}
              className="text-muted-foreground disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            <Button
              onClick={nextScreen}
              className="shadow-glow px-6"
              size="sm"
            >
              {currentScreen === onboardingScreens.length - 1 ? (
                "Get Started"
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>

          {/* Skip option */}
          <div className="mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onComplete}
              className="text-muted-foreground hover:text-primary"
            >
              Skip Introduction
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};