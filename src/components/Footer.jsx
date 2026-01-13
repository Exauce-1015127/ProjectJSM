import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";
import "../footer.css";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "footer"][0]{
          contactTitle,
          phone,
          email,
          kvk,
          socialTitle,
          linkedinUrl,
          companyName,
          tagline
        }
      `)
      .then(setFooter)
      .catch(console.error);
  }, []);

  if (!footer) return null;

  return (
    <footer>
      <div className="main-footer">
        <div className="footer-container">

          <div className="footer-row">
            {/* Column 1 */}
            <div className="footer-column">
              <h4>{footer.contactTitle}</h4>
              <ul className="footer-list">
                {footer.phone && <li>{footer.phone}</li>}
                {footer.email && <li>{footer.email}</li>}
                {footer.kvk && <li>KvK-nr.: {footer.kvk}</li>}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="footer-column">
              <h4>{footer.socialTitle}</h4>
              <ul className="footer-list">
                {footer.linkedinUrl && (
                  <li>
                    <a
                      href={footer.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-column">
              <p className="col-small">
                Copyright &copy; {new Date().getFullYear()}{" "}
                {footer.companyName}
                {footer.tagline && ` | ${footer.tagline}`} | Alle rechten voorbehouden
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
