import React from 'react'
import "../contact.css"

const Contact = () => {
    return (
        <section className="contact">
            <form>
                <h2>Contact formulier</h2>
                <div className="form-input-box">
                    <label>Volledige Naam</label>
                    <input type="text" className="field" placeholder="Type hier uw naam..." required/>
                </div>
                <div className="form-input-box">
                    <label>Email</label>
                    <input type="email" className="field" placeholder="Type hier uw email..." required/>
                </div>
                <div className="form-input-box">
                    <label>Bericht</label>
                    <textarea placeholder="Type hier uw bericht..." id="" className="field message" required></textarea>
                </div>
                <button type="submit">Verzenden</button>
            </form>
        </section>
    )
}

export default Contact
