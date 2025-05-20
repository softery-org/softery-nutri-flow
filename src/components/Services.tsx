
import { 
  Activity, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Globe 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Activity className="h-10 w-10 text-softery-600" />,
    title: "Diagnóstico digital",
    description: "Avaliação dos processos para identificar oportunidades de melhoria.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Calendar className="h-10 w-10 text-softery-600" />,
    title: "Soluções integradas",
    description: "CRM, calendário, relatórios e chatbot para suas necessidades.",
    image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <Globe className="h-10 w-10 text-softery-600" />,
    title: "Presença digital",
    description: "Integração com Google Meu Negócio e estratégias online.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-softery-600" />,
    title: "Suporte contínuo",
    description: "Acompanhamento para aproveitar ao máximo as soluções.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
          <p className="text-gray-600 text-lg">
            Soluções para otimizar sua clínica de nutrição e focar no que importa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="mt-12 p-6 bg-gradient-to-br from-tech-600 to-tech-800 rounded-lg text-white text-center">
          <div className="max-w-3xl mx-auto flex items-center justify-center gap-6">
            <div className="text-5xl font-bold">15h</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-1">Economia semanal</h3>
              <p className="text-tech-100">
                Nutricionistas com soluções digitais economizam até 15 horas por semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
