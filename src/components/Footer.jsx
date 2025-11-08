import React from 'react'
import "../footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="footer-container">
                    <div className="footer-row">
                        {/*column 1 */}
                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul className="footer-list">
                                <li>06-22976551</li>
                                <li>info@jsmadviesbureau.nl</li>
                                <li>KvK-nr.: 73922781</li>
                            </ul>
                        </div>
                        {/*column 2 */}
                        <div className="footer-column">
                            <h4>Social media</h4>
                            <ul className="footer-list">
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-column">
                            <p className="col-small">Copyright &copy; {new Date().getFullYear()} JSM Adviesbureau | Omgevingsmanagement | Stakeholdermanagement | Alle rechten voorbehouden</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
