import { WHATSAPP_NUMBER } from "@/data";
import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE_RAW = "+919876543210";
const PHONE_DISPLAY = "Call Now";

const WA_SVG = <MessageCircle size={26} color="white" aria-hidden="true" />;

const WA_SVG_SMALL = <MessageCircle size={18} aria-hidden="true" />;

export default function FloatingCTAs() {
  const [visible, setVisible] = useState(false);
  const [hoveredWa, setHoveredWa] = useState(false);
  const [hoveredCall, setHoveredCall] = useState(false);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi, I'd like to know more about commercial spaces in Udaipur.",
  )}`;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .wa-float-pulse {
          animation: wa-pulse 2.5s ease-in-out infinite;
        }
        .wa-float-pulse:hover {
          animation: none;
          transform: scale(1.1);
        }
      `}</style>

      {/* ── Floating WhatsApp button (desktop + scroll-visible) ── */}
      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1rem",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.75rem",
          }}
          className="hidden md:flex"
        >
          {/* Call button — desktop, stacked above WA */}
          <div style={{ position: "relative" }}>
            {hoveredCall && (
              <span
                style={{
                  position: "absolute",
                  right: "calc(100% + 0.5rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  whiteSpace: "nowrap",
                  backgroundColor: "#1B1B1B",
                  border: "1px solid rgba(199,166,106,0.35)",
                  color: "#ECE9E2",
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "0.35rem",
                  pointerEvents: "none",
                }}
              >
                Call Us
              </span>
            )}
            <a
              data-ocid="floating.call_button"
              href={`tel:${PHONE_RAW}`}
              aria-label="Call Us"
              onMouseEnter={() => setHoveredCall(true)}
              onMouseLeave={() => setHoveredCall(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                backgroundColor: hoveredCall
                  ? "rgba(199,166,106,0.12)"
                  : "#1B1B1B",
                border: `1px solid ${hoveredCall ? "#C7A66A" : "rgba(199,166,106,0.35)"}`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                textDecoration: "none",
                transition:
                  "background-color 0.2s ease, border-color 0.2s ease",
                animation: visible ? "fadeInUp 0.3s ease" : "none",
              }}
            >
              <Phone size={18} color="#C7A66A" />
            </a>
          </div>

          {/* WhatsApp button — desktop */}
          <div style={{ position: "relative" }}>
            {hoveredWa && (
              <span
                style={{
                  position: "absolute",
                  right: "calc(100% + 0.5rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  whiteSpace: "nowrap",
                  backgroundColor: "#1B1B1B",
                  border: "1px solid rgba(199,166,106,0.25)",
                  color: "#ECE9E2",
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "0.35rem",
                  pointerEvents: "none",
                }}
              >
                Chat on WhatsApp
              </span>
            )}
            <a
              data-ocid="floating.whatsapp_button"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="wa-float-pulse"
              onMouseEnter={() => setHoveredWa(true)}
              onMouseLeave={() => setHoveredWa(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "9999px",
                backgroundColor: "#25D366",
                boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
                textDecoration: "none",
                transition: "box-shadow 0.2s ease",
              }}
            >
              {WA_SVG}
            </a>
          </div>
        </div>
      )}

      {/* ── Floating buttons — MOBILE (above sticky bar) ── */}
      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: "5.5rem", // above mobile sticky bar (h-16 = 4rem + gap)
            right: "1rem",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.6rem",
          }}
          className="flex md:hidden"
        >
          {/* Call — mobile floating */}
          <a
            data-ocid="floating.call_button_mobile"
            href={`tel:${PHONE_RAW}`}
            aria-label="Call Us"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              backgroundColor: "#1B1B1B",
              border: "1px solid rgba(199,166,106,0.35)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
              textDecoration: "none",
            }}
          >
            <Phone size={16} color="#C7A66A" />
          </a>

          {/* WhatsApp — mobile floating */}
          <a
            data-ocid="floating.whatsapp_button_mobile"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="wa-float-pulse"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3.25rem",
              height: "3.25rem",
              borderRadius: "9999px",
              backgroundColor: "#25D366",
              boxShadow: "0 6px 20px rgba(37,211,102,0.4)",
              textDecoration: "none",
            }}
          >
            {WA_SVG}
          </a>
        </div>
      )}

      {/* ── Mobile sticky CTA bar (always visible on mobile) ── */}
      <div
        data-ocid="floating.mobile_cta"
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          height: "4rem",
          backgroundColor: "rgba(17,17,17,0.97)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
        }}
      >
        {/* WhatsApp half */}
        <a
          data-ocid="floating.mobile_whatsapp_button"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.45rem",
            backgroundColor: "#25D366",
            color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          onTouchStart={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
          }}
          onTouchEnd={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          {WA_SVG_SMALL}
          WhatsApp
        </a>

        {/* Divider */}
        <div
          style={{ width: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
        />

        {/* Call half */}
        <a
          data-ocid="floating.mobile_call_button"
          href={`tel:${PHONE_RAW}`}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.45rem",
            backgroundColor: "#1B1B1B",
            color: "#F7F7F5",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "0.88rem",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          onTouchStart={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
          }}
          onTouchEnd={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          <Phone size={16} color="#C7A66A" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}
