import "./card.css";

const Card = ({ src, alt, title }) => {

  return (
    <figure className="card">

      <img 
        src={src} 
        alt={alt} 
      />

      <figcaption>{title}</figcaption>

    </figure>
  )
}

export default Card
