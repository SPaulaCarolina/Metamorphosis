import '../../stylesheets/Navbar.css';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BiSolidHomeAlt2, BiSolidMessageDetail } from 'react-icons/bi';
import { MdOutlineWork } from 'react-icons/md';
import { FaInfo } from 'react-icons/fa';
import { Link } from "react-scroll";

export default function Navbar() {

  const openSidebar = () => {
    document.getElementById("mySidebar").classList.toggle('active');
    document.getElementById("mySidebar").style.display = "block";
  }


  return (
    <nav className='nav'>
      <div className='navicon'>
        <div>
          <ul class="menu" id='mySidebar' data-aos="fade-right"> 
            <div className='nav-arrow' onClick={openSidebar}>
              <RiArrowRightSLine id='iconSidebar' />
            </div>
            <div>
              <Link 
                activeClass="active" 
                to="main" 
                spy={true}
                smooth={true} 
                duration={500}
                offset={0}
                className="active items link"
              >
                <BiSolidHomeAlt2 className='icon-sub' />
              </Link>
              <Link 
                activeClass="active" 
                to="aboutUs" 
                spy={true}
                smooth={true} 
                duration={500}
                offset={0}
                className="active items link"
              >
                <FaInfo className='icon-sub' />
              </Link>
              <Link 
                activeClass="active" 
                to="myWork" 
                spy={true}
                smooth={true} 
                duration={500}
                offset={-20}
                className="active items link"
              >
                <MdOutlineWork className='icon-sub' />
              </Link>
              <Link 
                activeClass="active" 
                to="contactUs" 
                spy={true}
                smooth={true} 
                duration={500}
                offset={-10}
                className="active items link"
              >
                <BiSolidMessageDetail className='icon-sub' />
              </Link>
            </div>            
          </ul>
        </div>
      </div>
    </nav>
  )
}
