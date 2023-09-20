// Assets
import Butterfly from '../../assets/images/butterfly2.png';
// CSS
import '../../stylesheets/Logo.css'

export default function Logo() {
  return (
    <div className='logo-container'>
      <img src={Butterfly} alt='logo' className='logo' />
    </div>
  )
}
