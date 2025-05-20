
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-2xl text-white mb-4">
              Softery<span className="text-softery-500">.</span>
            </div>
            <p className="mb-4 text-gray-400">
              Automatizamos processos para nutricionistas focarem no essencial: seus pacientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Implementação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Treinamento</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Softery. Todos os direitos reservados.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Termos</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Privacidade</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
