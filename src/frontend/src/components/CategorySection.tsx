import * as LucideIcons from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { CATEGORIES } from "../data";
import type { Category } from "../types";

function CategoryIcon({
  name,
  className,
}: { name: string; className?: string }) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[name];
  if (!Icon) return <LucideIcons.Building2 className={className} />;
  return <Icon className={className} />;
}

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`categories.item.${index + 1}`}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: "3/4", minHeight: "300px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image with zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cat.image})`,
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.75s cubic-bezier(0.34, 1.2, 0.64, 1)",
        }}
      />

      {/* Strong bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-[#111111]/10" />

      {/* Radial gold glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(199,166,106,0.16) 0%, transparent 65%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.45s ease",
        }}
      />

      {/* Gold border glow ring */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: hovered
            ? "inset 0 0 0 1.5px rgba(199,166,106,0.65), 0 12px 40px rgba(199,166,106,0.14)"
            : "inset 0 0 0 1px rgba(255,255,255,0.06)",
          transition: "box-shadow 0.4s ease",
        }}
      />

      {/* TOP-RIGHT: listing count badge pill */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: "rgba(17,17,17,0.72)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(199,166,106,0.45)",
            color: "#C7A66A",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {cat.listingCount} Listings
        </span>
      </div>

      {/* BOTTOM: icon + name + view all */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 z-10"
        style={{
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Icon bubble */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl mb-3"
          style={{
            backgroundColor: hovered
              ? "rgba(199,166,106,0.22)"
              : "rgba(199,166,106,0.1)",
            border: "1px solid rgba(199,166,106,0.3)",
            transition: "background-color 0.3s ease",
          }}
        >
          <CategoryIcon name={cat.icon} className="w-5 h-5" />
        </div>

        {/* Category name */}
        <h3
          className="text-xl font-bold leading-snug mb-1"
          style={{
            color: "#F7F7F5",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {cat.name}
        </h3>

        {/* Description — fades in on hover */}
        <p
          className="text-xs leading-relaxed mb-3"
          style={{
            color: "#ECE9E2",
            opacity: hovered ? 0.9 : 0.6,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {cat.description}
        </p>

        {/* View All → gold link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            opacity: hovered ? 1 : 0.55,
            transition: "opacity 0.35s ease",
          }}
        >
          <span
            style={{
              color: "#C7A66A",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            View All
          </span>
          <LucideIcons.ArrowRight
            className="w-3.5 h-3.5"
            style={{
              color: "#C7A66A",
              transform: hovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function CategorySection() {
  const totalListings = CATEGORIES.reduce((sum, c) => sum + c.listingCount, 0);

  return (
    <section
      id="categories"
      data-ocid="categories.section"
      className="py-24 px-4"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header with gold divider */}
        <div className="text-center mb-14">
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
              Browse by Category
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{
              color: "#F7F7F5",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Find Your Perfect Space
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "#ECE9E2", opacity: 0.85 }}
          >
            From franchise corridors to industrial zones — every commercial
            category under one network.
          </motion.p>
        </div>

        {/* Category grid — 2 col mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          data-ocid="categories.stats_strip"
        >
          {/* Total listings summary pill */}
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "rgba(199,166,106,0.12)",
              border: "1px solid rgba(199,166,106,0.4)",
              color: "#C7A66A",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <LucideIcons.LayoutGrid className="w-3.5 h-3.5" />
            {totalListings}+ Active Listings
          </span>

          {CATEGORIES.map((cat) => (
            <span
              key={cat.id}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                backgroundColor: "rgba(27,27,27,0.9)",
                border: "1px solid rgba(199,166,106,0.18)",
                color: "#ECE9E2",
                fontFamily: "'General Sans', sans-serif",
              }}
            >
              <CategoryIcon name={cat.icon} className="w-3.5 h-3.5" />
              <span style={{ color: "#C7A66A", fontWeight: 700 }}>
                {cat.listingCount}
              </span>
              &nbsp;{cat.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
