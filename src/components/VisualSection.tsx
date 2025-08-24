import aiTutorHero from "@/assets/ai-tutor-hero.jpg";

const VisualSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              The Future of Learning is Here
            </h2>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              Experience personalized education like never before. Our AI tutor adapts to your learning style, 
              processes your study materials, and provides instant, contextual answers to help you master any subject.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Whether you're studying for exams, researching complex topics, or just curious about the world, 
              AI Tutor transforms the way you learn and retain knowledge.
            </p>
          </div>
          
          <div className="animate-fade-in lg:order-first">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src={aiTutorHero}
                alt="AI Tutor helping a student with futuristic holographic interface"
                className="relative rounded-xl shadow-2xl w-full h-auto border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;