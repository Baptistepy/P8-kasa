import "./host.css";

const Host = ({ name, picture }) => {

  const [firstname, lastname] = name.split(" ");

  return (
    <figure className="host">

      <figcaption>
        {firstname}
        <br />
        {lastname}
      </figcaption>

      <img
        src={picture}
        alt={name}
      />

    </figure>
  )
}

export default Host
