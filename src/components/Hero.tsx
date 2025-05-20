
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-softery-100 text-softery-700 px-3 py-1 rounded-full text-sm font-medium">
              <Sparkles size={16} className="mr-1" /> Especialistas em nutrição
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block">Tecnologia que</span>
              <span className="block text-softery-600">transforma negócios</span>
              <span className="block">de Nutrição</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Automatizamos processos para aumentar a eficiência da sua clínica. Mais tempo para cuidar dos pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-softery-600 hover:bg-softery-700 py-6 px-8 text-lg">
                Agendar conversa gratuita
              </Button>
              <Button variant="outline" className="group py-6 border-softery-600 text-softery-600">
                Conhecer soluções
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-softery-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-tech-400/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Nutricionista com paciente" 
                className="rounded-lg shadow-xl mb-4"
              />
              <div className="bg-white p-6 rounded-xl shadow-lg border absolute -bottom-10 -right-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-softery-100 text-softery-600 h-10 w-10 flex items-center justify-center rounded-full">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="font-medium">+60% de eficiência</div>
                    <div className="text-sm text-gray-500">em tarefas diárias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
