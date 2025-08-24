import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when AI Tutor launches.",
      });
      setEmail("");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <Badge 
          variant="outline" 
          className="mb-8 px-6 py-2 text-lg font-semibold border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 animate-glow-pulse"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Coming Soon
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
          AI Tutor
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Your Personalized Learning Companion
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Learn smarter with AI-powered notes, voice queries, and instant answers.
        </p>
        
        <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 bg-input/50 border-border/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <Button 
            type="submit"
            size="lg"
            className="h-12 px-8 bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-neon hover:shadow-neon-secondary font-semibold"
          >
            Notify Me
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground">
          Be the first to experience the future of personalized learning
        </p>
      </div>
    </section>
  );
};

export default HeroSection;