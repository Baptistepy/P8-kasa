import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../assets/data.json';
import './collapse.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <section className="collapse">

      <header onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i
          className={`fa-solid ${isOpen ? 'fa-chevron-down animation' : 'fa-chevron-up'} fa-lg`}
        ></i>
      </header>

      {isOpen && (title === data.list ? (
        <ul>
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
          <li className={`${isOpen ? 'translate' : ''}`}>
            {content}
          </li>
        </ul>

      ))}
    </section>
  )
}

export default Collapse