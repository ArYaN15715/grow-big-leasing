import {
  Building2,
  type LucideProps,
  Network,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { WHY_ITEMS } from "../data";
import type { WhyItem } from "../types";

type LucideComponent = React.ComponentType<LucideProps>;

const ICON_MAP: Record<string, LucideComponent> = {
  Zap,
  Network,
  Building2,
  ShieldCheck,
  TrendingUp,
};

function WhyCard({ item, index }: { item: WhyItem; index: number }) {
  const Icon = ICON_MAP[item.icon] ?? Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      data-ocid={`why.item.${index + 1}`}
      className="group relative cursor-default rounded-xl p-6 overflow-hidden
        transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#1B1B1B",
        border: "1px solid rgba(199,166,106,0.12)",
        borderLeftWidth: "4px",
        borderLeftColor: "#C7A66A",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "#222";
        el.style.boxShadow =
          "0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(199,166,106,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "#1B1B1B";
        el.style.boxShadow = "none";
      }}
    >
      {/* Gold left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: "4px",
          background:
            "linear-gradient(180deg, #C7A66A 0%, rgba(199,166,106,0.5) 100%)",
          boxShadow: "0 0 10px rgba(199,166,106,0.4)",
        }}
      />
      {/* Emoji */}
      <div className="text-3xl mb-3 leading-none">{item.emoji}</div>
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4
          transition-colors duration-300 group-hover:bg-[rgba(199,166,106,0.2)]"
        style={{ background: "rgba(199,166,106,0.1)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#C7A66A" }} />
      </div>
      <h3
        className="text-lg font-bold mb-2 font-display"
        style={{ color: "#F7F7F5" }}
      >
        {item.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(236,233,226,0.72)" }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      data-ocid="why.section"
      className="py-24 px-4"
      style={{ background: "#111111" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-3"
            style={{ color: "#C7A66A" }}
          >
            OUR ADVANTAGE
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold font-display mb-3"
            style={{ color: "#F7F7F5" }}
          >
            Why Choose Us
          </h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: "48px",
              height: "3px",
              background:
                "linear-gradient(90deg, #C7A66A 0%, rgba(199,166,106,0.3) 100%)",
              borderRadius: "2px",
            }}
          />
          <p
            className="text-sm sm:text-base max-w-lg mx-auto"
            style={{ color: "rgba(236,233,226,0.7)" }}
          >
            We&apos;re not just brokers &mdash; we&apos;re a commercial growth
            network built on speed, trust, and deep local knowledge.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {WHY_ITEMS.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
