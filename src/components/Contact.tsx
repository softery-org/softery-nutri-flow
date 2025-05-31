
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    patients: "",
    challenges: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Diagnóstico enviado:", formData);
    
    toast({
      title: "Diagnóstico enviado!",
      description: "Entraremos em contato em até 24 horas.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      clinic: "",
      patients: "",
      challenges: "",
      budget: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Diagnóstico gratuito da sua clínica
              </h2>
              <p className="text-gray-600 mb-6">
                Preencha o formulário para receber uma análise personalizada.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="clinic" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome da clínica
                    </label>
                    <Input
                      id="clinic"
                      name="clinic"
                      type="text"
                      placeholder="Nome da sua clínica"
                      value={formData.clinic}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patients" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de pacientes/mês
                    </label>
                    <select
                      id="patients"
                      name="patients"
                      value={formData.patients}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md"
                    >
                      <option value="">Selecione</option>
                      <option value="1-20">1-20 pacientes</option>
                      <option value="21-50">21-50 pacientes</option>
                      <option value="51-100">51-100 pacientes</option>
                      <option value="100+">Mais de 100 pacientes</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Orçamento mensal para tecnologia
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md"
                    >
                      <option value="">Selecione</option>
                      <option value="500-1000">R$ 500 - R$ 1.000</option>
                      <option value="1000-2000">R$ 1.000 - R$ 2.000</option>
                      <option value="2000-5000">R$ 2.000 - R$ 5.000</option>
                      <option value="5000+">Acima de R$ 5.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-1">
                    Principais desafios da sua clínica
                  </label>
                  <Textarea
                    id="challenges"
                    name="challenges"
                    placeholder="Descreva os principais problemas que enfrenta no dia a dia..."
                    value={formData.challenges}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-softery-600 hover:bg-softery-700">
                  Receber diagnóstico gratuito
                </Button>
              </form>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>Ao enviar, você concorda em receber comunicações da Softery.</p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-br from-softery-500 to-tech-700 p-8 md:p-12 flex items-center">
              <div>
                <div className="text-white text-lg font-medium mb-6">
                  Seu diagnóstico incluirá:
                </div>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 flex-shrink-0 text-sm">1</span>
                    <span>Análise detalhada dos seus processos atuais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 flex-shrink-0 text-sm">2</span>
                    <span>Identificação de oportunidades de automação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 flex-shrink-0 text-sm">3</span>
                    <span>Roadmap personalizado de implementação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 flex-shrink-0 text-sm">4</span>
                    <span>Proposta comercial sem compromisso</span>
                  </li>
                </ul>
                <div className="mt-8 text-white font-medium italic">
                  "Automatizamos. Você foca no cuidado."
                </div>
                
                <div className="mt-6">
                  <Button className="bg-white text-softery-600 hover:bg-gray-100 w-full">
                    Agendar call de 15 minutos
                  </Button>
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
