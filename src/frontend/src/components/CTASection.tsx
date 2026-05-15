import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../data";

const WA_ICON = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function FloatingOrb({
  cx,
  cy,
  size,
  delay,
}: {
  cx: string;
  cy: string;
  size: string;
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={{
        left: cx,
        top: cy,
        width: size,
        height: size,
        background:
          "radial-gradient(circle, rgba(199,166,106,0.15) 0%, transparent 70%)",
        filter: "blur(40px)",
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

export default function CTASection() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi, I'm looking for a commercial space in Udaipur. Can you help?",
  )}`;
  const telLink = `tel:${PHONE_NUMBER.replace(/\D/g, "")}`;

  return (
    <section
      id="contact"
      data-ocid="cta.section"
      className="relative overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* Background image layer */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Multi-layer dark overlay for text contrast */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.94) 0%, rgba(17,17,17,0.88) 50%, rgba(10,10,10,0.94) 100%)",
        }}
      />

      {/* Floating orbs for depth */}
      <FloatingOrb cx="20%" cy="40%" size="400px" delay={0} />
      <FloatingOrb cx="80%" cy="60%" size="360px" delay={2.5} />
      <FloatingOrb cx="50%" cy="20%" size="300px" delay={1.2} />

      {/* Subtle grain texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-24 sm:py-32 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full"
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C7A66A" }}
          >
            GET CONNECTED
          </p>

          {/* Divider line */}
          <div
            className="mx-auto mb-6"
            style={{
              width: "3rem",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #C7A66A, transparent)",
            }}
          />

          {/* Headline */}
          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.25rem)",
              color: "#F7F7F5",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            }}
          >
            Looking for the Right{" "}
            <span
              style={{
                color: "#C7A66A",
                textShadow: "0 0 32px rgba(199,166,106,0.35)",
              }}
            >
              Commercial Space?
            </span>
          </h2>

          {/* Subheadline */}
          <p
            className="max-w-xl mx-auto leading-relaxed mb-10 text-base sm:text-lg"
            style={{ color: "rgba(236,233,226,0.82)" }}
          >
            Get connected with leasing and expansion opportunities across
            Udaipur.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — WhatsApp */}
            <motion.a
              data-ocid="cta.whatsapp_button"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2.5 font-display font-semibold text-sm rounded-lg px-7 py-3.5 w-full sm:w-auto justify-center"
              style={{
                background: "#C7A66A",
                color: "#111111",
                boxShadow: "0 8px 28px rgba(199,166,106,0.35)",
                letterSpacing: "0.02em",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 36px rgba(199,166,106,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <WA_ICON />
              Start on WhatsApp
            </motion.a>

            {/* Secondary — Call */}
            <motion.a
              data-ocid="cta.phone_button"
              href={telLink}
              className="inline-flex items-center gap-2.5 font-display font-semibold text-sm rounded-lg px-7 py-3.5 w-full sm:w-auto justify-center"
              style={{
                background: "transparent",
                color: "#F7F7F5",
                border: "1.5px solid rgba(247,247,245,0.35)",
                letterSpacing: "0.02em",
              }}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(247,247,245,0.7)",
                background: "rgba(247,247,245,0.06)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Phone size={18} />
              Call Us Now
            </motion.a>
          </div>

          {/* Trust micro-line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {[
              "Fast Response",
              "500+ Happy Clients",
              "Verified Listings",
              "Udaipur Network",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(236,233,226,0.55)" }}
              >
                <span style={{ color: "#C7A66A" }}>✓</span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
