import { useParams } from "react-router-dom";

import data from "../../assets/data.json";
import Error from "../error/error";

import Carousel from "../../components/carousel/carousel";
import "./housing.css";


const Housing = () => {

  const { id } = useParams();

  const card = data.housing.find(
    (card) => card.id === id
  );

  if (!card) return <Error />;

  return (
    <main id="housing">

      <Carousel
        pictures={card.pictures}
        alt={card.title}
      />
      <h1>{card.title}</h1>
    </main>
  );
}
export default Housing
