import { useState } from 'react';
import './collapse.css';

/*
  This component, Collapse, is a reusable collapsible section component. 
  It takes in a 'title' and 'content' prop. The 'title' is the text that
  appears at the top of the collapsible section, and the 'content' is the
  text or array of text that appears when the section is open.

  The component maintains its own state to keep track of whether or not
  the section is currently open. The state is represented by the 'isOpen'
  variable, and the function to toggle the state is 'toggleCollapse'.

  The component renders a section with a header and a list. The header
  contains the 'title' and an icon that indicates whether or not the section
  is currently open. Clicking on the header toggles the state of the section.

  The list is conditionally rendered based on whether or not the section is
  open. If the section is open and the 'title' is "Équipements", the list is
  rendered with each item from the 'content' array as a list item. Otherwise,
  the list is rendered with a single list item containing the 'content'.

  The CSS class 'collapse' styles the section, and the class 'animation' and
  the conditionally applied class 'translate' are used to animate the
  opening and closing of the section.
*/
const Collapse = ({ title, content }) => {
  // State to keep track of whether or not the section is open
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state of the section
  const toggleCollapse = () => setIsOpen(!isOpen);

  // Render the collapsible section
  return (
    <section className="collapse">

      {/* Render the header */}
      <header onClick={toggleCollapse}>
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