import { useEffect, useState } from "react";
import {
  IconPhone,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import { BRAND_CONFIG, IMAGES } from "~/data/contact-config";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`${styles.root} ${mounted ? styles.mounted : ""}`}>

      {/* ── Background ── */}
      <div className={styles.bg}>
        <img src={IMAGES.heroBg} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>

      {/* ── Gold particles ── */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>

      {/* ── Floating WhatsApp CTA ── */}
      <a
        href={BRAND_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waFloat}
        aria-label="Chat on WhatsApp"
      >
        <IconBrandWhatsapp size={24} stroke={2} />
        <span className={styles.waLabel}>Chat with us</span>
      </a>

      {/* ── Main content ── */}
      <main className={styles.main}>

        {/* Eyebrow strip */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Luxury Wedding Films &amp; Photography</span>
          <span className={styles.eyebrowLine} />
        </div>

        {/* Clapperboard logo */}
        <div className={styles.logoFrame}>
          <img src={IMAGES.logo} alt="PixelWala Cinematic" className={styles.logo} />
        </div>

        {/* Hero title */}
        <div className={styles.hero}>
          <h1 className={styles.heroMain}>PixelWala</h1>
          <div className={styles.heroDivider}>
            <span className={styles.heroDividerLine} />
            <span className={styles.heroDividerDot}>◆</span>
            <span className={styles.heroDividerLine} />
          </div>
          <h2 className={styles.heroSub}>Cinematic</h2>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>{BRAND_CONFIG.tagline}</p>

        {/* Coming soon badge */}
        <div className={styles.comingSoon}>
          <div className={styles.csBadge}>
            <span className={styles.csDot} />
            Our Website Is Coming Soon
            <span className={styles.csDot} />
          </div>
          <p className={styles.csBody}>{BRAND_CONFIG.subTagline}</p>
        </div>

        {/* CTA buttons */}
        <div className={styles.ctas}>
          <a href={BRAND_CONFIG.callLink} className={`${styles.btn} ${styles.btnGold}`}>
            <IconPhone size={17} stroke={2.5} />
            Call Now
          </a>
          <a
            href={BRAND_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnGreen}`}
          >
            <IconBrandWhatsapp size={17} stroke={2.5} />
            WhatsApp
          </a>
          <a
            href={BRAND_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnGlass}`}
          >
            <IconBrandInstagram size={17} stroke={2.5} />
            Instagram
          </a>
        </div>

        {/* Contact card — 3 column horizontal */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>— Get In Touch —</p>
          <div className={styles.cardGrid}>

            <a href={BRAND_CONFIG.callLink} className={styles.cardItem}>
              <IconPhone size={22} stroke={1.5} className={styles.cardItemIcon} />
              <span className={styles.cardItemLabel}>Phone</span>
              <span className={styles.cardItemVal}>{BRAND_CONFIG.phone}</span>
            </a>

            <span className={styles.cardSep} />

            <a href={`mailto:${BRAND_CONFIG.email}`} className={styles.cardItem}>
              <IconMail size={22} stroke={1.5} className={styles.cardItemIcon} />
              <span className={styles.cardItemLabel}>Email</span>
              <span className={styles.cardItemVal}>{BRAND_CONFIG.email}</span>
            </a>

            <span className={styles.cardSep} />

            <a
              href={BRAND_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardItem}
            >
              <IconBrandInstagram size={22} stroke={1.5} className={styles.cardItemIcon} />
              <span className={styles.cardItemLabel}>Instagram</span>
              <span className={styles.cardItemVal}>{BRAND_CONFIG.instagramHandle}</span>
            </a>

          </div>
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerDivider} />
        <p className={styles.footerTagline}>{BRAND_CONFIG.footerTagline}</p>
        <p className={styles.footerCopy}>
          © {BRAND_CONFIG.year} {BRAND_CONFIG.name}
        </p>
      </footer>

    </div>
  );
}
