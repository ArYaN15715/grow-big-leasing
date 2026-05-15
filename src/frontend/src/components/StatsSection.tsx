import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { STATS } from "../data";
import type { StatsItem } from "../types";

const DURATION_MS = 2000;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function useCountUp(target: number, isActive: boolean): number {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isActive || hasRun.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setCount(target);
      hasRun.current = true;
      return;
    }
    hasRun.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isActive, target]);

  return count;
}

function MobileCounter({
  target,
  isActive,
}: { target: number; isActive: boolean }) {
  const count = useCountUp(target, isActive);
  return <>{count}</>;
}

function StatCard({
  stat,
  index,
  isActive,
  showDivider,
}: {
  stat: StatsItem;
  index: number;
  isActive: boolean;
  showDivider: boolean;
}) {
  const count = useCountUp(stat.value, isActive);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex-1 flex flex-col items-center text-center px-4 py-8 group"
        data-ocid={`stats.item.${index + 1}`}
      >
        <div className="flex items-start justify-center gap-1 mb-2">
          <span className="text-5xl sm:text-6xl font-bold text-[#C7A66A] font-display tabular-nums leading-none">
            {count}
          </span>
          <span className="text-3xl sm:text-4xl font-bold text-[#C7A66A] font-display leading-none mt-1">
            {stat.suffix}
          </span>
        </div>
        <p className="text-base sm:text-lg font-semibold text-[#F7F7F5] font-display mb-1">
          {stat.label}
        </p>
        <p className="text-xs sm:text-sm text-[#ECE9E2] opacity-65 leading-relaxed max-w-[140px]">
          {stat.description}
        </p>
      </motion.div>
      {showDivider && (
        <div
          className="hidden lg:block self-stretch w-px my-6"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(199,166,106,0.35), transparent)",
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}

const TRUST_BADGES = [
  { id: 1, label: "\u2713 Verified Listings" },
  { id: 2, label: "\u2713 Fast Coordination" },
  { id: 3, label: "\u2713 Local Expertise" },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #111111 0%, #1B1B1B 50%, #111111 100%)",
      }}
      data-ocid="stats.section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(199,166,106,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[#C7A66A] text-xs uppercase tracking-[0.25em] mb-3 font-display font-medium"
          >
            OUR IMPACT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-4xl font-bold text-[#F7F7F5] font-display leading-tight"
          >
            Trusted by Businesses Across Udaipur
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
            className="mx-auto mt-4 h-0.5 w-16 origin-center"
            style={{ background: "#C7A66A" }}
            aria-hidden="true"
          />
        </div>

        {/* Desktop flex row with gold dividers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="hidden lg:flex items-stretch justify-between rounded-2xl border border-white/5 overflow-hidden"
          style={{
            background: "rgba(27,27,27,0.6)",
            backdropFilter: "blur(12px)",
          }}
          data-ocid="stats.grid"
        >
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              isActive={isInView}
              showDivider={i < STATS.length - 1}
            />
          ))}
        </motion.div>

        {/* Mobile 2x2 grid */}
        <div
          className="grid grid-cols-2 gap-4 lg:hidden"
          data-ocid="stats.grid.mobile"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/5"
              style={{ background: "rgba(27,27,27,0.7)" }}
              data-ocid={`stats.item.mobile.${i + 1}`}
            >
              <div className="flex items-start gap-0.5 mb-1">
                <span className="text-4xl font-bold text-[#C7A66A] font-display tabular-nums leading-none">
                  <MobileCounter target={stat.value} isActive={isInView} />
                </span>
                <span className="text-2xl font-bold text-[#C7A66A] font-display leading-none mt-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#F7F7F5] font-display mb-0.5">
                {stat.label}
              </p>
              <p className="text-xs text-[#ECE9E2] opacity-65 leading-snug">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-10"
          data-ocid="stats.trust_badges"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.id}
              className="rounded-full px-4 py-2 text-xs text-[#ECE9E2] flex gap-2 items-center transition-all duration-300 hover:border-[#C7A66A]/40"
              style={{
                background: "rgba(27,27,27,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
