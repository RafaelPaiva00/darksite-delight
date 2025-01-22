import { TrendingUp, Users2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Aumento nas Vendas",
    description: "Aumente sua receita com automação de vendas e gestão de leads qualificados"
  },
  {
    icon: <Users2 className="h-8 w-8" />,
    title: "Gestão de Clientes",
    description: "Gerencie relacionamentos e acompanhe o histórico completo dos seus clientes"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Segurança Total",
    description: "Proteção completa para seus dados e informações de clientes em conformidade com a LGPD"
  }
];

export const Features = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher Zubi?
          </h2>
          <p className="text-muted-foreground">
            O CRM que impulsiona seu sucesso
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};