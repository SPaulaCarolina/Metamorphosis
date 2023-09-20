import '../../stylesheets/AboutUs.css'

export default function SectionTitle( { sectionName } ) {
  return (
    <div>
      <nav className="section-nav col-12">
        <img src="/assets/images/butterfly2.png" width="3%" alt="logo" />
        <h2>{ sectionName }</h2>
      </nav>
    </div>
  )
}
