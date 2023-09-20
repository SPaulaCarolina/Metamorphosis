// Components
import Title from "../Branding/Title";
// CSS 
import "../../stylesheets/AboutUs.css";
import SectionTitle from "../Branding/SectionTitle";

export default function AboutUs() {

  return (
    <div className="section col-12" id="aboutUs">
      <SectionTitle sectionName={'About Us'} />
      <div className="col-8 mx-auto">
        <Title />
      </div>
    </div>
  )
}
