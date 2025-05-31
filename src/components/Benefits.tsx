
import { 
  Clock, 
  TrendingUp, 
  UserCheck, 
  Zap, 
  BarChart,
  FileText,
  Users,
  Settings,
  Calendar,
  MessageSquare
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
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Nutricionista trabalhando" 
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
              Ecossistema pensado para sua rotina diária
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-softery-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">Lembretes</div>
                <div className="text-sm text-softery-600">automáticos</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">Formulários</div>
                <div className="text-sm text-softery-600">pré-consulta</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">Acompanhamento</div>
                <div className="text-sm text-softery-600">recorrente</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softery-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div className="text-softery-800 font-semibold mb-1">Gestão</div>
                <div className="text-sm text-softery-600">centralizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
