import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;