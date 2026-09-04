import Image from "next/image";
import { Users, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { WHATSAPP_SUBHAM } from "@/lib/constants";

export default function CoupleAdvantage() {
  const advantages = [
    {
      icon: HeartHandshake,
      title: "Unmatched Comfort for Both Partners",
      desc: "Expectant mothers can discuss sensitive hormonal or gynaecological concerns with Dr. Ruchika, while partners gain clear, relatable guidance and support from Dr. Subham.",
    },
    {
      icon: Users,
      title: "Collaborative Clinical Synergy",
      desc: "Two specialized minds collaborating seamlessly under one philosophy. From antenatal protocols to high-risk delivery decisions, your care is double-reviewed.",
    },
    {
      icon: ShieldCheck,
      title: "Medical & Advanced Surgical Balance",
      desc: "A holistic spectrum combining gentle, non-invasive therapies and fertility protocols with state-of-the-art laparoscopic surgical precision when needed.",
    },
    {
      icon: Sparkles,
      title: "Seamless Joint Consultations",
      desc: "For complex cases, high-risk pregnancies, or fertility journeys, couples have the unique option to consult both doctors together for aligned treatment plans.",
    },
  ];

  return (
    <section id="couple-advantage" className="py-20 bg-gradient-to-b from-white via-[#FFF8F9] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-[#FFCCD6] max-w-sm w-full text-center">
              
              <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-[#FFF5F7] to-[#E3F4FC] rounded-2xl p-4 flex items-center justify-center mb-6 shadow-inner">
                <Image
                  src="/images/brand/couple-art.png"
                  alt="Couple Doctor Advantage"
                  width={90}
                  height={120}
                  className="object-contain"
                />
              </div>

              <span className="badge-primary mb-2">Exclusive Concept</span>
              <h3 className="text-xl font-bold text-[#1A2229] mb-1">
                The Couple Doctor Advantage
              </h3>
              <p className="text-xs text-[#FB5A7C] font-semibold mb-4">
                &ldquo;A family caring for your family&rdquo;
              </p>

              <p className="text-xs text-[#475569] leading-relaxed mb-6">
                Siliguri&apos;s dedicated husband-and-wife gynaecology and surgical team offering an empathetic, comprehensive environment where both mother and father feel heard and supported.
              </p>

              <a
                href={WHATSAPP_SUBHAM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-xs py-3 justify-center shadow-md"
              >
                Inquire About Joint Consultation
              </a>

            </div>
          </div>

          {/* Right Column: Key Advantages */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="badge-accent mb-2">Why Siliguri Families Choose Us</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
                Care That Understands You, Your Partner &amp; Your Baby
              </h2>
              <p className="text-sm sm:text-base text-[#475569] mt-3">
                Healthcare shouldn&apos;t feel cold, hurried, or stressful. We created our dual-specialist practice to combine warm bedside empathy with academic, surgical excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {advantages.map((adv) => {
                const IconComponent = adv.icon;
                return (
                  <div
                    key={adv.title}
                    className="p-4 rounded-2xl bg-white border border-[#F1E5E8] shadow-sm hover:shadow-md hover:border-[#FFCCD6] transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FFE9ED] text-[#FB5A7C] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1A2229] text-sm mb-1.5">{adv.title}</h4>
                    <p className="text-xs text-[#475569] leading-relaxed">{adv.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
