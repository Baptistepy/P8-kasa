import { useParams } from "react-router-dom";

import data from "../../assets/data.json";
import Error from "../error/error";

import Carousel from "../../components/carousel/carousel";
import Collapse from "../../components/collapse/collapse";
import Host from "../../components/host/host";
import Rating from "../../components/rating/rating";
import "./housing.css";


// The Housing component is the main component for the housing page.
// It receives the id parameter from the URL and finds the corresponding card in the data.json.
// If no card is found, it renders the Error component.
// Otherwise, it renders the main housing section.

const Housing = () => {
  // Use the useParams hook to get the id parameter from the URL.
  const { id } = useParams();

  // Find the card in the data.json that matches the id parameter.
  const card = data.housing.find(
    (card) => card.id === id
  );

  // If no card is found, render the Error component.
  if (!card) return <Error />;

  // Render the main housing section.
  return (
    // The main housing section has an id of housing.
    <main id="housing">

      {/* Render the Carousel component passing the pictures and alt of the card. */}
      <Carousel
        pictures={card.pictures}
        alt={card.title}
      />

      {/* Render the housing section. */}
      <section>

        {/* Render the header of the housing section. */}
        <header>
          {/* Render the title and location of the card. */}
          <h1>{card.title}</h1>
          <p>{card.location}</p>

          {/* Render the tags of the card. */}
          <ul>
            {card.tags.map((tag) =>
              <li key={tag}>
                <label>{tag}</label>
              </li>
            )}
          </ul>
        </header>

        {/* Render the figure section. */}
        <figure>
          {/* Render the Rating component passing the rating of the card. */}
          <Rating rating={card.rating} />

          {/* Render the Host component passing the name and picture of the card. */}
          <Host
            name={card.host.name}
            picture={card.host.picture}
          />
        </figure>
      </section>

      {/* Render the footer of the housing section. */}
      <footer>
        {/* Render the Collapse component for the description of the card. */}
        <Collapse
          title="Description"
          content={card.description}
        />

        {/* Render the Collapse component for the equipments of the card. */}
        <Collapse
          title="Équipements"
          content={card.equipments}
        />
      </footer>

    </main>
  );
}
export default Housing
