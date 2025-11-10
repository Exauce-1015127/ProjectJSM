// components/TextCard.jsx
export default function TextCard({
  title,
  subtitle,
  size = "small", // small | medium | large
  align = "left", // left | center | right
  theme = "light",  // light | dark (controls text/button contrast)
  overlay = true,
  overlayOpacity = 0.1,
}) {
  const themeButtonClass = theme === "dark" ? "btn--light" : "btn--dark";

  return (
    <section className={`hero hero--${size} hero--align-${align} hero--${theme}`}>
      <div className="hero__bg">

        {overlay && <div className="hero__overlay" style={{ opacity: overlayOpacity }} />}
      </div>

      <div className="hero__content">
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
