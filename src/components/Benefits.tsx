
import { 
  Clock, 
  TrendingUp, 
  UserCheck, 
  Zap, 
  BarChart,
  FileText,
  Users,
  Settings
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
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

        <div className="mt-16 bg-softery-50 border border-softery-200 p-6 rounded-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center text-softery-800">
              Feito para você, nutricionista
            </h3>
            <p className="text-lg text-center mb-6">
              Ecossistema pensado para sua rotina diária
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <Clock className="h-6 w-6 text-softery-600 mx-auto mb-2" />
                <div className="text-softery-600 font-semibold mb-1">Lembretes</div>
                <div className="text-sm text-gray-500">automáticos</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <FileText className="h-6 w-6 text-softery-600 mx-auto mb-2" />
                <div className="text-softery-600 font-semibold mb-1">Formulários</div>
                <div className="text-sm text-gray-500">pré-consulta</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <Users className="h-6 w-6 text-softery-600 mx-auto mb-2" />
                <div className="text-softery-600 font-semibold mb-1">Acompanhamento</div>
                <div className="text-sm text-gray-500">recorrente</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <Settings className="h-6 w-6 text-softery-600 mx-auto mb-2" />
                <div className="text-softery-600 font-semibold mb-1">Gestão</div>
                <div className="text-sm text-gray-500">centralizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
