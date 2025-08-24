const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Revolutionizing Learning with AI
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Transform your study materials into an intelligent learning companion! Upload PDFs, notes, and documents 
            to create your personalized AI tutor. Powered by advanced <span className="text-primary font-semibold">RAG technology</span>, 
            it instantly generates summaries, answers complex questions, and provides real-time insights. 
            Simply speak your questions with <span className="text-secondary font-semibold">Whisper AI</span> voice recognition—learning has never been this effortless!
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;