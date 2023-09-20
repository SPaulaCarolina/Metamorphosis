import Zahi from '../../assets/images/logo.png';

export default function Card() {
  return (
    <div className='col'>
      <div className="card-item">
        <img id="inlineFrameExample"
          title="Inline Frame Example"
          src={Zahi}
          width={400}
          alt="Zahi logo">
        </img>
        <div className="card-body">
          <h5 className="card-title">ZAHI Delicias</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  )
}
