import { MessageCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { WHATSAPP_NUMBER } from "../data";

const EXPANSION_CARDS = [
  {
    id: 1,
    emoji: "\uD83C\uDFEA",
    title: "Franchise Growth",
    subtitle: "Scale your brand into Udaipur's high-footfall corridors.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 2,
    emoji: "\uD83C\uDF7D\uFE0F",
    title: "Restaurant Spaces",
    subtitle: "Prime F&B locations with kitchen-load infrastructure.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    id: 3,
    emoji: "\uD83C\uDFE8",
    title: "Hotel & Hospitality",
    subtitle: "Ready-to-operate hotel assets with existing clearances.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: 4,
    emoji: "\uD83D\uDCBC",
    title: "Office Expansion",
    subtitle: "Modern workspaces at Udaipur's key commercial nodes.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
] as const;

type ExpCard = (typeof EXPANSION_CARDS)[number];

function ExpansionCard({
  card,
  index,
  whatsappUrl,
}: {
  card: ExpCard;
  index: number;
  whatsappUrl: string;
}) {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group block h-72 sm:h-80"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
      data-ocid={`expansion.card.${index + 1}`}
    >
      {/* Background image with zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        style={{ backgroundImage: `url(${card.image})` }}
      />

      {/* 3-layer gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,17,17,0.15) 0%, rgba(17,17,17,0.5) 45%, rgba(17,17,17,0.92) 100%)",
        }}
      />

      {/* Gold inset glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: "0 0 36px rgba(199,166,106,0.18) inset",
          border: "1px solid rgba(199,166,106,0.45)",
        }}
      />

      {/* Card content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div
          className="text-3xl mb-3 transition-transform duration-300 group-hover:-translate-y-1"
          aria-hidden="true"
        >
          {card.emoji}
        </div>
        <h3 className="text-xl font-bold text-[#F7F7F5] font-display leading-tight mb-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
          {card.title}
        </h3>
        <p className="text-sm text-[#ECE9E2] opacity-80 leading-relaxed mb-4 transition-opacity duration-300 group-hover:opacity-100">
          {card.subtitle}
        </p>
        <div className="flex items-center gap-1.5 text-[#C7A66A] text-sm font-semibold font-display">
          <span>Explore Opportunities</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function ExpansionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi, I am looking to expand my business and want to discuss the right space in Udaipur.",
  )}`;

  return (
    <section
      id="expansion"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "#1B1B1B" }}
      data-ocid="expansion.section"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(199,166,106,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[#C7A66A] text-xs uppercase tracking-[0.25em] mb-3 font-display font-medium"
          >
            BUSINESS GROWTH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-4xl font-bold text-[#F7F7F5] font-display leading-tight"
          >
            Helping Businesses Expand Across Udaipur
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="text-[#ECE9E2] opacity-75 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            From franchise opportunities to commercial expansion — we connect
            businesses with the right spaces.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="mx-auto mt-5 h-0.5 w-16 origin-center"
            style={{ background: "#C7A66A" }}
            aria-hidden="true"
          />
        </div>

        {/* 2x2 grid (1-col on mobile) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          data-ocid="expansion.cards.grid"
        >
          {EXPANSION_CARDS.map((card, i) => (
            <ExpansionCard
              key={card.id}
              card={card}
              index={i}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-5"
          style={{
            background: "rgba(17,17,17,0.8)",
            border: "1px solid rgba(199,166,106,0.2)",
          }}
          data-ocid="expansion.banner"
        >
          <div className="text-center sm:text-left">
            <p className="text-[#F7F7F5] font-bold text-lg sm:text-xl font-display leading-snug">
              Ready to expand? Let&apos;s find the right space.
            </p>
            <p className="text-[#ECE9E2] opacity-65 text-sm mt-1">
              Get matched with curated expansion opportunities across Udaipur.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold font-display text-sm whitespace-nowrap flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "#25D366",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 6px 24px rgba(37,211,102,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
            data-ocid="expansion.whatsapp_button"
          >
            <MessageCircle className="w-4 h-4" />
            Start on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
