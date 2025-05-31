
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Sparkles, CheckCircle, Clock, Award } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    patients: "",
    challenges: ""
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
      challenges: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Análise completa dos seus processos atuais"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
      text: "Identificação de oportunidades de automação"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      text: "Roadmap personalizado de implementação"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      text: "Proposta comercial sem compromisso"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-softery-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Receba seu <span className="text-softery-600">diagnóstico gratuito</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubra como a tecnologia pode transformar sua clínica de nutrição em poucos minutos
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center bg-softery-100 text-softery-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Sparkles size={16} className="mr-2" />
                    Análise personalizada em 24h
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Transforme sua clínica hoje mesmo
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Dr(a). Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-softery-500 focus:ring-softery-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email profissional *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-softery-500 focus:ring-softery-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-softery-500 focus:ring-softery-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="clinic" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome da clínica
                      </label>
                      <Input
                        id="clinic"
                        name="clinic"
                        type="text"
                        placeholder="Nome da sua clínica"
                        value={formData.clinic}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-softery-500 focus:ring-softery-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="patients" className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantos pacientes você atende por mês?
                    </label>
                    <select
                      id="patients"
                      name="patients"
                      value={formData.patients}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-softery-500 focus:ring-softery-500"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="1-20">1-20 pacientes</option>
                      <option value="21-50">21-50 pacientes</option>
                      <option value="51-100">51-100 pacientes</option>
                      <option value="100+">Mais de 100 pacientes</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-semibold text-gray-700 mb-2">
                      Principais desafios da sua clínica
                    </label>
                    <Textarea
                      id="challenges"
                      name="challenges"
                      placeholder="Ex: Dificuldade para organizar prontuários, perco muito tempo com agendamentos, preciso melhorar o acompanhamento dos pacientes..."
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={4}
                      className="border-gray-300 focus:border-softery-500 focus:ring-softery-500"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-softery-600 hover:bg-softery-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Receber meu diagnóstico gratuito
                  </Button>
                </form>
                
                <div className="mt-6 text-sm text-gray-500 text-center">
                  <p>🔒 Seus dados estão seguros. Não enviamos spam.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-softery-500 to-softery-600 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-white text-2xl font-bold mb-8">
                    Seu diagnóstico incluirá:
                  </div>
                  <div className="space-y-6 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-white/20 rounded-full p-2">
                          {benefit.icon}
                        </div>
                        <span className="text-white text-lg">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                    <div className="text-white font-bold text-lg mb-2">
                      💡 Bônus Exclusivo
                    </div>
                    <div className="text-white/90">
                      Estratégias práticas para aumentar sua receita em 30% nos próximos 6 meses
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <img 
                      src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="Nutricionista com tecnologia" 
                      className="w-full h-32 object-cover rounded-lg mb-4 opacity-90" 
                    />
                    <div className="text-white font-semibold italic text-center">
                      "Automatizamos. Você foca no cuidado."
                    </div>
                  </div>
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
