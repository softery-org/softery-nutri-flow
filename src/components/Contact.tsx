
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CheckCircle, Clock, Award, User, Mail, Phone, Building, Users } from "lucide-react";

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
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      text: "Análise completa dos seus processos atuais"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      text: "Roadmap personalizado de implementação"
    },
    {
      icon: <Award className="h-6 w-6 text-amber-500" />,
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
              Descubra como a tecnologia pode transformar sua clínica de nutrição
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-softery-100 text-softery-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Análise personalizada em 24h
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Transforme sua clínica hoje mesmo
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-white rounded-full p-2 shadow-sm">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-softery-600" />
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
                      className="border-gray-200 focus:border-softery-500 focus:ring-softery-500 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-softery-600" />
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
                      className="border-gray-200 focus:border-softery-500 focus:ring-softery-500 h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-softery-600" />
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
                      className="border-gray-200 focus:border-softery-500 focus:ring-softery-500 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="clinic" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Building className="w-4 h-4 mr-2 text-softery-600" />
                      Nome da clínica
                    </label>
                    <Input
                      id="clinic"
                      name="clinic"
                      type="text"
                      placeholder="Nome da sua clínica"
                      value={formData.clinic}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-softery-500 focus:ring-softery-500 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="patients" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-4 h-4 mr-2 text-softery-600" />
                    Quantos pacientes você atende por mês?
                  </label>
                  <select
                    id="patients"
                    name="patients"
                    value={formData.patients}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-softery-500 focus:ring-softery-500 h-12"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="1-20">1-20 pacientes</option>
                    <option value="21-50">21-50 pacientes</option>
                    <option value="51-100">51-100 pacientes</option>
                    <option value="100+">Mais de 100 pacientes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenges" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <CheckCircle className="w-4 h-4 mr-2 text-softery-600" />
                    Principais desafios da sua clínica
                  </label>
                  <Textarea
                    id="challenges"
                    name="challenges"
                    placeholder="Ex: Dificuldade para organizar prontuários, perco muito tempo com agendamentos, preciso melhorar o acompanhamento dos pacientes..."
                    value={formData.challenges}
                    onChange={handleChange}
                    rows={4}
                    className="border-gray-200 focus:border-softery-500 focus:ring-softery-500"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
