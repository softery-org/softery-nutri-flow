
import { 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  FileText,
  Utensils,
  Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Agenda Inteligente",
    description: "Sistema completo de agendamentos com lembretes automáticos e sincronização com Google Calendar.",
    color: "bg-green-500"
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Anamnese Digital",
    description: "Formulários personalizados e interativos que se adaptam ao seu método de trabalho.",
    color: "bg-blue-500"
  },
  {
    icon: <Utensils className="h-8 w-8 text-white" />,
    title: "Planos Alimentares",
    description: "Criação rápida de cardápios com banco de alimentos atualizado e interface intuitiva.",
    color: "bg-orange-500"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Evolução em Gráficos",
    description: "Visualização clara do progresso dos pacientes com gráficos automáticos de peso e medidas.",
    color: "bg-purple-500"
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Documentos Personalizados",
    description: "Geração automática de receitas e relatórios em PDF com sua marca profissional.",
    color: "bg-red-500"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: "Comunicação Integrada",
    description: "Chat direto com pacientes e sistema de notificações automáticas para consultas.",
    color: "bg-indigo-500"
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
            <Card key={index} className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden h-full">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-softery-600 hover:bg-softery-700 text-white px-8 py-3 rounded-xl">
            Agendar demonstração gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
