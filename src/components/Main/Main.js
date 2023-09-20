// CSS 
import '../../stylesheets/Main.css'
// Components
import Logo from '../Branding/Logo'
import Title from '../Branding/Title'

export default function Main() {

  return (
    <div className='main col-10' id='mainSection' >
      <Title />
      <Logo />
    </div>
  )
}
