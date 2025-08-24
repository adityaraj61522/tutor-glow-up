const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Revolutionizing Learning with AI
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            AI Tutor helps students learn from their own content (PDFs, notes, study material). 
            Using <span className="text-primary font-semibold">Retrieval Augmented Generation (RAG)</span>, 
            it prepares summaries, notes, and answers queries in real-time. 
            Integrated with <span className="text-secondary font-semibold">Whisper AI</span> for voice queries.
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