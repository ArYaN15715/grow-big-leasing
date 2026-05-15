import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { TRUST_PILLS, WHATSAPP_NUMBER } from "../data";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    alt: "Modern office interior",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    alt: "Restaurant interior",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
    alt: "Commercial space",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1920&q=80",
    alt: "Warehouse space",
  },
];

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=Hi%2C%20I%20am%20interested%20in%20a%20commercial%20space%20in%20Udaipur.`;

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const pillContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const pillItemVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [_prevSlide, setPrevSlide] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % SLIDES.length;
      });
    }, 5500);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goToSlide = (idx: number) => {
    setPrevSlide(activeSlide);
    setActiveSlide(idx);
    startTimer();
  };

  const handleWhatsApp = () =>
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");

  const handleExplore = () => {
    const el = document.querySelector("#properties");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollDown = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="hero.section"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#111111",
      }}
    >
      {/* Slideshow images with Ken Burns */}
      {SLIDES.map((slide, i) => {
        const isActive = i === activeSlide;
        return (
          <motion.div
            key={slide.src}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: isActive ? 2 : 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.img
              src={slide.src}
              alt={slide.alt}
              aria-hidden="true"
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
              // Ken Burns: slow zoom on active slide
              initial={{ scale: 1.0 }}
              animate={isActive ? { scale: 1.08 } : { scale: 1.0 }}
              transition={{
                duration: isActive ? 9 : 1.5,
                ease: "easeOut",
              }}
            />
          </motion.div>
        );
      })}

      {/* Layered dark overlay for text legibility */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* Subtle vignette edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient gold glow at bottom center */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "35vh",
          zIndex: 5,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(199,166,106,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "5rem 1.25rem 4rem",
          maxWidth: "960px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Category pill */}
          <motion.div variants={itemVariants}>
            <span
              data-ocid="hero.category_pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(199,166,106,0.12)",
                border: "1px solid rgba(199,166,106,0.4)",
                borderRadius: "9999px",
                padding: "0.35rem 1.1rem",
                fontSize: "0.68rem",
                color: "#C7A66A",
                letterSpacing: "0.2em",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "1.4rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#C7A66A",
                  boxShadow: "0 0 8px rgba(199,166,106,0.8)",
                  animation: "pulse 2s infinite",
                }}
              />
              UDAIPUR'S PREMIER LEASING NETWORK
            </span>
          </motion.div>

          {/* H1 headline */}
          <motion.h1
            data-ocid="hero.heading"
            variants={itemVariants}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              color: "#F7F7F5",
              lineHeight: 1.06,
              marginBottom: "1.35rem",
              letterSpacing: "-0.02em",
              maxWidth: "820px",
            }}
          >
            Spaces That Help <br className="hidden sm:block" />
            <span
              style={{
                color: "#C7A66A",
                textShadow:
                  "0 0 40px rgba(199,166,106,0.35), 0 0 80px rgba(199,166,106,0.15)",
              }}
            >
              Businesses Grow
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            data-ocid="hero.subheadline"
            variants={itemVariants}
            style={{
              fontFamily: "'General Sans', system-ui, sans-serif",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "#ECE9E2",
              maxWidth: "560px",
              marginBottom: "2.25rem",
              lineHeight: 1.7,
              opacity: 0.88,
            }}
          >
            Commercial leasing, franchise spaces, and business opportunities
            across Udaipur, Rajasthan.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            data-ocid="hero.trust_strip"
            variants={pillContainerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
              maxWidth: "100%",
              overflowX: "auto",
              WebkitOverflowScrolling:
                "touch" as React.CSSProperties["WebkitOverflowScrolling"],
              paddingBottom: "0.25rem",
            }}
          >
            {TRUST_PILLS.map((pill) => (
              <motion.span
                key={pill}
                variants={pillItemVariants}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  backgroundColor: "rgba(27,27,27,0.85)",
                  border: "1px solid rgba(199,166,106,0.25)",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.9rem",
                  fontSize: "0.72rem",
                  color: "#ECE9E2",
                  letterSpacing: "0.02em",
                  fontFamily: "'General Sans', system-ui, sans-serif",
                  fontWeight: 500,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            data-ocid="hero.cta_row"
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "0.875rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3.5rem",
            }}
          >
            <button
              data-ocid="hero.whatsapp_button"
              type="button"
              onClick={handleWhatsApp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#25D366",
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.92rem",
                padding: "0.85rem 1.8rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition:
                  "filter 220ms ease, transform 220ms ease, box-shadow 220ms ease",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                minHeight: "48px",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.filter = "brightness(1.1)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 10px 32px rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.filter = "brightness(1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)";
              }}
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </button>

            <button
              data-ocid="hero.explore_button"
              type="button"
              onClick={handleExplore}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "transparent",
                color: "#F7F7F5",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "0.85rem 1.8rem",
                borderRadius: "9999px",
                border: "1.5px solid rgba(247,247,245,0.35)",
                cursor: "pointer",
                transition:
                  "background-color 220ms ease, border-color 220ms ease, transform 220ms ease",
                minHeight: "48px",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.backgroundColor = "rgba(247,247,245,0.1)";
                el.style.borderColor = "rgba(247,247,245,0.65)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "rgba(247,247,245,0.35)";
                el.style.transform = "translateY(0)";
              }}
            >
              Explore Spaces
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Slide indicator dots */}
          <motion.div
            data-ocid="hero.slide_dots"
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goToSlide(idx)}
                style={{
                  width: idx === activeSlide ? "1.75rem" : "0.45rem",
                  height: "0.45rem",
                  borderRadius: "9999px",
                  backgroundColor:
                    idx === activeSlide ? "#C7A66A" : "rgba(247,247,245,0.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition:
                    "width 350ms cubic-bezier(0.34,1.56,0.64,1), background-color 350ms ease",
                  minWidth: idx === activeSlide ? "1.75rem" : "0.45rem",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll down cue */}
        <motion.button
          type="button"
          aria-label="Scroll down"
          onClick={handleScrollDown}
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background: "none",
            border: "1px solid rgba(247,247,245,0.2)",
            cursor: "pointer",
            color: "rgba(247,247,245,0.55)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            borderRadius: "9999px",
            width: "40px",
            height: "40px",
            transition: "border-color 200ms, color 200ms",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "rgba(199,166,106,0.5)";
            el.style.color = "#C7A66A";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "rgba(247,247,245,0.2)";
            el.style.color = "rgba(247,247,245,0.55)";
          }}
        >
          <ChevronDown size={20} />
        </motion.button>
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(199,166,106,0.8); }
          50% { opacity: 0.6; box-shadow: 0 0 4px rgba(199,166,106,0.4); }
        }
      `}</style>
    </section>
  );
}
