
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Brain className="h-10 w-10 text-softery-600" />,
    title: "IA para Nutrição",
    description: "Soluções inteligentes para análise nutricional.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Calendar className="h-10 w-10 text-softery-600" />,
    title: "Gestão integrada",
    description: "CRM, calendário e relatórios em uma plataforma.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Users className="h-10 w-10 text-softery-600" />,
    title: "Gestão de pacientes",
    description: "Automação do acompanhamento nutricional.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
          <Button className="bg-softery-600 hover:bg-softery-700">
            Ver todas as soluções
          </Button>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {services.map((service, index) => (
              <Card key={index} className="flex-shrink-0 w-80 border-border hover:shadow-md transition-shadow overflow-hidden">
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
                <CardFooter>
                  <Button variant="outline" className="w-full text-softery-600 border-softery-600">
                    Saiba mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-tech-600 hover:bg-tech-700 text-white px-8 py-3">
            Agendar demonstração gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
