
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-softery-100 text-softery-700 px-3 py-1 rounded-full text-sm font-medium">
              Consultoria especializada em nutrição
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block">Tecnologia que</span>
              <span className="block text-softery-600">transforma negócios</span>
              <span className="block">de Nutrição</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Automatizamos processos internos para aumentar a eficiência da sua clínica, melhorando a experiência dos clientes e dando mais tempo para você cuidar dos seus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-softery-600 hover:bg-softery-700 py-6 px-8 text-lg">
                Agendar uma conversa gratuita
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
            <div className="relative bg-white p-6 rounded-xl shadow-lg border">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1 bg-gray-100 h-16 rounded-lg animate-pulse"></div>
                <div className="col-span-2 space-y-2">
                  <div className="bg-gray-100 h-4 w-2/3 rounded animate-pulse"></div>
                  <div className="bg-gray-100 h-4 w-full rounded animate-pulse"></div>
                  <div className="bg-gray-100 h-4 w-1/2 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-softery-100 text-softery-600 h-8 w-8 flex items-center justify-center rounded-full">✓</div>
                  <div className="bg-gray-100 h-4 w-3/4 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-softery-100 text-softery-600 h-8 w-8 flex items-center justify-center rounded-full">✓</div>
                  <div className="bg-gray-100 h-4 w-2/3 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-softery-100 text-softery-600 h-8 w-8 flex items-center justify-center rounded-full">✓</div>
                  <div className="bg-gray-100 h-4 w-3/4 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="bg-softery-500 text-white p-3 rounded-lg text-center">
                Dashboard de Nutrição
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
