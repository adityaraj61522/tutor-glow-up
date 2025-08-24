import { BookOpen, Bot, Mic, FileText } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "PDF & Notes Analysis",
    description: "Extracts knowledge from PDFs and notes with intelligent content understanding",
    color: "text-primary"
  },
  {
    icon: Bot,
    title: "AI Tutor with RAG",
    description: "Advanced question answering using Retrieval Augmented Generation technology",
    color: "text-secondary"
  },
  {
    icon: Mic,
    title: "Voice Queries",
    description: "Natural voice interactions powered by cutting-edge Whisper AI technology",
    color: "text-accent"
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description: "Automated note generation and intelligent content summarization",
    color: "text-primary"
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          Powerful Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;