import './collapse.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <section className="collapse">
      <h2 onClick={toggleCollapse}>{title}</h2>
      {isOpen && <p>{content}</p>}
    </section>
  )
}

export default Collapse