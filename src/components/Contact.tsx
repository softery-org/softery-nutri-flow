"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    Clock,
    Award,
    User,
    Mail,
    Phone,
    Building,
    Users,
} from "lucide-react";

const Contact = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        clinic: "",
        patients: "",
        challenges: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const content = `📬 **Novo diagnóstico gratuito solicitado!**\n
👤 Nome: ${formData.name}
✉️ Email: ${formData.email}
📞 WhatsApp: ${formData.phone}
🏢 Clínica: ${formData.clinic || "Não informado"}
👥 Pacientes/mês: ${formData.patients || "Não informado"}
📌 Desafios: ${formData.challenges || "Não informado"}`;

        try {
            await fetch(
                "https://discord.com/api/webhooks/1379997216239783966/N6h-CO1zQ36nV_sTA5W9ldpgCN_08cExtUdfFUk7KI9i--m3I-cznShFb3TNwo-eVXIs",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content }),
                }
            );

            toast({
                title: "Diagnóstico enviado!",
                description: "Entraremos em contato em até 24 horas.",
            });

            setEnviado(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                clinic: "",
                patients: "",
                challenges: "",
            });
        } catch (err) {
            toast({
                title: "Erro ao enviar",
                description: "Tente novamente em instantes.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const benefits = [
        {
            icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
            text: "Análise completa dos seus processos atuais",
        },
        {
            icon: <Clock className="h-5 w-5 text-blue-600" />,
            text: "Roadmap personalizado de implementação",
        },
        {
            icon: <Award className="h-5 w-5 text-amber-600" />,
            text: "Proposta comercial sem compromisso",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-softery-50">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Receba seu{" "}
                            <span className="text-softery-600">
                                diagnóstico gratuito
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Descubra como a tecnologia pode transformar sua
                            clínica de nutrição
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
                        <div className="p-8 lg:p-12">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center bg-softery-100 text-softery-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Clock className="w-4 h-4 mr-2" />
                                    Análise personalizada em 24h
                                </div>

                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl"
                                        >
                                            <div className="bg-white rounded-full p-2 shadow-sm">
                                                {benefit.icon}
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium">
                                                {benefit.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="min-h-[620px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {enviado ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -16 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-center py-16 w-full"
                                        >
                                            <CheckCircle className="mx-auto text-green-600 w-12 h-12 mb-4" />
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                Diagnóstico enviado!
                                            </h3>
                                            <p className="text-gray-600 mt-2">
                                                Entraremos em contato com você
                                                em até 24 horas.
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="mt-6"
                                                onClick={() =>
                                                    setEnviado(false)
                                                }
                                            >
                                                Enviar outro diagnóstico
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -16 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-6 w-full"
                                        >
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="flex items-center text-sm font-semibold text-gray-800 mb-2"
                                                    >
                                                        <User className="w-4 h-4 mr-2 text-gray-700" />
                                                        Nome completo *
                                                    </label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        placeholder="Dr(a). Seu nome"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="flex items-center text-sm font-semibold text-gray-800 mb-2"
                                                    >
                                                        <Mail className="w-4 h-4 mr-2 text-gray-700" />
                                                        Email profissional *
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="seu@email.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="phone"
                                                        className="flex items-center text-sm font-semibold text-gray-800 mb-2"
                                                    >
                                                        <Phone className="w-4 h-4 mr-2 text-gray-700" />
                                                        WhatsApp *
                                                    </label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="(11) 99999-9999"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="clinic"
                                                        className="flex items-center text-sm font-semibold text-gray-800 mb-2"
                                                    >
                                                        <Building className="w-4 h-4 mr-2 text-gray-700" />
                                                        Nome da clínica
                                                    </label>
                                                    <Input
                                                        id="clinic"
                                                        name="clinic"
                                                        type="text"
                                                        placeholder="Nome da sua clínica"
                                                        value={formData.clinic}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="patients"
                                                    className="flex items-center text-sm font-semibold text-gray-800 mb-2"
                                                >
                                                    <Users className="w-4 h-4 mr-2 text-gray-700" />
                                                    Quantos pacientes você
                                                    atende por mês?
                                                </label>
                                                <select
                                                    id="patients"
                                                    name="patients"
                                                    value={formData.patients}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-softery-500 focus:ring-softery-500 h-12 text-gray-900"
                                                >
                                                    <option value="">
                                                        Selecione uma opção
                                                    </option>
                                                    <option value="1-20">
                                                        1-20 pacientes
                                                    </option>
                                                    <option value="21-50">
                                                        21-50 pacientes
                                                    </option>
                                                    <option value="51-100">
                                                        51-100 pacientes
                                                    </option>
                                                    <option value="100+">
                                                        Mais de 100 pacientes
                                                    </option>
                                                </select>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="challenges"
                                                    className="flex items-center text-sm font-semibold text-gray-800 mb-2"
                                                >
                                                    <CheckCircle className="w-4 h-4 mr-2 text-gray-700" />
                                                    Principais desafios da sua
                                                    clínica
                                                </label>
                                                <Textarea
                                                    id="challenges"
                                                    name="challenges"
                                                    placeholder="Ex: organização de prontuários, agendamento, acompanhamento..."
                                                    value={formData.challenges}
                                                    onChange={handleChange}
                                                    rows={4}
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-softery-600 hover:bg-softery-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                            >
                                                {loading
                                                    ? "Enviando..."
                                                    : "Receber meu diagnóstico gratuito"}
                                            </Button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-6 text-sm text-gray-500 text-center">
                                <p>
                                    🔒 Seus dados estão seguros. Não enviamos
                                    spam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
