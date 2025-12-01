import { Link } from "react-router-dom";

// components/HeroCard.jsx
export default function HeroCard({
  image,
  title,
  subtitle,
  buttonText,
  buttonLink,
  size = "medium", // small | medium | large
  align = "center", // left | center | right
  theme = "dark",  // light | dark (controls text/button contrast)
  overlay = true,
  overlayOpacity = 0.5,
}) {
  const themeButtonClass = theme === "dark" ? "btn--light" : "btn--dark";

  return (
    <section className={`hero hero--${size} hero--align-${align} hero--${theme}`}>
      <div className="hero__bg">
        <img src={image} alt={title} />
        {overlay && <div className="hero__overlay" style={{ opacity: overlayOpacity }} />}
      </div>

      <div className="hero__content">
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {buttonText && (
          <Link to={buttonLink} className={`btn ${themeButtonClass}`}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
