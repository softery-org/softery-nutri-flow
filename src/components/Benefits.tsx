
import { 
  Clock, 
  TrendingUp, 
  UserCheck, 
  Zap, 
  BarChart,
  Smartphone,
  Brain,
  Target,
  Shield
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-softery-600" />,
    title: "Redução de tarefas manuais",
    description: "Automatize confirmações, documentos e lembretes."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-softery-600" />,
    title: "Visibilidade financeira",
    description: "Relatórios de faturamento, recorrência e receita."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-softery-600" />,
    title: "Fidelização de clientes",
    description: "Automações de pós-venda e acompanhamento contínuo."
  },
  {
    icon: <Zap className="h-8 w-8 text-softery-600" />,
    title: "Agilidade no atendimento",
    description: "Chatbots e formulários digitais para triagem rápida."
  },
  {
    icon: <BarChart className="h-8 w-8 text-softery-600" />,
    title: "Organização e escalabilidade",
    description: "CRM e relatórios para crescer seu negócio."
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios para seu <span className="text-softery-600">negócio</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Transformamos sua clínica para focar no cuidado com seus pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Alimentos saudáveis organizados" 
              className="rounded-lg shadow-xl max-h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-12 w-12 bg-softery-100 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-softery-50 to-softery-100 p-8 rounded-2xl border border-softery-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center text-softery-800">
              Feito para você, nutricionista
            </h3>
            <p className="text-lg text-center mb-8 text-softery-700">
              Tecnologia pensada para sua rotina profissional
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-all hover:scale-105 duration-300">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">App Mobile</div>
                <div className="text-sm text-softery-600">para pacientes</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-all hover:scale-105 duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">IA Integrada</div>
                <div className="text-sm text-softery-600">sugestões inteligentes</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-all hover:scale-105 duration-300">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">Metas</div>
                <div className="text-sm text-softery-600">acompanhamento</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-all hover:scale-105 duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">Segurança</div>
                <div className="text-sm text-softery-600">dados protegidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
