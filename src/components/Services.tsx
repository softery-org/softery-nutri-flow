
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
    title: "Diagnóstico de maturidade digital",
    description: "Avaliação completa dos seus processos atuais para identificar oportunidades de melhoria com tecnologia.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-softery-600" />,
    title: "Implementação de soluções",
    description: "CRM especializado, calendário integrado, relatórios automáticos e chatbot personalizado para suas necessidades.",
  },
  {
    icon: <Globe className="h-10 w-10 text-softery-600" />,
    title: "Presença digital completa",
    description: "Integração com Google Meu Negócio e estratégias para fortalecer sua presença online e atrair mais pacientes.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-softery-600" />,
    title: "Suporte e treinamento contínuo",
    description: "Acompanhamento constante para garantir que você e sua equipe aproveitem ao máximo as soluções implementadas.",
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
            Soluções completas para automatizar e otimizar sua clínica de nutrição, permitindo que você foque no que realmente importa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
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
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Você sabia?</h3>
            <p className="text-lg mb-4">
              Nutricionistas que implementam soluções digitais podem economizar até 15 horas por semana em tarefas administrativas.
            </p>
            <div className="text-base text-tech-100 font-medium">
              Imagine o que você poderia fazer com esse tempo extra!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
