import img from '../../assets/about.webp'
import Banner from '../../components/banner/banner'
import './about.css'

const About = () => {
  
  return (
    <main id="about">

      <Banner
        src={img}
        alt="Logo Kasa"
        />
    </main>
  )
}

export default About
