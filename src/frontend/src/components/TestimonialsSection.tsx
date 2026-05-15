import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data";

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];
const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-4">
    {STAR_KEYS.slice(0, count).map((key) => (
      <svg
        key={key}
        className="w-4 h-4"
        viewBox="0 0 20 20"
        fill="#C7A66A"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

interface CardProps {
  testimonial: (typeof TESTIMONIALS)[number];
  isActive?: boolean;
}

function TestimonialCard({ testimonial, isActive = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 h-full
        transition-all duration-500
        ${
          isActive
            ? "scale-[1.02] shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_24px_rgba(199,166,106,0.12)]"
            : "opacity-80 hover:opacity-100"
        }`}
      style={{
        background: "rgba(28,28,28,0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "2px solid #C7A66A",
        border: isActive
          ? "1px solid rgba(199,166,106,0.35)"
          : "1px solid rgba(199,166,106,0.12)",
        borderTopColor: "#C7A66A",
        borderTopWidth: "2px",
      }}
    >
      {/* Decorative corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-tr-2xl"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(199,166,106,0.08) 0%, transparent 70%)",
        }}
      />

      <div>
        <StarRow count={testimonial.rating} />
        {/* Quote mark */}
        <div
          className="font-serif leading-none mb-2 select-none"
          style={{
            fontSize: "3rem",
            color: "#C7A66A",
            lineHeight: 1,
            opacity: 0.7,
          }}
        >
          &ldquo;
        </div>
        <p
          className="text-sm sm:text-base leading-relaxed italic"
          style={{ color: "#ECE9E2" }}
        >
          {testimonial.quote}
        </p>
      </div>

      <div
        className="mt-6 pt-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm"
            style={{
              background: "rgba(199,166,106,0.18)",
              border: "1.5px solid rgba(199,166,106,0.4)",
              color: "#C7A66A",
            }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p
              className="font-semibold text-sm truncate"
              style={{ color: "#F7F7F5" }}
            >
              {testimonial.name}
            </p>
            <p
              className="text-xs truncate"
              style={{ color: "rgba(236,233,226,0.6)" }}
            >
              {testimonial.role} &middot; {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;

  const advance = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setActive((prev) => (prev + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => advance(1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, advance]);

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  // Desktop: 3 cards — prev, active, next
  const getDesktopIndices = () => [
    (active - 1 + total) % total,
    active,
    (active + 1) % total,
  ];

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.96 }),
  };

  return (
    <section
      data-ocid="testimonials.section"
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      style={{ background: "#1B1B1B" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient background orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(199,166,106,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 50%, rgba(199,166,106,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#C7A66A" }}
          >
            TESTIMONIALS
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-12"
              style={{ background: "rgba(199,166,106,0.3)" }}
            />
            <h2
              className="text-3xl sm:text-4xl font-bold font-display"
              style={{ color: "#F7F7F5" }}
            >
              What Our Clients Say
            </h2>
            <div
              className="h-px w-12"
              style={{ background: "rgba(199,166,106,0.3)" }}
            />
          </div>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: "rgba(236,233,226,0.65)" }}
          >
            Businesses across Udaipur trust Grow Big Leasing for their
            commercial space needs.
          </p>
        </motion.div>

        {/* Desktop: 3-card grid */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-5 items-stretch"
          data-ocid="testimonials.card"
        >
          {getDesktopIndices().map((idx, col) => (
            <TestimonialCard
              key={`col-${col}-${TESTIMONIALS[idx].id}`}
              testimonial={TESTIMONIALS[idx]}
              isActive={col === 1}
            />
          ))}
        </div>

        {/* Mobile: single card with slide */}
        <div
          className="md:hidden relative overflow-hidden"
          data-ocid="testimonials.card"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard testimonial={TESTIMONIALS[active]} isActive />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => goTo(i)}
              data-ocid={`testimonials.dot.${i + 1}`}
              aria-label={`Go to testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "1.75rem" : "0.5rem",
                height: "0.5rem",
                background: i === active ? "#C7A66A" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Mobile counter + arrows */}
        <div className="flex md:hidden items-center justify-center gap-5 mt-4">
          <button
            type="button"
            onClick={() => advance(-1)}
            data-ocid="testimonials.mobile_prev_button"
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
            style={{
              background: "rgba(17,17,17,0.8)",
              border: "1px solid rgba(199,166,106,0.2)",
              color: "#ECE9E2",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span
            className="text-xs tabular-nums"
            style={{ color: "rgba(236,233,226,0.5)" }}
          >
            {active + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => advance(1)}
            data-ocid="testimonials.mobile_next_button"
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
            style={{
              background: "rgba(17,17,17,0.8)",
              border: "1px solid rgba(199,166,106,0.2)",
              color: "#ECE9E2",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop prev/next arrows */}
        <div className="hidden md:flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => advance(-1)}
            data-ocid="testimonials.prev_button"
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(17,17,17,0.8)",
              border: "1px solid rgba(199,166,106,0.2)",
              color: "#ECE9E2",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(199,166,106,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "#C7A66A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(199,166,106,0.2)";
              (e.currentTarget as HTMLButtonElement).style.color = "#ECE9E2";
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => advance(1)}
            data-ocid="testimonials.next_button"
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(17,17,17,0.8)",
              border: "1px solid rgba(199,166,106,0.2)",
              color: "#ECE9E2",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(199,166,106,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "#C7A66A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(199,166,106,0.2)";
              (e.currentTarget as HTMLButtonElement).style.color = "#ECE9E2";
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
