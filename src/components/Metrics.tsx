
import { 
  Users, 
  Brain,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Retenção de pacientes",
    description: "Aumento na fidelização com automações inteligentes."
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "IA Nutricional",
    description: "Análises automatizadas para diagnósticos precisos."
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Eficiência operacional",
    description: "Processos automatizados para mais produtividade."
  }
];

const Metrics = () => {
  return (
    <section id="metrics" className="bg-gradient-to-br from-softery-600 to-tech-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua <span className="text-softery-200">clínica</span>
          </h2>
          <p className="text-softery-100 text-lg mb-6">
            Tecnologia focada no crescimento do seu negócio
          </p>
          <Button className="bg-white text-softery-600 hover:bg-gray-100">
            Começar transformação
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="bg-softery-500 h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {metric.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{metric.title}</h3>
              <p className="text-softery-100 text-center">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
