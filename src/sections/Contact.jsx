import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send, Loader } from "lucide-react";
import { Button } from '@/components/Button'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/data/translations.js";

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({type: null, message: ""});

  const contactInfo = [
    {
      icon: Mail,
      label: t.form.email,
      value: "jsga008@gmail.com",
      href: "mailto:jsga008@gmail.com",
    },
    {
      icon: Phone,
      label: language === 'en' ? "Phone" : "Teléfono",
      value: "+57 3225374589",
      href: "tel:+573225374589",
    },
    {
      icon: MapPin,
      label: language === 'en' ? "Location" : "Ubicación",
      value: t.info.location,
      href: "#",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({type:null, message:""});

    try {
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing environment variables");
      }

      await emailjs.send(
        serviceId, 
        templateId, 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }, 
        publicKey
      );

      setSubmitStatus({type: "success", message: t.status.success});
      setFormData({name: "", email: "", message: ""});
    } catch (err) {
      console.error('Error sending email: ', err);
      setSubmitStatus({type: "error", message: t.status.error});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />        
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.title}{" "}
            <span className="font-serif italic font-normal text-white">
              {t.titleAccent}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form Side */}
          <div className="glass-strong p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.form.name}
                </label>
                <input 
                  id="name" type="text" required
                  placeholder={t.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 transition-all" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.form.email}
                </label>
                <input 
                  id="email" type="email" required
                  placeholder={t.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 transition-all" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.form.message}
                </label>
                <textarea 
                  id="message" rows="5" required
                  placeholder={t.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 transition-all resize-none" 
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    {t.form.sending} <Loader size={18} className="animate-spin" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {t.form.send} <Send size={18} />
                  </span>
                )}
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl animate-in fade-in slide-in-from-top-2 ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}>
                  {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">{t.info.title}</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="font-medium">{t.info.availabilityTitle}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.info.availabilityDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}