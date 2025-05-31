
import { 
  Activity, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Globe,
  Brain,
  Users,
  Zap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Activity className="h-10 w-10 text-softery-600" />,
    title: "Diagnóstico digital",
    description: "Avaliação dos processos para identificar oportunidades.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Brain className="h-10 w-10 text-softery-600" />,
    title: "IA para Nutrição",
    description: "Soluções inteligentes para análise nutricional.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Calendar className="h-10 w-10 text-softery-600" />,
    title: "Gestão integrada",
    description: "CRM, calendário e relatórios em uma plataforma.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Users className="h-10 w-10 text-softery-600" />,
    title: "Gestão de pacientes",
    description: "Automação do acompanhamento nutricional.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-softery-600" />,
    title: "Chatbot inteligente",
    description: "Atendimento automático para consultas.",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Zap className="h-10 w-10 text-softery-600" />,
    title: "Automação de processos",
    description: "Workflows inteligentes para sua clínica.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que <span className="text-softery-600">entregamos</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Soluções para otimizar sua clínica de nutrição e focar no que importa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-softery-600 hover:bg-softery-700 text-white px-8 py-3">
            Agendar demonstração gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
