import { useParams } from "react-router-dom";
import data from "../../assets/data.json";

import Error from "../error/error";
import "./housing.css";


const Housing = () => {

  const { id } = useParams();

  const card = data.housing.find(
    (card) => card.id === id
  );

  if (!card) return <Error />;

}
export default Housing
