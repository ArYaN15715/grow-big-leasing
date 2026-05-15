import { MapPin, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../data";
import type { Property } from "../types";

interface Props {
  property: Property | null;
  onClose: () => void;
}

const AVAIL_CONFIG = {
  available: {
    bg: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.4)",
    text: "#22c55e",
    dot: "#22c55e",
    label: "Available",
  },
  limited: {
    bg: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.4)",
    text: "#f59e0b",
    dot: "#f59e0b",
    label: "Limited Availability",
  },
  occupied: {
    bg: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.35)",
    text: "#ef4444",
    dot: "#ef4444",
    label: "Occupied",
  },
};

export default function PropertyModal({ property, onClose }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Animate in
  useEffect(() => {
    if (property) {
      setActiveImg(0);
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [property]);

  // ESC key close
  useEffect(() => {
    if (!property) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [property, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = property ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [property]);

  if (!property) return null;

  const avail =
    AVAIL_CONFIG[property.availabilityStatus] ?? AVAIL_CONFIG.available;
  const phoneDigits = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const msgText = encodeURIComponent(
    `Hi, I'm interested in *${property.title}* at ${property.location}.\n\nProperty Type: ${property.type}\nArea: ${property.area}\n\nCould you please share more details and arrange a visit?`,
  );
  const waLink = `https://wa.me/${phoneDigits}?text=${msgText}`;
  const callLink = `tel:${PHONE_NUMBER}`;

  const stats = [
    { label: "Type", value: property.type },
    { label: "Area", value: property.area },
    { label: "Rent / Month", value: property.price },
    { label: "Status", value: avail.label },
  ];

  return (
    <div
      data-ocid="property_modal.dialog"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-4 px-2 sm:py-6 sm:px-4"
      style={{
        backgroundColor: mounted ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0)",
        backdropFilter: mounted ? "blur(6px)" : "blur(0px)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full rounded-2xl overflow-hidden flex flex-col lg:flex-row"
        style={{
          maxWidth: "1000px",
          background: "#1B1B1B",
          border: "1px solid rgba(199,166,106,0.2)",
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? "scale(1) translateY(0)"
            : "scale(0.95) translateY(16px)",
          transition:
            "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(199,166,106,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          data-ocid="property_modal.close_button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
          style={{
            background: "rgba(17,17,17,0.85)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#F7F7F5",
          }}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── LEFT PANEL: Image gallery ── */}
        <div
          className="lg:w-[58%] flex flex-col"
          style={{ background: "#111111" }}
        >
          {/* Main image */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/9", flexShrink: 0 }}
          >
            <img
              key={activeImg}
              src={property.images[activeImg]}
              alt={`${property.title} — view ${activeImg + 1}`}
              className="w-full h-full object-cover"
              style={{ animation: "modalImgFade 0.35s ease" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(17,17,17,0.6) 100%)",
              }}
            />

            {/* Image counter */}
            <div
              className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(17,17,17,0.8)",
                backdropFilter: "blur(6px)",
                color: "rgba(236,233,226,0.8)",
              }}
            >
              {activeImg + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {property.images.length > 1 && (
            <div
              className="flex gap-2 p-3 overflow-x-auto"
              style={{
                background: "rgba(17,17,17,0.6)",
                scrollbarWidth: "none",
              }}
            >
              {property.images.map((img, i) => (
                <button
                  key={`thumb-${img}`}
                  type="button"
                  data-ocid={`property_modal.thumbnail.${i + 1}`}
                  onClick={() => setActiveImg(i)}
                  className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                  style={{
                    width: "72px",
                    height: "52px",
                    border:
                      i === activeImg
                        ? "2px solid #C7A66A"
                        : "2px solid rgba(255,255,255,0.1)",
                    opacity: i === activeImg ? 1 : 0.55,
                    transform: i === activeImg ? "scale(1)" : "scale(0.96)",
                  }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Mobile-only CTA (shown below gallery on mobile) */}
          <div
            className="lg:hidden p-4 flex gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="property_modal.whatsapp_button"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Inquiry
            </a>
            <a
              href={callLink}
              data-ocid="property_modal.call_button"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm"
              style={{
                border: "1px solid rgba(199,166,106,0.45)",
                color: "#F7F7F5",
              }}
            >
              <Phone className="w-4 h-4" style={{ color: "#C7A66A" }} />
            </a>
          </div>
        </div>

        {/* ── RIGHT PANEL: Details ── */}
        <div
          className="lg:w-[42%] flex flex-col overflow-y-auto"
          style={{ maxHeight: "85vh" }}
        >
          <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
            {/* Badges row */}
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: avail.bg,
                  border: `1px solid ${avail.border}`,
                  color: avail.text,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: avail.dot }}
                />
                {avail.label}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(199,166,106,0.12)",
                  border: "1px solid rgba(199,166,106,0.35)",
                  color: "#C7A66A",
                }}
              >
                {property.category.charAt(0).toUpperCase() +
                  property.category.slice(1)}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold font-display leading-tight"
                style={{ color: "#F7F7F5" }}
              >
                {property.title}
              </h2>
              <p
                className="flex items-center gap-1.5 mt-2 text-sm"
                style={{ color: "rgba(236,233,226,0.75)" }}
              >
                <MapPin
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#C7A66A" }}
                />
                {property.location}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3"
                  style={{
                    background: "rgba(17,17,17,0.7)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "rgba(236,233,226,0.45)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{
                      color:
                        stat.label === "Rent / Month" ? "#C7A66A" : "#F7F7F5",
                    }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
            />

            {/* Description */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#C7A66A" }}
              >
                About this Space
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(236,233,226,0.75)" }}
              >
                {property.description}
              </p>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#C7A66A" }}
                >
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(199,166,106,0.08)",
                        border: "1px solid rgba(199,166,106,0.25)",
                        color: "#ECE9E2",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />
          </div>

          {/* Sticky CTA footer */}
          <div
            className="p-4 sm:p-5 flex flex-col gap-3 max-lg:hidden flex"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(17,17,17,0.5)",
            }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="property_modal.whatsapp_button"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{
                background: "#25D366",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
              }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Inquire on WhatsApp
            </a>
            <a
              href={callLink}
              data-ocid="property_modal.call_button"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(199,166,106,0.4)",
                color: "#F7F7F5",
                background: "transparent",
              }}
            >
              <Phone className="w-4 h-4" style={{ color: "#C7A66A" }} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Keyframe for image fade */}
      <style>{`
        @keyframes modalImgFade {
          from { opacity: 0.4; transform: scale(1.03); }
          to   { opacity: 1;   transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
