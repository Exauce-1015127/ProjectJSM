import {React, useState} from 'react'
import "../contact.css"
import Swal from 'sweetalert2'


const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if(data.success){
      Swal.fire({
        icon: "success",
        title: "Succes!",
        text: "Uw bericht is succesvol verzonden!",
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Er ging iets fout! Probeer het a.u.b. opnieuw.",
      });
    }
  };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact formulier</h2>
                <div className="form-input-box">
                    <label>Volledige Naam</label>
                    <input type="text" className="field" placeholder="Type hier uw naam..." name='name' required/>
                </div>
                <div className="form-input-box">
                    <label>Email</label>
                    <input type="email" className="field" placeholder="Type hier uw email..." name='email' required/>
                </div>
                <div className="form-input-box">
                    <label>Bericht</label>
                    <textarea placeholder="Type hier uw bericht..." id="" className="field message" name='message' required></textarea>
                </div>
                <button type="submit" className="contact__button">Verzenden</button>
            </form>
        </section>
    )
}

export default Contact
