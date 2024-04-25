import { useState } from "react";
import data from "../../assets/data.json";
import "./carousel.css";

const Carousel = ({ pictures, alt }) => {

  let [index, setIndex] = useState(0);

  const goPrevious = () => {
    setIndex((index) =>
      (index - 1 + pictures.length) % pictures.length)
  }

  const goNext = () => {
    setIndex((index) =>
      (index + 1) % pictures.length)
  }

  return (
    <figure className="carousel">
      <img
        src={pictures[index]}
        alt={`${alt} (${data.carousel} ${index + 1})`}
      />

      {pictures.length > 1 && (
        <nav>
          <i className="fa-solid fa-chevron-left"
            onClick={goPrevious}
          ></i>

          <i className="fa-solid fa-chevron-right"
            onClick={goNext}
          ></i>

          <b>{index + 1}/{pictures.length}</b>
        </nav>

      )}

    </figure>
  )
}

export default Carousel
