
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 backdrop-blur-sm bg-white/80 fixed top-0 z-50 border-b">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <div className="font-bold text-2xl text-softery-700">
            Softery<span className="text-tech-600">.</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-600 hover:text-softery-600 transition-colors">Serviços</a>
          <a href="#benefits" className="text-gray-600 hover:text-softery-600 transition-colors">Benefícios</a>
          <a href="#metrics" className="text-gray-600 hover:text-softery-600 transition-colors">Resultados</a>
          <Button className="bg-softery-600 hover:bg-softery-700">Agendar conversa</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 p-4 shadow-lg border-t">
          <div className="flex flex-col space-y-3">
            <a 
              href="#services" 
              className="text-gray-600 hover:text-softery-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#benefits" 
              className="text-gray-600 hover:text-softery-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#metrics" 
              className="text-gray-600 hover:text-softery-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resultados
            </a>
            <Button 
              className="mt-2 w-full bg-softery-600 hover:bg-softery-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar conversa
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
