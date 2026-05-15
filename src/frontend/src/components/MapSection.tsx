import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER } from "../data";

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117418.05!2d73.6527!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56bc76154ef%3A0x5a009b0805b54091!2sUdaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000";

const LOCATIONS = [
  "Hiran Magri",
  "Chetak Circle",
  "Madhuban",
  "Industrial Area",
  "City Palace Road",
  "Sukher",
  "Sector 14",
  "Bhupalpura",
  "Sector 11",
];

export function MapSection() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi, I'd like to know more about your commercial properties in Udaipur.",
  )}`;

  return (
    <section
      id="map"
      data-ocid="map.section"
      className="py-20 sm:py-28 px-4"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div
              className="h-px w-10"
              style={{
                background: "linear-gradient(to right, transparent, #C7A66A)",
              }}
            />
            <span
              className="text-xs uppercase tracking-[0.18em] font-semibold"
              style={{
                color: "#C7A66A",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Location
            </span>
            <div
              className="h-px w-10"
              style={{
                background: "linear-gradient(to left, transparent, #C7A66A)",
              }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "#F7F7F5",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Find Us in{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                background:
                  "linear-gradient(90deg, #C7A66A 0%, #E8C87A 50%, #C7A66A 100%)",
              }}
            >
              Udaipur
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "rgba(236,233,226,0.75)" }}
          >
            Serving commercial property seekers across Udaipur, Rajasthan — from
            Hiran Magri to Industrial Area.
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(199,166,106,0.22)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(199,166,106,0.1)",
          }}
        >
          {/* Gold top-line accent */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C7A66A 30%, #E8C87A 50%, #C7A66A 70%, transparent)",
            }}
          />

          {/* Iframe */}
          <div style={{ position: "relative", height: "450px" }}>
            <iframe
              title="Grow Big Leasing — Udaipur Location"
              src={EMBED_SRC}
              width="100%"
              height="450"
              frameBorder={0}
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Dark blend overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(17,17,17,0.05) 0%, transparent 18%, transparent 75%, rgba(17,17,17,0.25) 100%)",
              }}
            />
          </div>

          {/* Info overlay card — bottom-left */}
          <div
            className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6"
            style={{ zIndex: 15, maxWidth: "280px" }}
          >
            <div
              className="rounded-xl p-4"
              style={{
                backgroundColor: "rgba(17,17,17,0.93)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(199,166,106,0.32)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
              }}
            >
              <div className="flex items-start gap-2.5 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: "rgba(199,166,106,0.18)",
                    border: "1px solid rgba(199,166,106,0.4)",
                  }}
                >
                  <MapPin size={14} style={{ color: "#C7A66A" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold leading-snug"
                    style={{
                      color: "#F7F7F5",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Grow Big Leasing
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(236,233,226,0.65)" }}
                  >
                    Udaipur, Rajasthan 313001
                  </p>
                </div>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="map.whatsapp_button"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:brightness-110"
                style={{
                  backgroundColor: "#25D366",
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={13} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </motion.div>

        {/* Location tag strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-wrap justify-center gap-2 mt-7"
          data-ocid="map.location_tags"
        >
          {LOCATIONS.map((loc) => (
            <span
              key={loc}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(27,27,27,0.85)",
                border: "1px solid rgba(199,166,106,0.2)",
                color: "#ECE9E2",
                fontFamily: "'General Sans', sans-serif",
              }}
            >
              <span style={{ color: "#C7A66A", fontSize: "0.55rem" }}>●</span>
              {loc}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MapSection;
