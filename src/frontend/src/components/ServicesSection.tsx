import * as LucideIcons from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../data";
import type { Service } from "../types";

function ServiceIcon({
  name,
  className,
}: { name: string; className?: string }) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[name];
  if (!Icon) return <LucideIcons.Building2 className={className} />;
  return <Icon className={className} />;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const id = setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
          return () => clearTimeout(id);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      data-ocid={`services.item.${index + 1}`}
      className="group relative h-64 overflow-hidden rounded-xl cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow =
          "0 0 0 1px rgba(199,166,106,0.5), 0 8px 32px rgba(199,166,106,0.15)";
        el.style.borderColor = "rgba(199,166,106,0.5)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(255,255,255,0.05)";
      }}
    >
      {/* Background image with zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-out group-hover:scale-110"
        style={{ backgroundImage: `url('${service.imageUrl}')` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <ServiceIcon
          name={service.icon}
          className="w-6 h-6 text-[#C7A66A] mb-2"
        />
        <h3 className="text-lg font-bold text-[#F7F7F5] font-display leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-[#ECE9E2] mt-1 line-clamp-2 leading-snug">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#1B1B1B] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C7A66A] text-xs uppercase tracking-widest mb-3 font-display">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F7F5] font-display leading-tight">
            Commercial Spaces for Every Business Need
          </h2>
          <p className="text-[#ECE9E2] mt-3 max-w-2xl mx-auto text-base leading-relaxed">
            From restaurants to warehouses — we connect businesses with spaces
            that drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
