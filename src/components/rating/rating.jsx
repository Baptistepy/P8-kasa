import "./rating.css";

/**
 * ? RATING
 * * Generates a visual representation of a rating using stars.
 *
 * @param {Object} props - The rating object containing the value to be displayed.
 * @param {number} props.rating - The value to be displayed.
 * @return {JSX.Element} A figure element containing the visual representation of the rating.
 */
const Rating = ({ rating }) => {

  const stars = [];

  for (let i = 0; i < 5; i++) {

    if (i < rating) {
      stars.push(
        <i
          className="fa-solid fa-star primary"
          key={i}
        ></i>
      )

    } else {
      stars.push(
        <i
          className="fa-solid fa-star secondary"
          key={i}
        ></i>
      )
    }
  }

  return (
    <figure className="rating">
      {stars}
    </figure>
  )
}

export default Rating
