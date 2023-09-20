import '../../stylesheets/Portfolio.css';
import SectionTitle from '../Branding/SectionTitle';
import Card from './Card';

export default function Portfolio() {
  return (
    <div classname="container col-10" id='myWork'>
      <SectionTitle sectionName={'Our work'} />
      <div className="card-gp row row-cols-1 row-cols-md-2 g-4 col-10">
        <Card />
        <Card />
        <Card /> 
        <Card />
      </div>
    </div>
  )
}
