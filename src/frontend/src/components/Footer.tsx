import { WHATSAPP_NUMBER } from "@/data";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const year = new Date().getFullYear();
const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
  typeof window !== "undefined" ? window.location.hostname : "growbig",
)}`;

const PHONE_DISPLAY = "+91 98765 43210";
const PHONE_RAW = "+919876543210";

const quickLinks: { label: string; href: string }[] = [
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "Expansion", href: "#expansion" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Commercial Leasing",
  "Franchise Spaces",
  "Restaurants & Cafes",
  "Hotels",
  "Warehouses",
  "Office Spaces",
];

const headingStyle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.7rem",
  fontWeight: 600,
  color: "#F7F7F5",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: "1rem",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.83rem",
  color: "rgba(236,233,226,0.75)",
  textDecoration: "none",
  marginBottom: "0.55rem",
  transition: "color 0.2s ease, padding-left 0.2s ease",
};

export default function Footer() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi, I'd like to know more about commercial spaces in Udaipur.",
  )}`;

  return (
    <footer
      data-ocid="footer"
      style={{
        backgroundColor: "#0D0D0D",
        borderTop: "1px solid rgba(199,166,106,0.18)",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem" }}
      >
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/assets/logo.svg"
              alt="Grow Big Leasing & Real Estate"
              style={{
                height: "2.25rem",
                objectFit: "contain",
                marginBottom: "1rem",
                display: "block",
              }}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(236,233,226,0.8)",
                lineHeight: 1.7,
                marginBottom: "1rem",
                maxWidth: "220px",
              }}
            >
              Commercial Spaces That Help Businesses Grow. Udaipur's modern
              leasing network.
            </p>
            <div className="flex items-center gap-1.5 mb-4">
              <MapPin size={12} style={{ color: "#C7A66A", flexShrink: 0 }} />
              <span
                style={{ fontSize: "0.75rem", color: "rgba(236,233,226,0.55)" }}
              >
                Udaipur, Rajasthan 313001
              </span>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-ocid="footer.social_whatsapp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(37,211,102,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(37,211,102,0.12)";
                }}
              >
                <MessageCircle size={13} style={{ color: "#25D366" }} />
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                aria-label="Call us"
                data-ocid="footer.social_phone"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(199,166,106,0.1)",
                  border: "1px solid rgba(199,166,106,0.28)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(199,166,106,0.22)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(199,166,106,0.1)";
                }}
              >
                <Phone size={13} style={{ color: "#C7A66A" }} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p style={headingStyle}>Quick Links</p>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`footer.link.${link.label.toLowerCase().replace(/\s/g, "_")}`}
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#C7A66A";
                  (e.currentTarget as HTMLAnchorElement).style.paddingLeft =
                    "6px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(236,233,226,0.75)";
                  (e.currentTarget as HTMLAnchorElement).style.paddingLeft =
                    "0px";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 3 — Services */}
          <div>
            <p style={headingStyle}>Our Services</p>
            {serviceLinks.map((s) => (
              <p
                key={s}
                style={{
                  fontSize: "0.83rem",
                  color: "rgba(236,233,226,0.7)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                {s}
              </p>
            ))}
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p style={headingStyle}>Contact Us</p>
            <a
              data-ocid="footer.whatsapp_link"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                marginBottom: "1rem",
                padding: "0.55rem 1.25rem",
                backgroundColor: "#25D366",
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
                borderRadius: "0.4rem",
                textDecoration: "none",
                transition: "filter 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter =
                  "brightness(1.1)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter =
                  "brightness(1)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              <MessageCircle size={14} aria-hidden="true" />
              Chat on WhatsApp
            </a>

            <div className="flex items-center gap-2 mb-2">
              <Phone size={13} style={{ color: "#C7A66A", flexShrink: 0 }} />
              <a
                data-ocid="footer.phone_link"
                href={`tel:${PHONE_RAW}`}
                style={{
                  fontSize: "0.83rem",
                  color: "rgba(236,233,226,0.8)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#C7A66A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(236,233,226,0.8)";
                }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex items-start gap-2">
              <MapPin
                size={13}
                style={{ color: "#C7A66A", flexShrink: 0, marginTop: "2px" }}
              />
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(236,233,226,0.55)",
                  lineHeight: 1.6,
                }}
              >
                Udaipur, Rajasthan 313001
                <br />
                Serving all commercial corridors
              </p>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(199,166,106,0.25) 20%, rgba(199,166,106,0.25) 80%, transparent)",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.25rem",
            paddingBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.45rem",
          }}
          className="sm:flex-row sm:justify-between"
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(236,233,226,0.35)",
              textAlign: "center",
            }}
          >
            &copy; {year} Grow Big Leasing &amp; Real Estate. All rights
            reserved. | Udaipur, Rajasthan
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(236,233,226,0.35)",
              textAlign: "center",
            }}
          >
            Built with love using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#C7A66A", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
