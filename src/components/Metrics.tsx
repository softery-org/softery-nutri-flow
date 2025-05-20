
import { 
  Users, 
  LineChart, 
  Calendar 
} from "lucide-react";

const metrics = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Clientes com recorrência",
    description: "Aumento de pacientes que retornam para consultas de acompanhamento e ajustes de plano alimentar."
  },
  {
    icon: <LineChart className="h-8 w-8 text-white" />,
    title: "CAC/LTV",
    description: "Melhore a relação entre custo de aquisição e valor vitalício do cliente com retenção aprimorada."
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Crescimento de atendimentos",
    description: "Amplie sua capacidade de atendimento com processos mais eficientes e organizados."
  }
];

const Metrics = () => {
  return (
    <section id="metrics" className="bg-gradient-to-br from-softery-600 to-tech-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Métricas que <span className="text-softery-200">importam</span>
          </h2>
          <p className="text-softery-100 text-lg">
            Acompanhe os indicadores certos para avaliar o crescimento real da sua clínica de nutrição
          </p>
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

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="text-3xl font-bold mb-2">+60%</div>
              <div className="text-softery-100">Aumento na taxa de retenção de pacientes</div>
            </div>
            <div className="md:col-span-1">
              <div className="text-3xl font-bold mb-2">-40%</div>
              <div className="text-softery-100">Redução em tarefas administrativas</div>
            </div>
            <div className="md:col-span-1">
              <div className="text-3xl font-bold mb-2">+25%</div>
              <div className="text-softery-100">Crescimento em faturamento médio</div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-softery-200">
            * Baseado em dados agregados dos nossos clientes nos últimos 12 meses
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
