import img from '../../assets/about.webp'
import data from '../../assets/data.json'

import Collapse from '../../components/collapse/collapse'
import Banner from '../../components/banner/banner'
import './about.css'

const About = () => {

  return (
    <main id="about">

      <Banner
        src={img}
        alt="Logo Kasa"
      />

      {data.collapse.map(({ title, content }) =>

        <Collapse
          key={title}
          title={title}
          content={content}
        />

      )}
    </main>
  )
}

export default About
