
import { 
  Clock, 
  TrendingUp, 
  UserCheck, 
  Zap, 
  BarChart 
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-softery-600" />,
    title: "Redução de tarefas manuais",
    description: "Automatize processos repetitivos como confirmação de consultas, envio de documentos e lembretes de follow-up."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-softery-600" />,
    title: "Melhor visibilidade financeira",
    description: "Tenha relatórios claros sobre faturamento, recorrência e principais fontes de receita da sua clínica."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-softery-600" />,
    title: "Fidelização de clientes",
    description: "Automações de pós-venda e acompanhamento contínuo que fortalecem o relacionamento com seus pacientes."
  },
  {
    icon: <Zap className="h-8 w-8 text-softery-600" />,
    title: "Mais agilidade no atendimento",
    description: "Chatbots e formulários digitais que agilizam o processo de triagem e coleta de informações iniciais."
  },
  {
    icon: <BarChart className="h-8 w-8 text-softery-600" />,
    title: "Organização e escalabilidade",
    description: "CRM especializado e relatórios de performance para crescer seu negócio de forma organizada e sustentável."
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
            Transformamos o dia a dia da sua clínica para que você possa focar no que realmente importa: o cuidado com seus pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="h-12 w-12 bg-softery-100 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-softery-50 border border-softery-200 p-6 rounded-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center text-softery-800">
              Feito para você, nutricionista
            </h3>
            <p className="text-lg text-center mb-6">
              Criamos um ecossistema pensado para a sua rotina
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <div className="text-softery-600 font-semibold mb-1">Lembretes</div>
                <div className="text-sm text-gray-500">automáticos</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <div className="text-softery-600 font-semibold mb-1">Formulários</div>
                <div className="text-sm text-gray-500">pré-consulta</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <div className="text-softery-600 font-semibold mb-1">Acompanhamento</div>
                <div className="text-sm text-gray-500">por recorrência</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-softery-100">
                <div className="text-softery-600 font-semibold mb-1">Gestão</div>
                <div className="text-sm text-gray-500">centralizada</div>
              </div>
            </div>
            <div className="text-center mt-6 text-softery-700 font-medium">
              Tudo isso em um só lugar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
