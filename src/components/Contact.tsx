
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the email to your backend
    console.log("Contact request submitted:", email);
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setEmail("");
  };

  return (
    <section className="bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para escalar sua clínica?
              </h2>
              <p className="text-gray-600 mb-6">
                Entre em contato com a Softery e transforme a forma como você gerencia seu negócio de nutrição.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Seu melhor email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nome@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-softery-600 hover:bg-softery-700">
                  Agendar uma conversa gratuita
                </Button>
              </form>
              
              <div className="mt-8 text-sm text-gray-500">
                <p>Ao enviar, você concorda em receber comunicações da Softery.</p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-br from-softery-500 to-tech-700 p-8 md:p-12 flex items-center">
              <div>
                <div className="text-white text-lg font-medium mb-4">
                  O que você pode esperar:
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-2 flex-shrink-0">1</span>
                    <span>Uma análise personalizada da sua situação atual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-2 flex-shrink-0">2</span>
                    <span>Sugestões de melhorias específicas para o seu caso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-2 flex-shrink-0">3</span>
                    <span>Um orçamento detalhado sem compromisso</span>
                  </li>
                </ul>
                <div className="mt-8 text-white font-medium italic">
                  "Automatizamos. Você foca no cuidado."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
