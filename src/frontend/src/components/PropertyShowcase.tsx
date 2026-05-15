import { Building2, Filter, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PROPERTIES } from "../data";
import type { Property } from "../types";
import PropertyModal from "./PropertyModal";

const FILTER_TABS = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial Leasing" },
  { id: "franchise", label: "Franchise Spaces" },
  { id: "office", label: "Office Spaces" },
  { id: "industrial", label: "Industrial" },
];

const AVAIL_CONFIG = {
  available: {
    dot: "#22c55e",
    bg: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.4)",
    text: "#22c55e",
    label: "Available",
  },
  limited: {
    dot: "#f59e0b",
    bg: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.4)",
    text: "#f59e0b",
    label: "Limited",
  },
  occupied: {
    dot: "#ef4444",
    bg: "rgba(239,68,68,0.15)",
    border: "rgba(239,68,68,0.4)",
    text: "#ef4444",
    label: "Occupied",
  },
};

function PropertyCard({
  property,
  index,
  onSelect,
}: { property: Property; index: number; onSelect: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), index * 90);
          io.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  const avail =
    AVAIL_CONFIG[property.availabilityStatus] ?? AVAIL_CONFIG.available;
  const phoneDigits = "919876543210";
  const msgText = encodeURIComponent(
    `Hi, I'm interested in ${property.title} at ${property.location}. Please share details.`,
  );
  const waLink = `https://wa.me/${phoneDigits}?text=${msgText}`;

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      data-ocid={`properties.item.${index + 1}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col text-left w-full"
      style={{
        background: "#1B1B1B",
        border: hovered
          ? "1px solid rgba(199,166,106,0.5)"
          : "1px solid rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(32px)",
        transition:
          "opacity 0.6s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease",
        boxShadow: hovered
          ? "0 24px 56px rgba(0,0,0,0.5), 0 0 24px rgba(199,166,106,0.12)"
          : "0 4px 16px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      aria-label={`View details for ${property.title}`}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          loading="lazy"
        />

        {/* Dark gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Availability badge — top left */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
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
        </div>

        {/* Category tag — top right */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            background: "rgba(17,17,17,0.85)",
            border: "1px solid rgba(199,166,106,0.45)",
            color: "#C7A66A",
            backdropFilter: "blur(6px)",
          }}
        >
          {property.type}
        </div>

        {/* Hover overlay — Quick Inquiry */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "rgba(17,17,17,0.6)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`properties.whatsapp_quick.${index + 1}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
            style={{
              background: "#25D366",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
              transform: hovered ? "scale(1)" : "scale(0.85)",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quick Inquiry
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Price */}
        <div className="flex items-baseline gap-1 mb-2">
          <span
            className="text-xl font-bold font-display"
            style={{ color: "#C7A66A" }}
          >
            {property.price}
          </span>
          <span className="text-xs" style={{ color: "rgba(236,233,226,0.6)" }}>
            {property.priceUnit}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-base font-bold leading-snug mb-2 font-display"
          style={{ color: "#F7F7F5" }}
        >
          {property.title}
        </h3>

        {/* Location */}
        <p
          className="flex items-center gap-1.5 text-sm mb-3"
          style={{ color: "rgba(236,233,226,0.7)" }}
        >
          <MapPin
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: "#C7A66A" }}
          />
          {property.location}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.features.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(236,233,226,0.75)",
              }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            data-ocid={`properties.view_details.${index + 1}`}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              border: "1px solid rgba(199,166,106,0.45)",
              color: "#F7F7F5",
              background: hovered ? "rgba(199,166,106,0.08)" : "transparent",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            View Details
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`properties.whatsapp_card.${index + 1}`}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ background: "#25D366", color: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </button>
  );
}

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center mb-12"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div
          className="h-px w-8"
          style={{ background: "rgba(199,166,106,0.5)" }}
        />
        <span
          className="text-xs font-semibold uppercase tracking-[0.2em] font-display"
          style={{ color: "#C7A66A" }}
        >
          Featured Properties
        </span>
        <div
          className="h-px w-8"
          style={{ background: "rgba(199,166,106,0.5)" }}
        />
      </div>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight"
        style={{ color: "#F7F7F5" }}
      >
        Prime Commercial
        <span className="block" style={{ color: "#C7A66A" }}>
          Spaces in Udaipur
        </span>
      </h2>
      <p
        className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        style={{ color: "rgba(236,233,226,0.7)" }}
      >
        Handpicked commercial spaces across Udaipur's most active business
        corridors — verified, curated, ready for possession.
      </p>
      <div className="flex items-center justify-center gap-1 mt-5">
        <div
          className="h-0.5 w-12 rounded-full"
          style={{ background: "#C7A66A" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#C7A66A" }}
        />
        <div
          className="h-0.5 w-4 rounded-full"
          style={{ background: "rgba(199,166,106,0.4)" }}
        />
      </div>
    </div>
  );
}

export default function PropertyShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  const filtered =
    activeFilter === "all"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.category === activeFilter);
  const displayed = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <section
      id="properties"
      style={{
        background: "#111111",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="tablist"
          aria-label="Property category filter"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.id}
              data-ocid={`properties.filter.${tab.id}`}
              onClick={() => {
                setActiveFilter(tab.id);
                setVisibleCount(6);
              }}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250 whitespace-nowrap"
              style={{
                background:
                  activeFilter === tab.id ? "#C7A66A" : "rgba(27,27,27,0.9)",
                color: activeFilter === tab.id ? "#111111" : "#F7F7F5",
                border:
                  activeFilter === tab.id
                    ? "1px solid #C7A66A"
                    : "1px solid rgba(255,255,255,0.1)",
                transform: activeFilter === tab.id ? "scale(1.03)" : "scale(1)",
                boxShadow:
                  activeFilter === tab.id
                    ? "0 4px 16px rgba(199,166,106,0.3)"
                    : "none",
              }}
            >
              {tab.id === "all" && (
                <Filter className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="w-4 h-4" style={{ color: "#C7A66A" }} />
          <span className="text-sm" style={{ color: "rgba(236,233,226,0.6)" }}>
            Showing{" "}
            <span style={{ color: "#F7F7F5", fontWeight: 600 }}>
              {displayed.length}
            </span>{" "}
            of{" "}
            <span style={{ color: "#F7F7F5", fontWeight: 600 }}>
              {filtered.length}
            </span>{" "}
            properties
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((property, i) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={i}
              onSelect={() => setSelectedProperty(property)}
            />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              type="button"
              data-ocid="properties.load_more_button"
              onClick={() => setVisibleCount((c) => c + 3)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                border: "1px solid rgba(199,166,106,0.45)",
                color: "#F7F7F5",
                background: "rgba(27,27,27,0.6)",
              }}
            >
              Load More Properties
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#C7A66A", color: "#111111" }}
              >
                {filtered.length - visibleCount}
              </span>
            </button>
          </div>
        )}

        {/* CTA strip */}
        <div
          className="mt-16 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "rgba(27,27,27,0.7)",
            border: "1px solid rgba(199,166,106,0.2)",
          }}
        >
          <div>
            <h3
              className="text-lg font-bold font-display mb-1"
              style={{ color: "#F7F7F5" }}
            >
              Looking for a specific space?
            </h3>
            <p className="text-sm" style={{ color: "rgba(236,233,226,0.65)" }}>
              Share your requirement and we'll find the right match within 24
              hours.
            </p>
          </div>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi, I'm looking for a commercial space in Udaipur. Please help me find the right option.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="properties.cta_whatsapp_button"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shrink-0 transition-all duration-300 hover:brightness-110"
            style={{
              background: "#C7A66A",
              color: "#111111",
              boxShadow: "0 4px 20px rgba(199,166,106,0.35)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Property detail modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
