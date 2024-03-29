import { useParams } from "react-router-dom";
import "./housing.css";

const Housing = () => {

  const { id } = useParams();

  const card = data.housing.find(
    (card) => card.id === id
  );

  if (!card) return <Error />;
}

export default Housing
