// Libraries
import { Link } from 'react-scroll';
// CSS
import '../../stylesheets/Title.css';

export default function Title() {
  return (
    <div className='title'>
      <h1>metamorphosis</h1>
      <div className='description'>
        <p>We are hiring new development professionals to create a big proyect.</p>
        <p>
          ¿Are you ready to create? 
          <button className='start-btn'>
            <Link 
                activeClass="active" 
                to="contactUs" 
                spy={true}
                smooth={true} 
                duration={500}
                offset={-10}
            >
              CONTACT US
            </Link>
          </button>
        </p>
      </div>
    </div>
    )
}
