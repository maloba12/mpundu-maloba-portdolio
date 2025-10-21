import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-scale-in">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="gradient-text">Mpundu Maloba</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Creative Developer & Designer crafting unique digital experiences
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button variant="glass" size="lg" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="https://github.com/maloba12" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full glass-card hover:border-primary/50 transition-all hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="www.linkedin.com/in/mpundu-maloba-186b26271" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full glass-card hover:border-primary/50 transition-all hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:mpundumaloba23@gmail.com"
             className="p-3 rounded-full glass-card hover:border-primary/50 transition-all hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
