import { useState } from 'react';
import './collapse.css';


const Collapse = ({ title, content }) => {
  // State to keep track of whether or not the section is open
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state of the section
  const activeCollapse = () => setIsOpen(!isOpen);

  // Render the collapsible section
  return (
    <section className="collapse">

      {/* Render the header */}
      <header onClick={activeCollapse}>
        <h2>{title}</h2>
        {/* Render the chevron icon */}
        <i
          className={`fa-solid ${isOpen ? 'fa-chevron-down animation' : 'fa-chevron-up'} fa-lg`}
        ></i>
      </header>

      {/* Render the list */}
      {isOpen && (
        title === "Équipements" ? (
          <ul>
            {/* Render each item from the 'content' array as a list item */}
            {content.map((item, index) => (
              <li
                key={index}
                className={`${isOpen ? 'translate' : ''}`}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {/* Render the 'content' as a single list item */}
            <li className={`${isOpen ? 'translate' : ''}`}>
              {content}
            </li>
          </ul>
        )
      )}
    </section>
  )
}


export default Collapse