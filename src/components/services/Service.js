import "./Service.css";
import ServiceItem from "./ServiceItem";

function Service() {
    // service item

    let services = [
        {
            serviceIcon : 'bi bi-palette',
            serviceTitle : 'WEB DESIGN',
            serviceInfo : '(1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'

        },
        {
            serviceIcon : 'bi bi-code-square',
            serviceTitle : 'WEB DEVELOPMENT',
            serviceInfo : '(2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'

        },
        {
            serviceIcon : 'bi bi-camera',
            serviceTitle : 'PHOTOGRAPHY',
            serviceInfo : '(3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'

        },
        {
            serviceIcon : 'bi bi-aspect-ratio',
            serviceTitle : 'RESPONSIVE DESIGN',
            serviceInfo : '(4) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'

        },
        {
            serviceIcon : 'bi bi-vector-pen',
            serviceTitle : 'GRAPHIC DESIGN',
            serviceInfo : '(5) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'

        },
        {
            serviceIcon : 'bi bi-cart3',
            serviceTitle : 'MARKETING SERVICES',
            serviceInfo : '(6) Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'

        }
        
    ]

  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
            <ServiceItem {...services[0]} />
            <ServiceItem {...services[1]} />
            <ServiceItem {...services[2]} />
            <ServiceItem {...services[3]} />
            <ServiceItem {...services[4]} />
            <ServiceItem {...services[5]} />
        </div>
      </div>
    </section>
  );
}

export default Service;
