import { Target, Users, TrendingUp, Settings, Megaphone, HeadphonesIcon } from "lucide-react";
const services = [{
  icon: Target,
  title: "Strategic Planning",
  description: "Complete business strategy and location analysis for maximum success."
}, {
  icon: Users,
  title: "Training",
  description: "Comprehensive training for you and your staff on operations and recipes."
}, {
  icon: Megaphone,
  title: "Marketing Support",
  description: "Full marketing support including branding, social media, and promotions."
}, 
{
  icon: Settings,
  title: "Franchise Setup",
  description: "End-to-end setup assistance from equipment to interiors."
},
 {
  icon: TrendingUp,
  title: "Technology Systems",
  description: "Modern POS and inventory management systems included."
}, {
  icon: HeadphonesIcon,
  title: "Ongoing Support",
  description: "24/7 operational support and regular quality audits."
}];
export function AboutSection() {
  return <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            INDIA'S <span className="text-gradient-gold">PREMIUM</span> PIZZA BRAND
          </h2>
          <p className="text-muted-foreground text-lg">
            Chicago Delights is a fast-growing pizza & grill brand established in 2015 with 50+ outlets across India. 
            We offer a premium pizza experience with a high-profit franchise model designed for aspiring entrepreneurs.
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="gradient-card p-8 rounded-xl border border-border">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4">OUR USP</h3>
            <p className="text-muted-foreground">
              Premium pizzas crafted with authentic recipes + a high-profit franchise model 
              that ensures your success from day one. We combine quality with profitability.
            </p>
          </div>

          <div className="gradient-card p-8 rounded-xl border border-border">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4"> franchise partner</h3>
            <p className="text-muted-foreground">
              Help entrepreneurs build successful food businesses with full support, training, 
              and proven systems. Your success is our success.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl text-foreground">what we  provide to SERVICES<span className="text-primary">SERVICES</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <div key={service.title} className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-display text-xl text-foreground mb-2">{service.title}</h4>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}