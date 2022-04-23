import '../../assets/Demos.css'
import ChevronRight from '../../components/icons/chevron-right'

const Demos = () => {
  return (
    <div>
      <section className="wavy">
        <h1 className="tags">Catering should be an experience</h1>
        <h1 className="punch-line">
          We use only the finest and freshest ingredients
        </h1>
        <small>
          At Sway catering we know that food is an important part of life.
        </small>
        <small>If the meal is not perfect, your event cannot be perfect.</small>
        <div className="quote-container">
          <button className="btn btn-round green">
            Request quote
            <ChevronRight color="#ffffff" />
          </button>
        </div>
        <div className="curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,293.3C96,299,192,309,288,272C384,235,480,149,576,144C672,139,768,213,864,250.7C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="0.5"
              d="M0,32L48,74.7C96,117,192,203,288,245.3C384,288,480,288,576,261.3C672,235,768,181,864,170.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="0.8"
              d="M0,256L48,229.3C96,203,192,149,288,128C384,107,480,117,576,138.7C672,160,768,192,864,218.7C960,245,1056,267,1152,277.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="description">
        <h1>Catering service in New York</h1>
        <h1 className="speciality">
          We specialize in corporate and private events
        </h1>
        <small>
          With 20 years of experience, we promise you the freshest, local
          ingredients, hand-crafted cooking sprinkled with our unique whimsical
          elegance and exceptional service
        </small>
      </section>
    </div>
  )
}
export default Demos
