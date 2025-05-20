
import { 
  Users, 
  LineChart, 
  Calendar,
  TrendingUp,
  ArrowUp,
  Clock
} from "lucide-react";

const metrics = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Clientes recorrentes",
    description: "Aumento de pacientes que retornam para consultas e ajustes."
  },
  {
    icon: <LineChart className="h-8 w-8 text-white" />,
    title: "CAC/LTV",
    description: "Melhor relação entre custo de aquisição e valor do cliente."
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Mais atendimentos",
    description: "Amplie sua capacidade com processos eficientes."
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
            Indicadores essenciais para o crescimento da sua clínica
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

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex gap-3 items-center">
              <div className="text-softery-200">
                <TrendingUp size={36} />
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">+60%</div>
                <div className="text-softery-100">Aumento na retenção de pacientes</div>
              </div>
            </div>
            <div className="md:col-span-1 flex gap-3 items-center">
              <div className="text-softery-200">
                <ArrowUp size={36} />
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">-40%</div>
                <div className="text-softery-100">Redução em tarefas administrativas</div>
              </div>
            </div>
            <div className="md:col-span-1 flex gap-3 items-center">
              <div className="text-softery-200">
                <Clock size={36} />
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">+25%</div>
                <div className="text-softery-100">Crescimento em faturamento</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Dashboard de nutrição" 
              className="rounded-lg max-h-64 object-cover opacity-80" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
