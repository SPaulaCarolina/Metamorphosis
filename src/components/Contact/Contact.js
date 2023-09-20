// CSS
import "../../stylesheets/Contact.css";
import SectionTitle from "../Branding/SectionTitle";

export default function Contact() {
  return (
    <div className="section section-contact col-12" id="contactUs">
      <div className="col-4 banner-contact-container">
        <div className="col-12 style">
          <SectionTitle sectionName={'Contact Us'} />
        </div>
        <img src="/assets/images/banner-contact.jpg" alt="banner" className="banner-contact" />
      </div>
      <div className="contact-us col-8">
        <h1>CONTACTO</h1>
        <form className="form-contact col-12">
          <div className="row col-12 m-1">
            <div className="col-6">
              <label for="fullName">Nombre y Apellido:</label>
              <input name="fullName" type="text" className="col-6"/>
            </div>
            <div className="col-6">
              <label for="company">Compañia:</label>
              <input name="company" type="text" className="col-6"/>
            </div> 
          </div>
          <div className="row col-12 m-1">
            <div className="col-6">
              <label for="name">E-mail de contacto:</label>
              <input name="name" type="text" className="col-6"/>
            </div>
            <div className="col-6">
              <label for="name">Teléfono:</label>
              <input name="name" type="text" className="col-6 mx-3" />
            </div>     
          </div>
          <div className="row col-12 my-4">
            <div className="col-6 d-flex flex-column">
              <label for="name">¿En que servicios estas interesado?</label>
              <select name="services">
                <option>Branding e imagen</option>
                <option>Diseño web</option>
                <option>Desarrollo web</option>
              </select>
            </div> 
            <div className="col-6 form-budget text-center">
              <label for="name">Presupuesto esperado:</label><br/>
              <span>Desde</span>
              <input name="price" type="number" placeholder="  MIN" className="range" />
              <span>Hasta</span>
              <input name="price" type="number" placeholder="  MAX" className="range"/><br/>
              <div className="span-range">
                <label><input name="name" type="radio" value="usd" className="mx-1" />USD</label>
                <label><input name="name" type="radio" value="ars" className="mx-1" />ARS</label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column col-12">
            <label>Breve descripción del proyecto:</label>
            <textarea rows={5} cols={16}></textarea>
          </div>
          <button type="submit" className="btn btn-outline-light m-3">Contactar</button>
        </form>
      </div>
    </div>
    
  )
}
