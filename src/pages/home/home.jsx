import { Link } from "react-router-dom";

import img from '../../assets/home.webp';
import data from '../../assets/data.json';

import Banner from '../../components/banner/banner';
import Card from  '../../components/card/card';

import './home.css'

function Home() {
  return (
    <main>

      <Banner
        src={img}
        alt={data.home}
        title={data.title}
      />

      <ul>
        {data.housing.map(({ cover, title, id }) =>

          <li key={id}>
            <Link to={`/housing/${id}`}>
              <Card src={cover} alt={`Présentation d'un ${title}`} title={title} />
            </Link>
          </li>

        )}
      </ul>

    </main>
  )
}

export default Home
