import { Menu, MessageCircle, Phone, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20a%20commercial%20space%20in%20Udaipur.";

function NavLink({
  label,
  href,
  onClick,
  dataOcid,
}: {
  label: string;
  href: string;
  onClick: (href: string) => void;
  dataOcid: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <li style={{ position: "relative" }}>
      <button
        data-ocid={dataOcid}
        type="button"
        onClick={() => onClick(href)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          color: hovered ? "#C7A66A" : "#F7F7F5",
          letterSpacing: "0.025em",
          padding: "0.35rem 0",
          position: "relative",
          transition: "color 250ms ease",
        }}
      >
        {label}
        {/* Gold underline */}
        <motion.span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1.5px",
            background: "#C7A66A",
            borderRadius: "2px",
            originX: 0,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </button>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const prevScroll = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      setScrolled(cur > 60);
      // Hide on fast scroll down, show on scroll up
      if (cur > prevScroll.current + 4 && cur > 200) {
        setHidden(true);
      } else if (cur < prevScroll.current - 2) {
        setHidden(false);
      }
      prevScroll.current = cur;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        data-ocid="navbar"
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition:
            "background-color 350ms ease, border-color 350ms ease, box-shadow 350ms ease",
          backgroundColor: scrolled ? "rgba(12, 12, 12, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(199,166,106,0.25)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          {/* Logo */}
          <button
            data-ocid="navbar.logo_link"
            type="button"
            onClick={() => handleNavClick("#")}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            {!logoError ? (
              <img
                src="/assets/logo.svg"
                alt="Grow Big Leasing"
                onError={() => setLogoError(true)}
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#C7A66A",
                  letterSpacing: "0.04em",
                }}
              >
                GROW BIG
              </span>
            )}
          </button>

          {/* Desktop nav links */}
          <ul
            className="hidden md:flex"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                href={link.href}
                onClick={handleNavClick}
                dataOcid={`navbar.${link.label.toLowerCase()}_link`}
              />
            ))}
          </ul>

          {/* Right side actions */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {/* Desktop phone */}
            <a
              data-ocid="navbar.phone_button"
              href="tel:+919876543210"
              className="hidden lg:inline-flex"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "transparent",
                color: "#ECE9E2",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "0.82rem",
                padding: "0.45rem 0.9rem",
                borderRadius: "9999px",
                textDecoration: "none",
                border: "1px solid rgba(199,166,106,0.2)",
                transition: "border-color 200ms ease, color 200ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(199,166,106,0.5)";
                el.style.color = "#C7A66A";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(199,166,106,0.2)";
                el.style.color = "#ECE9E2";
              }}
            >
              <Phone size={13} />
              +91 98765 43210
            </a>

            {/* Desktop WhatsApp CTA */}
            <a
              data-ocid="navbar.whatsapp_button"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                backgroundColor: "#C7A66A",
                color: "#111111",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.83rem",
                padding: "0.55rem 1.2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                transition:
                  "filter 200ms ease, transform 200ms ease, box-shadow 200ms ease",
                letterSpacing: "0.01em",
                boxShadow: "0 2px 12px rgba(199,166,106,0.3)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.filter = "brightness(1.1)";
                el.style.transform = "translateY(-1px)";
                el.style.boxShadow = "0 6px 20px rgba(199,166,106,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.filter = "brightness(1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 12px rgba(199,166,106,0.3)";
              }}
            >
              <MessageCircle size={14} />
              Chat with Us
            </a>

            {/* Mobile WhatsApp icon */}
            <a
              data-ocid="navbar.whatsapp_icon_button"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden"
              aria-label="Chat on WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#C7A66A",
                color: "#111111",
                width: "38px",
                height: "38px",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "filter 200ms ease",
                flexShrink: 0,
              }}
            >
              <MessageCircle size={17} />
            </a>

            {/* Hamburger */}
            <button
              data-ocid="navbar.menu_toggle"
              type="button"
              className="md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#F7F7F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem",
                minWidth: "44px",
                minHeight: "44px",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "flex" }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "flex" }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-ocid="navbar.mobile_menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              zIndex: 49,
              overflow: "hidden",
            }}
            className="md:hidden"
          >
            <div
              style={{
                backgroundColor: "rgba(14,14,14,0.97)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(199,166,106,0.2)",
                padding: "0.75rem 1.5rem 1.5rem",
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.055,
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    style={{
                      borderBottom: "1px solid rgba(199,166,106,0.08)",
                    }}
                  >
                    <button
                      data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "1rem 0",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: "#F7F7F5",
                        transition: "color 200ms ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        minHeight: "44px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "#C7A66A";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "#F7F7F5";
                      }}
                    >
                      <span>{link.label}</span>
                      <span
                        style={{
                          color: "rgba(199,166,106,0.4)",
                          fontSize: "1rem",
                        }}
                      >
                        ›
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.22 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginTop: "1.25rem",
                }}
              >
                <a
                  data-ocid="navbar.mobile_whatsapp_button"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    backgroundColor: "#C7A66A",
                    color: "#111111",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "0.875rem 1.5rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    width: "100%",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(199,166,106,0.3)",
                    minHeight: "44px",
                  }}
                >
                  <MessageCircle size={16} />
                  Chat with Us
                </a>

                <a
                  data-ocid="navbar.mobile_phone_button"
                  href="tel:+919876543210"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    backgroundColor: "transparent",
                    color: "#ECE9E2",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    padding: "0.75rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid rgba(199,166,106,0.2)",
                  }}
                >
                  <Phone size={15} />
                  +91 98765 43210
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
