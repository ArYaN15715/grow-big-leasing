import {
  CheckCircle2,
  ListChecks,
  type LucideProps,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PROCESS_STEPS, WHATSAPP_NUMBER } from "../data";
import type { ProcessStep } from "../types";

type LucideComponent = React.ComponentType<LucideProps>;

const _ICON_MAP: Record<string, LucideComponent> = {
  MessageSquare,
  ListChecks,
  MapPin,
  CheckCircle2,
};

function DesktopStep({
  step,
  index,
  total,
}: {
  step: ProcessStep;
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.14,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      data-ocid={`process.item.${index + 1}`}
      className="relative flex flex-col items-center text-center px-4 flex-1"
    >
      {/* Dashed connector line */}
      {!isLast && (
        <div
          className="absolute top-8 z-0"
          style={{
            left: "calc(50% + 32px)",
            right: 0,
            height: "1px",
            borderTop: "2px dashed rgba(199,166,106,0.35)",
          }}
        />
      )}
      {/* Number circle */}
      <div className="relative z-10 mb-5">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "#111111",
            border: "2px solid #C7A66A",
            boxShadow:
              "0 0 0 8px rgba(199,166,106,0.06), 0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <span
            className="font-display text-xl font-bold"
            style={{ color: "#C7A66A" }}
          >
            {step.step}
          </span>
        </div>
      </div>
      {/* Emoji icon */}
      <div className="text-4xl mb-3 leading-none">{step.emoji}</div>
      {/* Title */}
      <h3
        className="text-base font-bold mb-2 leading-tight font-display"
        style={{ color: "#F7F7F5" }}
      >
        {step.title}
      </h3>
      {/* Description */}
      <p
        className="text-sm leading-relaxed max-w-[160px]"
        style={{ color: "rgba(236,233,226,0.75)" }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}

function MobileStep({ step, index }: { step: ProcessStep; index: number }) {
  const isLast = index === PROCESS_STEPS.length - 1;
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      data-ocid={`process.mobile.item.${index + 1}`}
      className="flex gap-5 items-start"
    >
      <div
        className="flex flex-col items-center flex-shrink-0"
        style={{ minHeight: isLast ? "auto" : "120px" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "#111111",
            border: "2px solid #C7A66A",
            boxShadow: "0 0 0 6px rgba(199,166,106,0.06)",
          }}
        >
          <span
            className="font-display text-lg font-bold leading-none"
            style={{ color: "#C7A66A" }}
          >
            {step.step}
          </span>
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              borderLeft: "2px dashed rgba(199,166,106,0.3)",
              minHeight: "56px",
            }}
          />
        )}
      </div>
      <div className="pb-8 pt-1">
        <div className="text-3xl mb-2 leading-none">{step.emoji}</div>
        <h3
          className="text-base font-bold mb-1.5 font-display"
          style={{ color: "#F7F7F5" }}
        >
          {step.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(236,233,226,0.75)" }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I want to find a commercial space.")}`;

  return (
    <section
      id="process"
      ref={ref}
      data-ocid="process.section"
      style={{ background: "#1B1B1B" }}
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-3"
            style={{ color: "#C7A66A" }}
          >
            SIMPLE PROCESS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold font-display mb-3"
            style={{ color: "#F7F7F5" }}
          >
            How It Works
          </h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: "48px",
              height: "3px",
              background: "#C7A66A",
              borderRadius: "2px",
            }}
          />
          <p
            className="text-sm sm:text-base max-w-md mx-auto"
            style={{ color: "rgba(236,233,226,0.7)" }}
          >
            Four effortless steps from your first message to moving in.
          </p>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {PROCESS_STEPS.map((step, i) => (
            <DesktopStep
              key={step.step}
              step={step}
              index={i}
              total={PROCESS_STEPS.length}
            />
          ))}
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <MobileStep key={step.step} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="process.start_whatsapp_button"
            className="inline-flex items-center gap-2.5 font-semibold text-sm px-8 py-3.5
              rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "#25D366",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Start Your Search on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
